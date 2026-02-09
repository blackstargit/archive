import React, {useState} from "react";

export default function ContactForm() {

	const [hovered, setHovered] = useState(false);
	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};


	const style = {
		contactInput: {
			width: "100%",
			fontSize: "1.1rem",
			padding: "1em",
			marginBottom: "1em",
			borderRadius: "20px",
			border: "none",
			outline: "none",
			borderBottom: "2px solid white",
			backgroundColor: "transparent",
			resize: "none",
			color: "white",
		},

		submitBtn: {
			width: "200px",
			border: "1px solid #fff",
			borderRadius: "50px",
			backgroundColor: "transparent",
			color: "white",
			fontSize: "1.1rem",
			padding: ".7em 1.5em",
			cursor: "pointer",
		},
	};

	const btnHover = {
		width: "200px",
		border: "1px solid #fff",
		borderRadius: "50px",
		fontSize: "1.1rem",
		padding: ".7em 1.5em",
		cursor: "pointer",
		backgroundColor: "white",
		color: "#000",
	};

	
	return (
		<form className="contact-form">
			<div>
				<input
					type="text"
					placeholder="Full Name"
					className="contactInput"
					style={style.contactInput}
				/>
				<input
					type="text"
					placeholder="Email"
					className="contactInput"
					style={style.contactInput}
				/>
			</div>
			<textarea
				name=""
				id=""
				cols={30}
				rows={5}
				placeholder="Message"
				className="contactInput"
				defaultValue={""}
				style={style.contactInput}
			/>
			<button
				type="submit"
				className="submit-btn"
				
				style={
					hovered ? btnHover : style.submitBtn
				}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				Submit
			</button>
		</form>
	);
}
