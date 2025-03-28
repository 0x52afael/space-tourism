import React from "react";

interface NavigationProps {
	content: string[];
	hrefs: string[];
}

const navigationContentHelper = (
	content: string[],
	hrefs: string[],
): JSX.Element[] => {
	return content.map((tabItem, idx) => {
		const tabItemContent: string[] = tabItem.split(" ");
		return (
			<li>
				<a
					className="text-white letter-spacing-1 fs-400"
					href={hrefs?.[idx]}
					tabIndex={0}
				>
					<span>{tabItemContent?.[0]}</span>
					{tabItemContent?.[1]}
				</a>
			</li>
		);
	});
};

function Navigation(props: NavigationProps) {
	return (
		<div className="nav-container flex flex-center">
			<div className="logo " />

			<button className="bg-transparent hamburger">
				<span
					className="sr-only mobile-nav-toggle"
					aria-controls="primary-navigation"
					aria-expanded="false"
				>
					Menu
				</span>
			</button>

			<nav className=" mx-5">
				<ul className="primary-navigation underline-indicators flex  ff-sans-cond uppercase ">
					{navigationContentHelper(props.content, props.hrefs)}
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
