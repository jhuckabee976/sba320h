import React from 'react';

function CharacterList() {
    const characters = ["Spiderman", "Ironman", "The Incredible Hulk", "Thor", "Dr. Strange"];

    return (
        <div className="character-list">
            {characters.map((character, index) => (
                <div key={index} className="character-item">
                    <h3>{character}</h3>
                    <p>Have You Seen Me?</p>
                    <button className="yes-button">YES</button>
                    <span className="counter">0</span>
                </div>
            ))}
        </div>
    );
}

export default CharacterList;