import React from 'react';


function TypographyStyles() {
    return (
        <section id="typography">

            <div style={{ margin: "5rem 0" }}>
                <h2 className='numbered-title'><span>02</span> Typography</h2>
                <div className="grid two-columns ">

                    <div className='ff-serif flow'>

                        <div>
                            <p className='text-accent'>Heading 1 - Bellefair Regular - 150px</p>
                            <h1 className='uppercase fs-900 '>earth</h1>
                        </div>

                        <div>
                            <p className='text-accent'>Heading 2 - Bellefair Regular - 100px</p>
                            <h2 className='uppercase fs-800 '>venus</h2>
                        </div>

                        <div>
                            <p className='text-accent'>Heading 3 - Bellefair Regular - 56px</p>
                            <h3 className='uppercase fs-700 '>jupiter & saturn</h3>
                        </div>

                        <div>
                            <p className='text-accent'>Heading 4 - Bellefair Regular - 32px</p>
                            <h4 className='uppercase fs-600'>uranus, neptune, & pluto</h4>
                        </div>

                        <p className='text-accent'>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                        <h5 className='ff-sans-cond letter-spacing-1 fs-500 uppercase text-accent'>so, you want to travel to space</h5>

                    </div>

                    <div className='flow' style={{ "--flow-space": "5rem" } as React.CSSProperties}>
                        <div>
                            <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                            <h5 className="fs-500 ">384,400 km</h5>
                        </div>

                        <div>
                            <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                            <h2 className="ff-sans-cond letter-spacing-3 fs-200  uppercase">avg. distance</h2>
                        </div>
                        <div>
                            <p className="text-accent">Nav Text - Barlow Condensed R egular - 16px - 2.7 Character Space</p>
                            <p className="letter-spacing-2 ff-sans-cond fs-300 uppercase ">europa</p>
                        </div>

                        <div>
                            <p className='text-accent' >Body Text</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}


export default TypographyStyles;