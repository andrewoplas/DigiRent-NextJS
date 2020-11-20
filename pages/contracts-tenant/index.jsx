import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PageWrapper from 'widgets/PageWrapper';

const Page = () => {
  const [signedDocumentModalVisible, setSignedDocumentModalVisible] = useState(false);

  const onShow = () => setSignedDocumentModalVisible(true);
  const onClose = () => setSignedDocumentModalVisible(false);

  return (
    <>
      <PageWrapper title="DigiRent - Contracts" pageName="contracts-tenant">
        <img src="/images/main-left-bg.svg" className="left-arrow-bg" alt="left bg" />
        <img src="/images/main-right-bg.svg" className="right-arrow-bg" alt="left bg" />
        <div className="container">
          <h3 className="main-title">CONTRACTS</h3>

          <div className="row houses">
            {[1, 2, 3].map((key) => (
              <div key={key} className="col-12 col-md-6 col-lg-4">
                <div className="item main-box p-0">
                  <div className="p-4">
                    <h3 className="main-subtitle font-weight-bold text-left">Pahvale Villa</h3>
                    <div className="d-flex align-items-center mt-2">
                      <img
                        src="/images/icon/icon-map-marker-primary.svg"
                        height="20"
                        width="20"
                        alt="icon"
                      />
                      <p className="ml-2 main-desc">Indore, Madhya Pradesh, India</p>
                    </div>
                  </div>

                  <div className="house-bg">
                    <div className="monthly-payment">
                      <div className="icon-wrapper">
                        <img src="/images/icon/icon-euro-white.svg" alt="icon" />
                      </div>
                      <span className="main-desc text-white text-center font-weight-bold value">
                        246
                      </span>
                      <span className="main-desc text-white text-center dash">–</span>
                      <span className="main-desc text-white text-center mo">mo</span>
                    </div>
                    <div className="rooms-toilet">
                      <div className="d-flex align-items-center justify-content-between">
                        <img
                          src="/images/icon/icon-bed-primary.svg"
                          height="16"
                          width="16"
                          alt="icon"
                        />
                        <p className="ml-1 main-desc">4</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <img
                          src="/images/icon/icon-bath-tub-primary.svg"
                          height="16"
                          width="16"
                          alt="icon"
                        />
                        <p className="ml-1 main-desc">2</p>
                      </div>
                    </div>
                    <div className="not-selected main-desc">
                      <span className="font-weight-bold d-block">NOT</span> SELECTED
                    </div>
                    <button type="button" className="button" onClick={onShow}>
                      <span className="font-weight-bold"> SIGNED </span> DOCUMENTS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>

      <Modal
        dialogClassName="modal-xl"
        id="signed-document-modal"
        show={signedDocumentModalVisible}
        onHide={onClose}
        centered
      >
        <Modal.Body>
          <button type="button" className="button-nav primary s-40" onClick={onClose}>
            <img src="/images/icon/icon-arrow-left-white.svg" alt="icon user" />
          </button>

          <div className="main-content pb-4">
            <div className="document-files">
              <div className="file-item">
                <span className="normal-text font-weight-bold">Contract</span>
                <button type="button" className="button ml-md-1 ml-lg-5">
                  VIEW DOCUMENT
                </button>
              </div>
              <div className="divider" />
              <div className="file-item">
                <span className="normal-text font-weight-bold">Check-in report</span>
                <button type="button" className="button ml-md-1 ml-lg-5">
                  VIEW DOCUMENT
                </button>
              </div>
            </div>

            <div className="document-upload mt-5">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex align-items-center left">
                    <span className="text-primary mr-4">Upload Document</span>
                    <div className="field-group-select select">
                      <span className="value">Type document</span>
                      <button type="button" className="btn-dropdown">
                        <img src="/images/icon/icon-caret-down-white.svg" alt="item icon" />
                      </button>
                      <div className="choices">
                        <div className="item">Type 1</div>
                        <div className="item">Type 2</div>
                        <div className="item">Type 3</div>
                        <div className="item">Type 4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                  <div className="file-upload responsive">
                    <div className="file-select">
                      <button type="button" className="button btn-browse">
                        Browse...
                      </button>
                      <div className="main-description font-weight-light text-primary filename">
                        No document selected
                      </div>
                      <input type="file" />
                    </div>
                    <button type="button" className="button">
                      UPLOAD
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pagination mt-5">
              <button type="button" className="btn-arrow prev">
                <img src="/images/icon/icon-caret-left-white.svg" alt="icon" />
              </button>
              <div className="pages">
                <span className="number active">
                  01
                  <span className="line" />
                </span>
                <span className="number">02</span>
                <span className="number">03</span>
                <span className="number">04</span>
                <span className="number">05</span>
              </div>
              <button type="button" className="btn-arrow next">
                <img src="/images/icon/icon-caret-right-white.svg" alt="icon" />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Page;
