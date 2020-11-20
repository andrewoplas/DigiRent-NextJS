/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PageWrapper from 'widgets/PageWrapper';

const Page = () => {
  const [keysModalVisible, setKeysModalVisible] = useState(false);
  const [sendPayReminderModalVisible, setSendPayReminderModalVisible] = useState(false);
  const [paymentsReminderVisible, setPaymentsReminderVisible] = useState(false);

  const onShowKeysModal = () => setKeysModalVisible(true);
  const onCloseKeysModal = () => setKeysModalVisible(false);

  const onShowSendPayReminderModal = () => setSendPayReminderModalVisible(true);
  const onCloseSendPayReminderModal = () => setSendPayReminderModalVisible(false);

  const onShowPaymentsReminder = () => setPaymentsReminderVisible(true);
  const onClosePaymentsReminder = () => setPaymentsReminderVisible(false);

  return (
    <>
      <PageWrapper title="DigiRent - Payments" pageName="payments-landlord">
        <img src="/images/main-left-bg.svg" className="left-arrow-bg" alt="left bg" />
        <img src="/images/main-right-bg.svg" className="right-arrow-bg" alt="left bg" />
        <div className="container-fluid container-lg">
          <h3 className="main-title">PAYMENTS</h3>

          <div className="payments mt-5">
            <div className="header">
              <p className="text-escrow">UPLOAD PAYMENT TO ESCROW</p>
              <p className="text-paid">PAID</p>
              <p className="text-keys">
                HANDED THE KEYS AND DELIVERED APARTMENT AS PROMISED?
                <span className="subtitle">TO RELEASE THE PAYMENTS</span>
              </p>
            </div>

            <div className="item mt-3">
              <div className="escrow">
                <p className="column-label d-block d-md-none">UPLOAD PAYMENTS TO ESCROW</p>
                <span className="text">First monthly payment</span>
              </div>

              <div className="paid">
                <p className="column-label d-block d-md-none">PAID</p>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="button-icon green">
                    <img src="/images/icon/icon-check-white.svg" alt="icon" />
                  </button>

                  <button className="button-icon gray2">
                    <img src="/images/icon/icon-cancel-dark-gray.svg" alt="icon" />
                  </button>
                </div>
              </div>
              <div className="keys">
                <p className="column-label d-block d-md-none">
                  HANDED THE KEYS AND DELIVERED APARTMENT AS PROMISED?
                </p>
                <div className="buttons">
                  <button className="button min-width-100" onClick={onShowKeysModal}>
                    YES
                  </button>
                  <button className="button min-width-100 gray2" onClick={onShowKeysModal}>
                    NO
                  </button>
                </div>
              </div>
            </div>

            <div className="item no-keys mt-3">
              <div className="escrow">
                <p className="column-label d-block d-md-none">UPLOAD PAYMENTS TO ESCROW</p>
                <span className="text">Security deposit</span>
              </div>

              <div className="paid">
                <p className="column-label d-block d-md-none">PAID</p>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="button-icon green">
                    <img src="/images/icon/icon-check-white.svg" alt="icon" />
                  </button>

                  <button className="button-icon gray2">
                    <img src="/images/icon/icon-cancel-dark-gray.svg" alt="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h3 className="main-subtitle monthly-payments-subtitle">
            MONTHLY <span className="font-weight-bold text-primary">PAYMENTS</span>
          </h3>

          <div className="sort">
            <p className="main-desc mr-4">Sort by:</p>

            <div className="field-group-select select primary">
              <span className="value">YEAR</span>
              <button className="btn-dropdown">
                <img src="/images/icon/icon-caret-down-white.svg" alt="item icon" />
              </button>
              <div className="choices">
                <div className="item">YEAR 2021</div>
                <div className="item">YEAR 2022</div>
                <div className="item">YEAR 2023</div>
                <div className="item">YEAR 2024</div>
              </div>
            </div>
          </div>

          <div className="monthly-payments">
            <div className="header">
              <p className="text-escrow">MONTH</p>
              <p className="text-paid">PAID</p>
              <p className="text-keys">INVOICE</p>
            </div>

            {[1, 2, 3].map((key) => (
              <div key={key} className="item mt-3">
                <div className="escrow">
                  <p className="column-label d-block d-md-none">MONTH</p>
                  <span className="text">January</span>
                </div>

                <div className="paid">
                  <p className="column-label d-block d-md-none">PAID</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="button-icon green">
                      <img src="/images/icon/icon-check-white.svg" alt="icon" />
                    </button>

                    <button className="button-icon gray2">
                      <img src="/images/icon/icon-cancel-dark-gray.svg" alt="icon" />
                    </button>
                  </div>
                </div>
                <div className="keys">
                  <button className="button min-width">VIEW INVOICE</button>
                </div>
              </div>
            ))}

            <div className="item mt-3">
              <div className="escrow">
                <p className="column-label d-block d-md-none">MONTH</p>
                <span className="text">April</span>
              </div>

              <div className="paid position-relative">
                <p className="column-label d-block d-md-none">PAID</p>
                <div className="d-flex align-items-center justify-content-center">
                  {paymentsReminderVisible && (
                    <div className="payments-reminder">
                      <div className="item d-flex align-items-center">
                        <span className="circular-icon mr-2" />
                        <span className="text">SEND PAYMENT REMINDER</span>
                      </div>
                    </div>
                  )}
                  <button className="button-icon gray2">
                    <img src="/images/icon/icon-cancel-dark-gray.svg" alt="icon" />
                  </button>

                  <button
                    className="button-icon btn-send-payments primary"
                    onMouseOver={onShowPaymentsReminder}
                    onMouseOut={onClosePaymentsReminder}
                    onClick={onShowSendPayReminderModal}
                  >
                    <img src="/images/icon/icon-euro-white.svg" alt="icon" />
                    <p className="question-icon">?</p>
                  </button>
                </div>
              </div>
              <div className="keys">
                <button className="button min-width disabled">NOT AVAILABLE</button>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      <Modal
        className="confirmation-modal"
        show={keysModalVisible}
        onHide={onCloseKeysModal}
        id="keys-modal"
        centered
      >
        <Modal.Body>
          <div className="modal-background" />

          <div className="main-content">
            <span className="title font-weight-light">
              DID YOU HANDED THE KEYS AND DELIVER APARTMENTS AS PROMISED?
            </span>

            <div className="d-flex align-items-center justify-content-center mt-4">
              <button type="button" className="button min-width mr-3" onClick={onCloseKeysModal}>
                YES
              </button>
              <button type="button" className="button gray2 min-width" onClick={onCloseKeysModal}>
                NO
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        className="confirmation-modal"
        show={sendPayReminderModalVisible}
        onHide={onCloseSendPayReminderModal}
        id="send-pay-reminder-modal"
        centered
      >
        <Modal.Body>
          <div className="modal-background" />

          <div className="main-content">
            <span className="title font-weight-light">
              ARE YOU SURE YOU WANT TO SEND A PAY REMINDER?
            </span>

            <div className="d-flex align-items-center justify-content-center mt-4">
              <button
                type="button"
                className="button min-width mr-3"
                onClick={onCloseSendPayReminderModal}
              >
                YES
              </button>
              <button
                type="button"
                className="button gray2 min-width"
                onClick={onCloseSendPayReminderModal}
              >
                NO
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Page;
