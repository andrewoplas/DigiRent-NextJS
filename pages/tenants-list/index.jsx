import Badge from 'components/Badge/index';
import PageWrapper from 'widgets/PageWrapper';
import SearchFormTenantList from 'widgets/SearchForm/SearchFormTenantList';
import TableHeader from 'widgets/TableHeader/TableHeader';

const Page = () => (
  <PageWrapper title="DigiRent - Tenants List" pageName="tenants-list">
    <img src="/images/main-left-bg.svg" className="left-main-background" alt="left bg" />
    <img src="/images/main-right-bg.svg" className="right-main-background" alt="right bg" />

    <div className="landing">
      <div className="content">
        <div className="left">
          <div className="title">TENANTS</div>
          <div className="subtitle">LIST</div>
        </div>

        <div className="right">
          <SearchFormTenantList />
        </div>
      </div>

      <div className="scroll-down">
        <div className="white-space" />
        <div className="scroll-down-wrapper">
          <img src="/images/scroll-down-space.svg" className="scroll-down-space" alt="icon space" />
          <img src="/images/icon/icon-caret-down-white.svg" className="scroll-down" alt="icon" />
        </div>
        <div className="white-space" />
      </div>
    </div>

    <div className="container tenants">
      <h3 className="main-title">
        TENANTS IN THE <span className="text-primary font-weight-bold">INDIA</span>
      </h3>
      <p className="main-subtitle mt-1 mt-md-2 dark-gray">
        2 NEW TENANTS IN INDIA IN THE LAST 30 DAYS
      </p>

      <TableHeader classNames="mt-5" />

      <div className="row list">
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <div key={key} className="col-12 col-md-6 col-xl-4">
            <div className="item main-box p-0">
              <div className="main-box tenant-info">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="text-sm font-weight-bold">Jane</span>
                  <span className="text-sm">, 22</span>
                  <img
                    className="ml-2"
                    src="/images/icon/icon-gender-primary.svg"
                    height="15"
                    width="15"
                    alt="icon"
                  />
                </div>
                <span className="d-block text-sm text-primary mt-2">STUDENT</span>
              </div>

              <div className="top">
                <div className="photo-holder">
                  <div className="status">
                    <div className="profile-completion">
                      <span className="font-weight-bold d-block">60% PROFILE</span>
                      COMPLETION
                    </div>
                    <div className="verified">VERIFIED</div>
                  </div>

                  <div className="star-photo">
                    <img src="/images/icon/icon-star-white.svg" alt="icon" />
                  </div>
                  <img
                    className="photo-additional-bg"
                    src="/images/account-profile-bg.svg"
                    alt="bg profile"
                  />
                </div>
              </div>

              <div className="bottom">
                <p className="main-desc dark-gray2 text-center">SEARCHING:</p>
                <div className="searches mt-2">
                  <div>
                    <Badge label="Apartment" />
                    <Badge label="Min 60m²" classNames="mt-2" />
                  </div>
                  <div>
                    <Badge label="Indore, India" />
                    <Badge label="Max € 500" classNames="mt-2" />
                  </div>
                </div>
                <button className="button mx-auto d-block btn-about-me">ABOUT ME</button>
              </div>
            </div>
          </div>
        ))}
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
  </PageWrapper>
);

export default Page;
