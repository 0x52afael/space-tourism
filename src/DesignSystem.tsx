import './index.scss';
import React from 'react';

function DesignSystem() {
  return (
    <div className="design-system ff-sans-normal">
      <head>
        // google fonts
        <link rel='stylesheet' href="index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap"
          rel="stylesheet" />
        <title>Design System</title>
      </head>
      <body className='bg-dark text-white' style={{ overflow: "hidden" }}>
        <div className="container">
          <h1 className='text-accent'>
            Design System
          </h1>

          <div className="bg-light text-dark" style={{ padding: "1rem" }}>
            light blue bg, with dark text
          </div>

          <div className="bg-white text-dark" style={{ padding: "1rem" }}>
            white bg, with dark text
          </div>

          <div className="example-component bg-light " style={{ padding: "1rem", }}>
            light blue bg with a 20% alpha and white text
          </div>

          <ColorStyles />

        </div>

        <script src="index.pack.js"></script>
      </body>
    </div>
  );
}




const ColorStyles: React.FC = () => {
  return (
    <section id="colors" style={{ margin: "5em" }}>
      <h2 className='uppercase '><span>01</span> colors</h2>
      <div className="container flex">

        <div style={{ flexGrow: "1" }}>
          <div className="color-box bg-dark"
            style={{ border: "hsl(var(--clr-light)) 1px solid" }}>#9B9D17</div>
          <p className="bg-dark" ><span className="text-accent">RGB</span> 11, 13, 23</p>
          <p className=''><span className="text-accent" >HSL</span> 230°, 35%, 7%</p>
        </div>

        <div style={{ flexGrow: "1" }}>
          <div className="color-box bg-light text-dark"
            style={{ border: "hsl(var(--clr-light)) 1px solid" }} >#D0D6F9</div>
          <p className="" ><span className="text-accent">RGB</span> 208, 214, 249</p>
          <p className=''><span className="text-accent">HSL</span> 231°, 77%, 90%</p>
        </div>

        <div style={{ flexGrow: "1" }}>
          <div className="color-box bg-white text-dark"
            style={{ border: "hsl(var(--clr-light)) 1px solid" }} >#FFFFFF</div>
          <p className="" ><span className="text-accent">RGB</span> 255, 255 ,255</p>
          <p className=''><span className="text-accent">HSL</span> 0°, 0%, 100%</p>
        </div>
      </div>
    </section>
  )
}

export default DesignSystem;