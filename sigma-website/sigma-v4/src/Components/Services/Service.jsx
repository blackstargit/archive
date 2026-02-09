export default function Service({img, heading, details}) {
     const whatWeDoH4 = {
		color: 'gold',
	};

     return (
		<div className="spec">
			<img className="" src={img} />
			<h4 style={whatWeDoH4}>{heading}</h4>
			<p>{details}</p>
		</div>
	);
}