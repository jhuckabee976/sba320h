import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';

function Background() {
  const [backgroundImage, setBackgroundImage] = useState('');

  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
  const ts = new Date().getTime(); // Timestamp
  const hash = md5(ts + privateKey + publicKey); // Generate hash

  useEffect(() => {
    const fetchRandomCharacter = async () => {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters`, {
          params: {
            ts, // Timestamp
            apikey: publicKey, 
            hash, 
            limit: 75
          }
        });

        const characters = response.data.data.results;
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        const imageUrl = `${randomCharacter.thumbnail.path}.${randomCharacter.thumbnail.extension}`;
        setBackgroundImage(imageUrl);
      } catch (error) {
        console.error('Error fetching data from Marvel API', error);
      }
    };

    const interval = setInterval(() => {
      fetchRandomCharacter();
    }, 5000);

    return () => clearInterval(interval);
  }, [publicKey, hash]);

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
    </div>
  );
}

export default Background;
