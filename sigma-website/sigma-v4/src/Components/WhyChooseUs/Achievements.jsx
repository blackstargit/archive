export default function Achievements() {
	const subAchievements = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginTop: "30px",
	};

	return (
		<div className="achievements ">
			<div className="sub-achievements" style={subAchievements}>
				<div className="achievement">
					<h3>100</h3>
					<p>Dead</p>
				</div>
				<hr className="vertical" />
				<div className="achievement">
					<h3>100</h3>
					<p>Dead</p>
				</div>
			</div>
			<div className="sub-achievements" style={subAchievements}>
				<div className="achievement">
					<h3>100</h3>
					<p>Dead</p>
				</div>
				<hr className="vertical" />
				<div className="achievement">
					<h3 className="text-black bg-white">100</h3>
					<p>Dead</p>
				</div>
			</div>
		</div>
	);
}
