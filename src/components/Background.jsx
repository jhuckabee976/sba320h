import React, { useEffect, useState } from 'react';

function Background() {
  // Placeholder state for background image
  const [backgroundImage, setBackgroundImage] = useState('initial-image-url');

  
  useEffect(() => {
    const interval = setInterval(() => {
      
      setBackgroundImage('next-image-url');
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
    </div>
  );
}

export default Background;
