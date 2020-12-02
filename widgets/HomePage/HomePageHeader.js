import { ToggleSwitch } from 'components/ToggleSwitch/';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollData } from 'scroll-data-hook';
import cn from 'classnames';
import HomePageMenu from './HomePageMenu';

const languageSwitchOptions = {
  EN: 'EN',
  NL: 'NL',
};

const SCROLL_THRESHOLD = 100;

const HomePageHeader = ({ onLoginClick, onRegisterClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [language, setLanguage] = useState(languageSwitchOptions.EN);
  const { position } = useScrollData();

  return (
    <>
      <section className={cn('layout-homepage-header', { active: position.y >= SCROLL_THRESHOLD })}>
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
            <Link href="property-list">
              <p className="links">RENTALS</p>
            </Link>
            <Link href="messages">
              <p className="links mx-3 mx-md-5">INFORMATION</p>
            </Link>
            <Link href="/landlord">
              <p className="links">RENT OUT</p>
            </Link>
          </div>

          <div className="portal-choices">
            <button onClick={onLoginClick}>
              <p className="links login mr-3">LOGIN</p>
            </button>
            <button onClick={onRegisterClick}>
              <p className="links sign-up">SIGN UP</p>
            </button>
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

        <button
          className={cn('btn-burger-menu', { 'd-none': menuVisible })}
          onClick={() => setMenuVisible(true)}
        >
          <img src="/images/icon/icon-burger-menu-primary.svg" alt="icon" />
        </button>
      </section>

      <HomePageMenu
        isVisible={menuVisible}
        language={language}
        setLanguage={setLanguage}
        onClose={() => setMenuVisible(false)}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
      />
    </>
  );
};

export default HomePageHeader;
