import Head from 'next/head';
import Footer from 'widgets/Footer';
import HomePageHeader from 'widgets/HomePage/HomePageHeader';

const HomePageWrapper = ({ title, onLoginClick, onRegisterClick, children }) => (
  <div className="page-wrapper">
    <Head>
      <title>{title}</title>
    </Head>

    <HomePageHeader onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
    <div>{children}</div>
    <Footer />
  </div>
);

export default HomePageWrapper;
