import React from "react";

export const Navigation: React.FC = () => {
    return (
        <div>
            <nav>
                <ul className="primary-navigation underline-indicators flex ff-sans-cond uppercase">
                    <li className="active">
                        <a className="text-white letter-spacing-1" href="#interactive-elements" tabIndex={0}><span>00</span> Active</a>
                    </li>
                    <li>
                        <a className="text-white letter-spacing-1" href="#interactive-elements" tabIndex={0}><span>01</span> Hovered</a>
                    </li>
                    <li>
                        <a className="text-white letter-spacing-1" href="#interactive-elements" tabIndex={0}><span>02</span> Idle</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
