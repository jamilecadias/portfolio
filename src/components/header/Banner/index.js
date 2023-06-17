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
            <p>Loren impsum</p>
            <button type="button">Download CV</button>         
        </div>
        </BannerContainer>
    )
}