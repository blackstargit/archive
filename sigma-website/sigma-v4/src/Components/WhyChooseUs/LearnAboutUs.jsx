export default function LearnAboutUs() {
	const learnAboutUs = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div className="learn-about-us" style={learnAboutUs}>
			<h2>We are Sigma</h2>
			<hr className="solid-line black" />
			<main>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing
					elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex
					ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia
					deserunt.
				</p>
			</main>
		</div>
	);
}
