import React from 'react';
import styled from 'styled-components';

const Welcome = styled.div`
  /* Your welcome banner styles */
`;

const Buttons = styled.div`
  /* Your buttons container styles */
`;

const Image = styled.img`
  width: 100%; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Ensure the image is displayed as a block element */
`;

export function WelcomeBanner() {
  return (
    <Welcome>
      <div className="image-container">
        <Image src=".\src\OHYEAHbet.png" alt="OHYEAH Banner" />
      </div>
      <div className="button-container">
        <Buttons>
          <button className="creative-button" onClick={() => window.open('https://t.me/KOOL_AID_MAN_SOL', '_blank')}>
             Telegram
          </button>
          <button className="creative-button" onClick={() => window.open('https://twitter.com/koolaidmansol', '_blank')}>
             Twitter
          </button>
        </Buttons>

      </div>
    </Welcome>
  );
}

