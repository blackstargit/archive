export default function Links() {
     
     return (
		<ul>
			<li>
				<a href="#">
					<span className="icon">
						<i className="fas fa-book" />
					</span>
					<span className="title">Home</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span className="icon">
						<i className="fas fa-file-video" />
					</span>
					<span className="title">About us</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span className="icon">
						<i className="fas fa-volleyball-ball" />
					</span>
					<span className="title">Projects</span>
				</a>
			</li>
			<li>
				<a href="#" className="active">
					<span className="icon">
						<i className="fas fa-blog" />
					</span>
					<span className="title">Contact Us</span>
				</a>
			</li>
		</ul>
	);
}