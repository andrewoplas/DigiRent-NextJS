/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

const index = () => (
  <>
    <section className="layout-header">
      <img src="/images/header-bg.svg" alt="header background" className="header-background" />

      <div className="header-logo-user">
        <div className="logo">
          <h1 className="text">DIGI RENT</h1>
        </div>

        <div className="user" />
      </div>

      <div className="header-menu">
        <div className="header-menu-wrapper">
          <div className="note">
            <span>List a property</span>
          </div>

          <div className="main-menu">
            <Link href="#">
              <a className="px-2 uppercase text-white">Properties</a>
            </Link>
            <span>|</span>
            <Link href="messages">
              <a className="px-2 uppercase text-white">Messages</a>
            </Link>
            <span>|</span>
            <Link href="payments-landlord">
              <a className="px-2 uppercase text-white">Payments</a>
            </Link>
            <span>|</span>
            <Link href="contracts-landlord">
              <a className="px-2 uppercase text-white">Contracts</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <div className="header-back">
      <div className="back">
        <img src="/images/icon/icon-arrow-left-white.svg" alt="icon user" />
      </div>
    </div>
  </>
);

export default index;
