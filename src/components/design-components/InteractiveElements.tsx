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
                <div>
                    <Navigation />
                </div>
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


const Navigation: React.FC = () => {
    return (
        <div>
            <nav>
                <ul className="primary-navigation underline-indicators flex ff-sans-cond uppercase">
                    <li>
                        <a className="text-white letter-spacing-1" href="#" tabIndex={0}><span>00</span> Active</a>
                    </li>
                    <li>
                        <a className="text-white letter-spacing-1" href="#" tabIndex={0}><span>01</span> Hovered</a>
                    </li>
                    <li>
                        <a className="text-white letter-spacing-1" href="#" tabIndex={0}><span>02</span> Idle</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


const Sliders: React.FC<SliderProps> = ({ numberOfSliders, sliderType }) => {

    const sliders: JSX.Element[] = Array.from({ length: numberOfSliders },
        (_, index) => index + 1)
        .map((index) => <div className={`${sliderType}`} tabIndex={0} > {index}</div >)

    return (
        <div className="flow ff-serif fs-500" style={{ "--flow-space": "1em" } as React.CSSProperties}>
            {sliders}
        </div>
    )
}



const onSecondarySliderClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    const slider = event.currentTarget.setAttribute("data-active", "true")
}

const LargeButton: React.FC = () => {
    return (
        <div>
            <a href="#" className="large-button bg-white text-dark uppercase ff-serif fs-600">Explore</a>
        </div>
    )
}



export default InteractiveElements;