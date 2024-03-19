import './../../index.scss';
import ColorStyles from './ColorStyles';
import InteractiveElements from './InteractiveElements';
import MainButton from './LargeButton';
import TypographyStyles from './TypographyStyles';
import React from 'react';

function DesignSystem() {
  return (
    <div className="ff-sans-normal" id="design-system" >
      <head>
        // google fonts
        <link rel='stylesheet' href="index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap"
          rel="stylesheet" />
        <title>Design System</title>
      </head>
      <body className='bg-dark text-white bg-desktop'>

        <div className="container">
          <h1>Design System</h1>

          <div className="bg-light text-dark" style={{ padding: "1rem" }}>
            light blue bg, with dark text
          </div>

          <div className="bg-white text-dark" style={{ padding: "1rem" }}>
            white bg, with dark text
          </div>

          <div className="example-component bg-light " style={{ padding: "1rem" }}>
            light blue bg with a 20% alpha and white text
          </div>


          <ColorStyles />
          <TypographyStyles />
          <InteractiveElements />

        </div>

        <script src="index.pack.js"></script>
      </body>
    </div>
  );
}


export default DesignSystem;