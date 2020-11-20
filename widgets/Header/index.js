const index = () => {
	return (
		<section className="layout-header">
			<img src="/images/header-bg.svg" alt="header background" className="header-background" />

			<div className="header-logo-user">
				<div className="logo">
					<h1 className="text">DIGI RENT</h1>
				</div>

				<div className="user"></div>
			</div>

			<div className="header-menu">
				<div className="header-menu-wrapper">
					<div className="note">
						<span>List a property</span>
					</div>

					<div className="main-menu">
						<a href="#" className="px-2 uppercase text-white">
							Properties
						</a>
						<span>|</span>
						<a href="messages.html" className="px-2 uppercase text-white">
							Messages
						</a>
						<span>|</span>
						<a href="payments-landlord.html" className="px-2 uppercase text-white">
							Payments
						</a>
						<span>|</span>
						<a href="contracts-landlord.html" className="px-2 uppercase text-white">
							Contracts
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
