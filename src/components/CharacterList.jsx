import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [seenCount, setSeenCount] = useState([]);

  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey);

  const characterNames = [
    'Spider-Man', 'Ironman', 'Hulk', 'Doctor Strange', 'Thor', 'Deadpool'
  ];

  useEffect(() => {
    const fetchCharacterByName = async (name) => {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters`, {
          params: {
            ts,
            apikey: publicKey,
            hash,
            name,
          },
        });

        if (response.data.data.results.length > 0) {
          const character = response.data.data.results[0];
          const urls = character.urls?.length > 0 
            ? character.urls[0].url 
            : 'http://marvel.com';

          return {
            name: character.name,
            imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            marvelUrl: urls
          };
        } else {
          return null;
        }
      } catch (error) {
        console.error(`Error fetching ${name}`, error);
        return null;
      }
    };

    const fetchAllCharacters = async () => {
      const fetchedCharacters = [];
      for (const name of characterNames) {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500)); 
          const character = await fetchCharacterByName(name);
          if (character !== null) {
            fetchedCharacters.push(character);
          }
        } catch (error) {
          console.error(`Error fetching character: ${name}`, error);
        }
      }
      setCharacters(fetchedCharacters);
      setSeenCount(Array(fetchedCharacters.length).fill(0)); 
    };

    fetchAllCharacters();
  }, []);

  const handleCharacterSeen = (index) => {
    const newSeenCount = [...seenCount];
    newSeenCount[index] += 1;
    setSeenCount(newSeenCount);
  };

  return (
    <div className="character-list">
      {characters.map((character, index) => {
        console.log(character);
        return (
          <div key={index} className="character-item">
            {character.imageUrl && <img src={character.imageUrl} alt={character.name} />}
            <h3>
              <a href={character.marvelUrl} target="_blank" rel="noopener noreferrer">
                {character.name}
              </a>
            </h3>
            <button onClick={() => handleCharacterSeen(index)}>YES</button>
            <span className="counter">Seen {seenCount[index]} times</span>
          </div>
        );
      })}
      {/* Attribution */}
      <footer className="marvel-attribution">
        <p>Data provided by Marvel. © 2014 Marvel</p>
      </footer>
    </div>
  );
}

export default CharacterList;
