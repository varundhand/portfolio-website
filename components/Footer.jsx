import React from 'react';
import { WavyBackground } from './ui/wavy-background';

export default function Footer({ darkMode }) {
  return (
    <WavyBackground className='' style={{height: ''}}>
      <footer>
        <h2 className={`text-xl pb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
          Made with {' '}
          <svg
            id="heart"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 512 512"
            style={{ paddingBottom: '15px' }}
          >
            <title>Love</title>
            <path
              fill={`${darkMode ? '#9bd4e4' : '#3cacae'}`}
              d="M466.13,64.85A155.12,155.12,0,0,0,355.27,18.51h-.05A155,155,0,0,0,256,54.17,156,156,0,0,0,45.8,64.83C-15.3,126.32-15.3,226.42,46,288.18L256,493.49l210-205.31.2-.2a158.59,158.59,0,0,0,0-223.12Zm-69.36,107.3a38.45,38.45,0,0,0-38.41-38.41V95.33a76.91,76.91,0,0,1,76.82,76.82Z"
            />
          </svg>{' '}
          by Varun Dhand
        </h2>
      </footer>
    </WavyBackground>
  );
}
