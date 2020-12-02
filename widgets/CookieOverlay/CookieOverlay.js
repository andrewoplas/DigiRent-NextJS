import cn from 'classnames';

const CookieOverlay = ({ isAccepted, onAccept }) => (
  <div className={cn('popup-cookies-overlay container-lg', { 'd-none': isAccepted })}>
    <div className="main-box">
      <p className="main-desc">
        We use cookies to improve your website experience. By clicking
        <span className="text-primary"> &quot;I accept&quot;</span> or by your continued use of our
        site, you agree to our Cookie usage policy. You may update your Cookies settings at anytime
        by adjusting your browser settings.
        <a href="empty" className="text-primary">
          {' '}
          Learn more
        </a>
      </p>
      <div className="divider d-none d-sm-block" />
      <button type="button" className="button" onClick={onAccept}>
        I ACCEPT
      </button>
    </div>
  </div>
);

export default CookieOverlay;
