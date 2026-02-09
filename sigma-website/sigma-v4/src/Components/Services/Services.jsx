import Service from "./Service";

export default function Services() {
	const whatWeDo = {
		textAlign: "center",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
		margin: "10% 0",
	};

	const whatWeDoH4 = {
		color: 'gold',
	};

	return (
		<section className="what-we-do" style={whatWeDo}>
			<div>
				<h4 style={whatWeDoH4}>WHAT WE DO</h4>
				<h3>
					We've got everything you need to launch and grow your
					business
				</h3>
			</div>
			<hr className="solid-line black" />
			<div className="specs">
				<Service img="#" heading="#" details="#" />
			</div>
		</section>
	);
}
