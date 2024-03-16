import './index.scss';
import React from 'react';

function DesignSystem() {
  return (
    <div className="ff-sans-normal">
      <head>
        // google fonts
        <link rel='stylesheet' href="index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap"
          rel="stylesheet" />
        <title>Design System</title>
      </head>
      <body className='bg-dark text-white'>

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

          <h2 className='uppercase'  ><span className='text-accent'>01</span> colors</h2>
          <ColorStyles />
          <TypographyStyles />
        </div>

        <script src="index.pack.js"></script>
      </body>
    </div>
  );
}


const TypographyStyles: React.FC = () => {
  return (
    <section id="typography">

      <div className="" style={{ margin: "5rem 0" }}>
        <h2 className='uppercase'><span className='text-accent' >02</span> Typography</h2>
        <div className="grid two-columns ">

          <div className='ff-serif'>

            <p className='text-accent'>Heading 1 - Bellefair Regular - 150px</p>
            <h1 className='uppercase fs-900 margin-40b'>earth</h1>

            <p className='text-accent'>Heading 2 - Bellefair Regular - 100px</p>
            <h2 className='uppercase fs-800 margin-40b'>venus</h2>

            <p className='text-accent'>Heading 3 - Bellefair Regular - 56px</p>
            <h3 className='uppercase fs-700 margin-40b'>jupiter & saturn</h3>

            <p className='text-accent'>Heading 4 - Bellefair Regular - 32px</p>
            <h4 className='uppercase fs-600'>uranus, neptune, & pluto</h4>

            <p className='text-accent'>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
            <h5 className='ff-sans-cond letter-spacing-1 fs-500 uppercase text-accent'>so, you want to travel to space</h5>

          </div>

          <div>
            <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
            <h5 className="fs-500 margin-40b">384,400 km</h5>
            <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
            <h2 className="ff-sans-cond letter-spacing-3 fs-200 margin-40b uppercase">avg. distance</h2>
            <p className="text-accent">Nav Text - Barlow Condensed R egular - 16px - 2.7 Character Space</p>
            <p className="letter-spacing-2 ff-sans-cond fs-300 uppercase margin-40b">europa</p>
            <p className='text-accent' >Body Text</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita et omnis laborum consequuntur aliquid voluptatem maxime. Quos a dolorum provident dicta facilis asperiores, laborum mollitia ipsam soluta minus recusandae nobis quidem ut labore in dolore nisi similique accusantium ratione, aut voluptas non quam! Magnam iure fugit, dignissimos dolores quae animi recusandae fugiat nesciunt veritatis, minus voluptatem, itaque minima nulla quibusdam laudantium amet vel corporis! Recusandae dolorem illum itaque iure? Dolores, at et! Voluptate quia quibusdam unde hic tempore corrupti perspiciatis beatae! Nulla dicta eveniet quidem veniam odio similique nesciunt ipsum! Reprehenderit molestias ducimus veniam at. Facilis consequatur consectetur possimus atque!</p>
          </div>

        </div>
      </div>
    </section>
  )
}



const ColorStyles: React.FC = () => {
  return (
    <section id="colors">
      <div className="flex" style={{ justifyContent: "space-around" }}>

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