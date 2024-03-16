import React from "react";


function ColorStyles() {
    return (<section id="colors">
        <h2 className='numbered-title'  ><span>01</span> colors</h2>
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
    </section>)
}



export default ColorStyles;