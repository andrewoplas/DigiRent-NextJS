const index = () => {
	return (
		<footer className="layout-footer">
			<div className="subscriber-bg">
				<img src="/images/subscriber-bg.svg" alt="subscriber" />
			</div>

			<div className="subscriber">
				<div className="logo">
					<h1 className="text">DIGI RENT</h1>
				</div>
				<p className="subscriber-title">
					<span className="text-primary font-weight-bold">subscribe</span>{' '}
					<br className="d-block d-sm-none" />
					to receive our news
				</p>
				<div className="subscriber-form">
					<input placeholder="e-mail" />
					<button>
						<img
							src="/images/icon/icon-email-outline.svg"
							className="icon"
							alt="facebook"
							width={20}
							height={20}
						/>
					</button>
				</div>
			</div>

			<div className="social-medias">
				<div className="icons">
					<a href="#">
						<img
							src="/images/social-media/facebook.svg"
							className="icon"
							alt="facebook"
							width={40}
							height={40}
						/>
					</a>
					<a href="#">
						<img
							src="/images/social-media/instagram.svg"
							className="icon"
							alt="instagram"
							width={40}
							height={40}
						/>
					</a>
					<a href="#">
						<img
							src="/images/social-media/linkedin.svg"
							className="icon"
							alt="linkedin"
							width={40}
							height={40}
						/>
					</a>
					<a href="#">
						<img
							src="/images/social-media/youtube.svg"
							className="icon"
							alt="youtube"
							width={40}
							height={40}
						/>
					</a>
					<a href="#">
						<img
							src="/images/icon/icon-link.svg"
							className="icon-link"
							alt="link"
							width={40}
							height={40}
						/>
					</a>
				</div>
			</div>

			<hr />

			<div className="footer-main">
				<div className="container">
					<div className="row">
						<div className="col-6 col-md-4 col-lg header-column">
							<h3>Cities</h3>
							<div className="list">
								<a href="#">Amsterdam</a>
								<a href="#">Den Haag</a>
								<a href="#">Rotterdam</a>
								<a href="#">Eindhoven</a>
								<a href="#">Utrecht</a>
								<a href="#">Arnhem</a>
							</div>
						</div>
						<div className="col-6 col-md-4 col-lg header-column">
							<h3>Digi Rent</h3>
							<div className="list">
								<a href="about.html">About Us</a>
								<a href="media.html">Media</a>
								<a href="extra-information.html">Terms &amp; Conditions</a>
								<a href="extra-information.html#data-security">Data Security</a>
								<a href="extra-information.html#cookies">Cookie Policy</a>
								<a href="sitemap.html">Sitemap</a>
							</div>
						</div>
						<div className="col-6 col-md-4 col-lg header-column">
							<h3>Tenants</h3>
							<div className="list">
								<a href="#">How to rent</a>
								<a href="pricing.html">Pricing</a>
								<a href="international-students-expats.html">Blog for internationals</a>
								<a href="rental-tips.html#tenants">Rental Tips</a>
							</div>
						</div>
						<div className="col-6 col-md-4 col-lg header-column">
							<h3>Landlords</h3>
							<div className="list">
								<a href="#">How to rent out</a>
								<a href="pricing.html">Pricing</a>
								<a href="rental-tips.html#landlords">Rental Tips</a>
							</div>
						</div>
						<div className="col-6 col-md-4 col-lg header-column">
							<h3>Support</h3>
							<div className="list">
								<a href="faq.html">FAQ</a>
								<a href="contact.html">Contact Us</a>
								<a href="#">Careers</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr />

			<p className="copyright">Copyright 2020. All rights reserved</p>
		</footer>
	);
};

export default index;
