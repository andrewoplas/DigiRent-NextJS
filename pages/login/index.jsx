/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { userTypes } from 'shared/types';
import PageWrapper from 'widgets/PageWrapper';

const Page = () => {
  const [selectedUserType, setSelectedUserType] = useState(userTypes.TENANT);
  const [loginModalVisible, setLogintModalVisible] = useState(false);
  const [rememberMeActive, setRememberMeActive] = useState(false);
  const [termsAndPolicyActive, setTermsAndPolicyActive] = useState(false);

  const onShow = () => setLogintModalVisible(true);
  const onClose = () => setLogintModalVisible(false);

  const toggleRememberMe = () => setRememberMeActive((value) => !value);
  const toggleTermsAndPolicyActive = () => setTermsAndPolicyActive((value) => !value);

  return (
    <>
      <PageWrapper title="DigiRent - Login" pageName="login">
        <img src="/images/main-left-bg.svg" className="left-arrow-bg" alt="left bg" />
        <img src="/images/main-right-bg.svg" className="right-arrow-bg" alt="left bg" />
        <div className="container">
          <h3 className="main-title">LOGIN</h3>
          <p className="main-desc text-center mt-4">
            We&apos;ll start creating the parts of the homepage first which includes login dialog.
            In the meantime, since we don&apos;t have the homepage yet, we&apos;ll just temporarily
            use this page to display login dialog.
          </p>

          <button
            type="button"
            className="button min-width mr-3 d-block mx-auto mt-5"
            onClick={onShow}
          >
            View Login
          </button>
        </div>
      </PageWrapper>

      <Modal show={loginModalVisible} onHide={onClose} id="login-modal" centered>
        <Modal.Body>
          <div className="icon-user rounded-icon primary mx-auto">
            <img src="/images/icon/icon-user-white.svg" alt="item icon" />
          </div>
          <div className="top-toggle mx-auto d-block">
            <img
              className="toggle-bg mx-auto"
              src="/images/login-register-toggle.svg"
              alt="background"
            />
            <div
              className={cn('toggle-icon tenant-icon', {
                active: selectedUserType === userTypes.TENANT,
              })}
            />
            <div
              className={cn('toggle-icon landlord-icon', {
                active: selectedUserType === userTypes.LANDLORD,
              })}
            />
          </div>

          <p className="title">LOGIN</p>

          <div className="button-toggler mt-2 d-flex">
            <button
              type="button"
              className={cn('button min-width btn-as-tenant', {
                active: selectedUserType === userTypes.TENANT,
              })}
              onClick={() => setSelectedUserType(userTypes.TENANT)}
            >
              AS TENANT
            </button>
            <button
              type="button"
              className={cn('button min-width btn-as-landlord', {
                active: selectedUserType === userTypes.LANDLORD,
              })}
              onClick={() => setSelectedUserType(userTypes.LANDLORD)}
            >
              AS LANDLORD
            </button>
          </div>

          <div className="main-content mt-4">
            <div className="field-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="field-group mt-3">
              <input type="password" placeholder="Password" required />
            </div>

            <div className="d-flex align-items-center justify-content-between form-footer mt-3">
              <div className="d-flex align-items-center checkbox-container">
                <span
                  className={cn('rounded-icon checkbox', { active: rememberMeActive })}
                  onClick={toggleRememberMe}
                >
                  <img src="/images/icon/icon-check-primary.svg" alt="icon" />
                </span>
                <span className="ml-3 remember-me-text" onClick={toggleRememberMe}>
                  Remember me
                </span>
              </div>
              <a href="#" className="forgot-password text-primary">
                Forgot password?
              </a>
            </div>

            <div className="login-button mt-3">
              <div className="social-media-options">
                <div className="item mr-3">
                  <img src="/images/social-media/facebook-square.png" alt="facebook icon" />
                </div>
                <div className="item">
                  <img src="/images/social-media/google.png" alt="google icon" />
                </div>
              </div>
              <button type="button" className="button btn-login min-width">
                LOGIN
              </button>
            </div>

            <div className="d-flex align-items-center mt-4 i-agree checkbox-container">
              <span
                className={cn('rounded-icon checkbox', { active: termsAndPolicyActive })}
                onClick={toggleTermsAndPolicyActive}
              >
                <img src="/images/icon/icon-check-primary.svg" alt="icon" />
              </span>
              <span className="ml-3 i-agree-text" onClick={toggleTermsAndPolicyActive}>
                I agree to the
                <Link href="extra-information" target="_blank">
                  <a className="text-primary"> Terms of Use </a>
                </Link>
                and
                <Link href="extra-information.html#cookies" target="_blank">
                  <a className="text-primary"> Privacy Policy</a>
                </Link>
              </span>
            </div>

            <a
              href="register.html"
              className="sign-up-as mt-4 d-block text-center text-dark-gray font-weight-light"
            >
              Sign up as <span className="text-primary font-weight-bold"> TENANT </span> or
              <span className="text-primary font-weight-bold"> LANDLORD</span>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Page;
