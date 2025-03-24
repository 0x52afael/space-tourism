import React from "react";
import LargeButton from "../LargeButton";
import { Tabs, DotTabs } from "../TabComponents";
import Navigation from "../Navigation";

interface SliderProps {
  numberOfSliders: number;
}

function InteractiveElements() {
  return (
    <section id="interactive-elements" className="flow" style={{ "--flow-space": "5rem" } as React.CSSProperties}>
      <h2 className="numbered-title"><span>03 </span>Interactive Elements</h2>
      <div className="nav-bar"></div>
      <div >
        <Navigation content={["00 active", "01 hovered", "02 idle"]} hrefs={["#", "#interactive-elements", "#interactive-elements"]} />
      </div>
      <div className="interactive-elements flex space-between mx-5 mb-10" >
        <div className="">
          <LargeButton />
          <p className="text-accent letter-spacing-2 text-center mb-10 mt-5">Landing Page Main Button - Idle</p>
        </div>

        <div style={{ marginBottom: "25vh" }}>
          <Tabs />
          <p className="text-accent letter-spacing-2 mb-10 text-center" style={{ marginTop: "2rem" }}>Tabs (Active, Hover, & Idle)</p>
          <DotTabs />
          <p className="text-accent letter-spacing-2 text-center mb-10" style={{ marginTop: "2rem" }}>Slider 1 States (Active, Hover, & Idle)</p>
          <Sliders numberOfSliders={3} />
          <p className="text-accent letter-spacing-2 text-center mt-5">Slider 2 States (Active, Hover, & Idle)</p>
        </div>
      </div>

    </section >
  )
}


const Sliders: React.FC<SliderProps> = ({ numberOfSliders }) => {

  const sliders: JSX.Element[] = Array.from({ length: numberOfSliders },
    (_, index) => index + 1)
    .map((index) => <div className="slider bg-dark text-white" tabIndex={0} > {index}</div>)

  return (
    <div className="flow ff-serif grid flex-center" style={{ "--flow-space": "1em" } as React.CSSProperties}>
      {sliders}
    </div>
  )
}


export default InteractiveElements;
