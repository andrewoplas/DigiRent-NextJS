import { ToggleSwitch } from 'components/ToggleSwitch';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

const languageSwitchOptions = {
  EN: 'EN',
  NL: 'NL',
};

const HomePageMenu = ({
  isVisible,
  onLoginClick,
  onRegisterClick,
  onClose,
  language,
  setLanguage,
}) => (
  <Menu
    className="home-page-menu"
    width="100%"
    isOpen={isVisible}
    onClose={onClose}
    customBurgerIcon={false}
    customCrossIcon={false}
    right
  >
    <button className="button-icon gray2 btn-close" onClick={onClose}>
      <img src="/images/icon/icon-cancel-dark-gray.svg" alt="icon" />
    </button>
    <div className="main-links">
      <Link href="#">
        <p className="links">RENTALS</p>
      </Link>
      <Link href="messages">
        <p className="links">INFORMATION</p>
      </Link>
      <Link href="payments-landlord">
        <p className="links">RENT OUT</p>
      </Link>

      <hr />

      <div className="portal-choices">
        <button
          onClick={() => {
            onClose();
            onLoginClick();
          }}
        >
          <p className="links login mr-3">LOGIN</p>
        </button>
        <button
          onClick={() => {
            onClose();
            onRegisterClick();
          }}
        >
          <p className="links sign-up">SIGN UP</p>
        </button>
      </div>
    </div>

    <ToggleSwitch
      classNames="toggle-switch-language"
      name="language-2"
      onValue={languageSwitchOptions.EN}
      onLabel="EN"
      offValue={languageSwitchOptions.NL}
      offLabel="NL"
      value={language}
      onChange={setLanguage}
    />
  </Menu>
);

export default HomePageMenu;
