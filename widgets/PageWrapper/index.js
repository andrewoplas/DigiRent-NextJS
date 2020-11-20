import cn from 'classnames';
import Head from 'next/head';
import Footer from 'widgets/Footer';
import Header from 'widgets/Header';

const index = ({ title, pageName, children }) => (
  <div className="layout-content">
    <Head>
      <title>{title}</title>
    </Head>

    <Header />
    <div className={cn('layout-content', pageName)}>{children}</div>
    <Footer />
  </div>
);

export default index;
