import './index.scss';
import React from 'react';

function DesignSystem() {
  return (
    <div className="design-system">
      <head>
        <link rel='stylesheet' href="index.css" />
        <title>Design System</title>
      </head>
      <body className='bg-dark text-white'>
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

          <section id="colors" style={{ margin: "5em" }}>
            <h2 className=''><span>01</span> colors</h2>
            <div className="container flex center" style={{ flexGrow: "1" }}>
              <div className="color-box bg-dark "
                style={{ border: "hsl(var(--clr-light)) 1px solid", justifyContent: "left" }}>#9B9D17</div>
              <div className="color-box bg-light text-dark"
                style={{ border: "hsl(var(--clr-light)) 1px solid" }} >#D0D6F9</div>
              <div className="color-box bg-white text-dark"
                style={{ border: "hsl(var(--clr-light)) 1px solid" }} >#FFFFFF</div>

            </div>
            <div className="conatiner flex" style={{

            }}>
              <p className="bg-dark" ><span className="text-accent">RGB</span> 11, 13, 23</p>
              <p className="" ><span className="text-accent">RGB</span> 208, 214, 249</p>
              <p className="" ><span className="text-accent">RGB</span> 255, 255 ,255</p>

              <p className=''><span className="text-accent" >HSL</span> 230°, 35%, 7%</p>
              <p className=''><span className="text-accent">HSL</span> 231°, 77%, 90%</p>
              <p className=''><span className="text-accent">HSL</span> 0°, 0%, 100%</p>

            </div>
          </section>
        </div>

        <script src="index.pack.js"></script>
      </body>
    </div>
  );
}

export default DesignSystem;