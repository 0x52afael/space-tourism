import React from "react";

interface SliderProps {
    numberOfSliders: number;
    sliderType: "primary-slider" | "secondary-slider"
}

function InteractiveElements() {
    return (
        <section className="flow" style={{ "--flow-space": "5rem" } as React.CSSProperties} id="interative-elements ">
            <h2 className="numbered-title"><span>03 Interactive Elements</span></h2>
            <div className="nav-bar"></div>

            <div className="interactive-elements flex space-between" style={{ marginBottom: "15vh" }}>
                <LargeButton />
                <div>tabs here</div>
                <div>
                    <Sliders numberOfSliders={5} sliderType="primary-slider" />
                </div>
                <div>
                    <Sliders numberOfSliders={3} sliderType="secondary-slider" />
                </div>
            </div>

        </section>
    )
}



const Sliders: React.FC<SliderProps> = ({ numberOfSliders, sliderType }) => {

    const sliders: JSX.Element[] = Array.from({ length: numberOfSliders },
        (_, index) => index + 1)
        .map((index) => <div className={`${sliderType}`} > {index}</div >)

    return (
        <div className="flow ff-serif fs-500">
            {sliders}
        </div>
    )
}

const LargeButton: React.FC = () => {
    return (
        <div>
            <a href="#" className="large-button bg-white text-dark uppercase ff-serif fs-600">Explore</a>
        </div>
    )
}



export default InteractiveElements;