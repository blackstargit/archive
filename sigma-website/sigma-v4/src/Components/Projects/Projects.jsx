import Collage from "./Collage";

export default function Projects() {
	const recentProjects = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<section
			id="recent-works"
			style={recentProjects}
			className="recent-projects"
		>
			<h4>RECENT PROJECTS</h4>
			<h3>We love what we do, check out some of our latest works</h3>
			<hr className="solid-line white" />
			<Collage />
		</section>
	);
}
