import PageWrapper from 'widgets/PageWrapper';

const data = [
  { image: '/images/house-sample-1.jpg', description: 'Sample' },
  { image: '/images/house-sample-2.jpg', description: 'Sample' },
  { image: '/images/house-sample-3.jpg', description: 'Sample' },
  { image: '/images/house-sample-1.jpg', description: 'Sample' },
  { image: '/images/house-sample-2.jpg', description: 'Sample' },
  { image: '/images/house-sample-3.jpg', description: 'Sample' },
];

export default () => (
  <PageWrapper title="DigiRent - Media" pageName="media">
    <img src="/images/main-left-bg.svg" className="left-arrow-bg" alt="left bg" />
    <img src="/images/main-right-bg.svg" className="right-arrow-bg" alt="left bg" />
    <div className="container-fluid">
      <h3 className="main-title">MEDIA</h3>
      <p className="main-desc mt-5 mx-auto text-center">
        <span className="text-primary">Digi Rent</span> helps you with small explainers to
        understand certain topics better. In these clips we will inform you regarding different
        matters around rentals, legislation and other important topics.
      </p>

      <div className="medias">
        <div className="row">
          {data.map((item) => (
            <div className="col-12 col-lg-4">
              <div className="media-item">
                <div className="thumbnail" style={{ backgroundImage: `url(${item.image})` }}>
                  <img
                    src="/images/icon/icon-play-button-white.svg"
                    className="icon-play-button"
                    alt="play icon"
                  />
                </div>
                <div className="information mt-3">
                  <div className="rounded-icon small">
                    <img src="/images/icon/icon-share-primary.svg" alt="item icon" />
                  </div>

                  <p className="title">Title movie</p>

                  <div className="reaction">
                    <div className="item rounded-icon small mx-1">
                      <img
                        data-type="like"
                        src="/images/icon/icon-like.svg"
                        className="icon-like"
                        alt="item icon"
                      />
                    </div>
                    <div className="item rounded-icon small mx-1">
                      <img
                        data-type="dislike"
                        src="/images/icon/icon-dislike.svg"
                        className="icon-dislike"
                        alt="item icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination mt-5">
          <button type="button" className="btn-arrow prev">
            <img src="/images/icon/icon-caret-left-white.svg" alt="left arrow" />
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
            <img src="/images/icon/icon-caret-right-white.svg" alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  </PageWrapper>
);
