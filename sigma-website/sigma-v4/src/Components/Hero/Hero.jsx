import React, { useState } from "react";

export default function Hero() {
	const [hovered1, setHovered1] = useState(false);
	const [hovered2, setHovered2] = useState(false);

	const css = {
		hero: {
			padding: "20px",
			height: "92vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#000",
			color: "white",
		},
		heroContent: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			gap: "20px",
		},
		heroBtns: { display: "flex", gap: "20px" },
		heroBtnsButton: {
			borderRadius: "5%",
			padding: "6px 35px",
			color: "white",
			backgroundColor: "transparent",
			borderColor: "white",
		},
		heroBtnsButtonHover: {
			backgroundColor: "#0056b3",
			borderRadius: "5%",
			padding: "6px 35px",
			color: "white",
			borderColor: "white",
		},
	};

	const handleMouseEnter1 = () => {
		setHovered1(true);
	};

	const handleMouseLeave1 = () => {
		setHovered1(false);
	};

	const handleMouseEnter2 = () => {
		setHovered2(true);
	};

	const handleMouseLeave2 = () => {
		setHovered2(false);
	};

	return (
		<section className="hero" style={css.hero}>
			<div className="hero-content" style={css.heroContent}>
				<h1 className="hero-heading">Welcome to Our Website</h1>
				<p className="hero-subheading">
					Discover amazing features and services.
				</p>
				<div className="hero-btns" style={css.heroBtns}>
					<button
						style={
							hovered1
								? css.heroBtnsButtonHover
								: css.heroBtnsButton
						}
						onMouseEnter={handleMouseEnter1}
						onMouseLeave={handleMouseLeave1}
					>
						Button 1
					</button>

					<button
						style={
							hovered2
								? css.heroBtnsButtonHover
								: css.heroBtnsButton
						}
						onMouseEnter={handleMouseEnter2}
						onMouseLeave={handleMouseLeave2}
					>
						Button 2
					</button>
				</div>
			</div>
		</section>
	);
}
