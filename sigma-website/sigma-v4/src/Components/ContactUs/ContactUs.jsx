import ContactForm from "./ContactForm";

export default function () {
	const style = {
		contactUs: {
			backgroundColor: "#000",
			color: "white",
			padding: "10% 10%",
		},
	};

	return (
		<section className="contact-us" style={style.contactUs}>
			<h2>Contact Us</h2>
			<ContactForm />
		</section>
	);
}
