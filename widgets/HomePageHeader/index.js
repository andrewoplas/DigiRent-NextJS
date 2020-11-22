import { ToggleSwitch } from 'components/ToggleSwitch';
import Link from 'next/link';
import { useState } from 'react';

const languageSwitchOptions = {
  EN: 'EN',
  NL: 'NL',
};

const HomePageHeader = () => {
  const [language, setLanguage] = useState(languageSwitchOptions.EN);

  return (
    <section className="layout-homepage-header">
      <div className="header-logo">
        <div className="logo">
          <h1 className="text">DIGI RENT</h1>
        </div>
      </div>

      <div className="header-menu">
        <div className="note">
          <span>FOR LANDLORDS</span>
        </div>

        <div className="main-menu">
          <Link href="#">
            <p className="links">RENTALS</p>
          </Link>
          <Link href="messages">
            <p className="links mx-5">INFORMATION</p>
          </Link>
          <Link href="payments-landlord">
            <p className="links">RENT OUT</p>
          </Link>
        </div>

        <div className="portal-choices">
          <p className="links login mr-3">LOGIN</p>
          <p className="links sign-up">SIGN UP</p>
        </div>
      </div>

      <ToggleSwitch
        classNames="toggle-switch-language"
        name="language"
        onValue={languageSwitchOptions.EN}
        onLabel="EN"
        offValue={languageSwitchOptions.NL}
        offLabel="NL"
        value={language}
        onChange={setLanguage}
      />
    </section>
  );
};

export default HomePageHeader;
