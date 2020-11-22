import Head from 'next/head';
import Footer from 'widgets/Footer';
import HomePageHeader from 'widgets/HomePageHeader';

const index = ({ title, children }) => (
  <div className="page-wrapper">
    <Head>
      <title>{title}</title>
    </Head>

    <HomePageHeader />
    <div>{children}</div>
    <Footer />
  </div>
);

export default index;
