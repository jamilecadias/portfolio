import React, { useEffect, useState } from 'react';
import { BannerContainer } from './styles';

export default function Banner() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const targetText = "Hi i'm Jamile";
    let currentIndex = 0;
    let timeout;

    function typeText() {
      setTypedText(targetText.substring(0, currentIndex));

      if (currentIndex < targetText.length) {
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      }
    }

    typeText();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleDownloadCV = () => {
    // Abrir o link em uma nova aba ou janela
    window.open('https://drive.google.com/drive/folders/1HeivYSaRItEh9u2H3gwuELy5Uu7Q-Rdb?usp=drive_link', '_blank');
  };

  return (
    <BannerContainer>
      <div>
        <h2>{typedText}</h2>
        <h1>Full Stack developer</h1>
        <p>Software Engineering Student</p>
        <button type="button" onClick={handleDownloadCV}>
          Download CV
        </button>
      </div>
    </BannerContainer>
  );
}







/* 
import React, { useEffect, useState } from 'react'
import { BannerContainer} from './styles'


export default function Banner() {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
      const targetText = "Hi i'm Jamile";
      let currentIndex = 0;
      let timeout;
  
      function typeText() {
        setTypedText(targetText.substring(0, currentIndex));
  
        if (currentIndex < targetText.length) {
          currentIndex++;
          timeout = setTimeout(typeText, 100);
        }
      }
  
      typeText();
  
      return () => {
        clearTimeout(timeout);
      };
    }, []);
  
    return (
        <BannerContainer>
        <div>
            <h2>{typedText}</h2>
            <h1>Full Stack developer</h1>
            <p>Software Engineering Student</p>
            <a href="https://drive.google.com/drive/folders/1HeivYSaRItEh9u2H3gwuELy5Uu7Q-Rdb?usp=sharing" download>
          <button type="button">Download CV</button>
        </a>   
        </div>
        </BannerContainer>
    )
} */