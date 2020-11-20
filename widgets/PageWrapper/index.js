import Head from 'next/head';
import Footer from 'widgets/Footer';
import Header from 'widgets/Header';

const index = ({ title, children }) => {
	return (
		<div className="page-wrapper">
			<Head>
				<title>{title}</title>
			</Head>

			<Header />
			<div className="layout-content">{children}</div>
			<Footer />
		</div>
	);
};

export default index;
