import React from "react";
import Navigation from "./Navigation";
import LargeButton from "./LargeButton";

type Props = {};

function HomePageComponent(props: Props) {
	return (
		<body className="home ">
			<div className="text-white">
				<div>
					<Navigation
						content={["00 Home", "01 Destination", "02 Crew", "03 Technology"]}
						hrefs={["#", "#interactive-elements", "#endregion"]}
					/>
				</div>
				<div className="grid-container grid-container--home ">
					<div>
						<h1 className="flex flex-d-column ff-sans-cond letter-spacing-1 fs-500 uppercase text-accent">
							So, you want to travel to{" "}
							<span className=" uppercase fs-900 ff-serif text-white">
								Space
							</span>
						</h1>
						<p className="text-accent ">
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience !
						</p>
					</div>
					<div>
						<LargeButton />
					</div>
				</div>
			</div>
		</body>
	);
}

export default HomePageComponent;
