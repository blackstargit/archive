import Achievements from "./Achievements";
import LearnAboutUs from "./LearnAboutUs";

export default function WhyChooseUs() {
	const style = {
		whyChooseUs: {
			padding: "10%",
			textAlign: "center",
			backgroundColor: "palegreen",
		},
	};

	return (
		<section
			id="why-choose-us"
			className="why-choose-us"
			style={style.whyChooseUs}
		>
			<LearnAboutUs />
			<Achievements />
		</section>
	);
}
