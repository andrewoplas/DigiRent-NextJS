/* eslint-disable react/jsx-props-no-spreading */
import { Input } from 'components/Input';
import { NextArrow, PrevArrow } from 'components/SlickArrows';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { getDistance } from 'shared/functions';
import { userTypes } from 'shared/types';
import HomePageWrapper from 'widgets/HomePageWrapper';
import { PropertyInfo } from 'widgets/PropertyInfo';
import { UserSelect } from 'widgets/UserSelect';

const slickSettings = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false,
};

const Page = () => {
  const [selectedUserType, setSelectedUserType] = useState(userTypes.TENANT);

  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  const step4 = useRef(null);
  const divider1 = useRef(null);
  const divider2 = useRef(null);
  const divider3 = useRef(null);
  const divider4 = useRef(null);
  const line = useRef(null);

  // Effect: Update position of timeline divider
  useEffect(() => {
    if (step1.current && step2.current && step3.current && step4.current) {
      const boundingClient1 = step1.current?.getBoundingClientRect();
      const boundingClient2 = step2.current?.getBoundingClientRect();
      const boundingClient3 = step3.current?.getBoundingClientRect();
      const boundingClient4 = step4.current?.getBoundingClientRect();

      divider2.current.style.marginTop = `${getDistance(boundingClient1, boundingClient2)}px`;
      divider3.current.style.marginTop = `${getDistance(boundingClient2, boundingClient3)}px`;
      divider4.current.style.marginTop = `${getDistance(boundingClient3, boundingClient4)}px`;
      line.current.style.height = `${
        getDistance(boundingClient1, boundingClient4) +
        divider1.current.getBoundingClientRect().height
      }px`;
    }
  }, [step1, step2, step3, step4, divider2, divider3, divider4, line]);

  return (
    <HomePageWrapper title="DigiRent">
      <div className="layout-content homepage">
        <div className="landing">
          <p className="title">
            RENTING DONE <span className="alt">DIGITALLY</span>
          </p>

          <div className="input-fields">
            <Input placeholder="Where will you go?" icon="icon-map-marker-primary" />
            <Input classNames="mx-3" placeholder="Move-in date" icon="icon-user-primary" />
            <Input classNames="mr-3" placeholder="Move-out date" icon="icon-user-primary" />
            <button className="button min-width">SEARCH</button>
          </div>

          <div className="scroll-down">
            <div className="white-space" />
            <div className="scroll-down-wrapper">
              <img src="/images/scroll-down-space.svg" alt="icon space" />
              <img
                src="/images/icon/icon-caret-down-white.svg"
                className="scroll-down"
                alt="icon"
              />
            </div>
            <div className="white-space" />
          </div>
        </div>

        <div className="recently-added-properties container">
          <h3 className="main-title">
            RCENTLY ADDED <span className="text-primary font-weight-bold">PROPERTIES</span>
          </h3>
          <p className="main-subtitle mt-4 dark-gray">FIND YOUR NEW HOME RIGHT HERE</p>

          <Slider {...slickSettings} className="properties">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key, index) => (
              <div key={key} className="item">
                <PropertyInfo
                  name="Pahvale Villa"
                  location="Indore, Madhya Pradesh, India"
                  rentFee="246"
                  bedCount="4"
                  crCount="2"
                  houseImage={`/images/house-sample-${(index % 3) + 1}.jpg`}
                  showSelection={false}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="how-does-it-work container">
          <h3 className="main-title">
            HOW DOES IT <span className="text-primary font-weight-bold">WORK?</span>
          </h3>
          <p className="main-subtitle mt-4 dark-gray">
            FIND YOUR NEW HOME <span className="font-weight-bold">4 EASY STEPS</span>
          </p>
          <p className="main-subtitle mt-2 dark-gray">
            Find your ideal house and apply to your perfect home Digi Rent is fast, easy and safe!
          </p>

          <UserSelect
            classNames="homepage-user-select"
            selected={selectedUserType}
            onSelect={setSelectedUserType}
          />

          <div className="steps">
            <div className="steps-left">
              <div className="item left">
                <span className="step-count" ref={step1}>
                  1
                </span>
                <div className="rounded-icon not-responsive">
                  <img src="/images/step-list-your-house-online.png" alt="item icon" />
                </div>
                <div className="main-box">
                  <p className="main-desc font-weight-bold">List your house online</p>
                  <p className="main-desc">
                    Upload your house and images and make sure that your house is seen by thousand
                    tenants that are looking for the right space to live in. It’s never been easier
                    to find so much screened tenants
                  </p>
                </div>
              </div>

              <div className="item left space-top">
                <span className="step-count" ref={step3}>
                  3
                </span>
                <div className="rounded-icon not-responsive">
                  <img src="/images/steps-sign-docu-online.png" alt="item icon" />
                </div>
                <div className="main-box">
                  <p className="main-desc font-weight-bold">Sign documents online</p>
                  <p className="main-desc">
                    Get a signed legally binding document back without wasting time on coordinating
                    a personal meeting. Digi Rent uses a secure sign service to provide you with a
                    convenient online signing that will save you valuable time
                  </p>
                </div>
              </div>
            </div>

            <div className="steps-divider">
              <div className="circle" ref={divider1} />
              <div className="circle" ref={divider2} />
              <div className="circle" ref={divider3} />
              <div className="circle" ref={divider4} />
              <div className="line" ref={line} />
            </div>

            <div className="steps-right">
              <div className="item right space-top">
                <span className="step-count" ref={step2}>
                  2
                </span>
                <div className="main-box">
                  <p className="main-desc font-weight-bold">Get in touch with tenants and match</p>
                  <p className="main-desc">
                    Our screened database will automatically connect you to the right tenants. You
                    can send out messages if they already didn’t apply for your house as they will
                    receive automatic messages. In a matter of seconds, you will know who your next
                    tenant will be
                  </p>
                </div>
                <div className="rounded-icon not-responsive">
                  <img src="/images/step-get-in-touch.png" alt="item icon" />
                </div>
              </div>

              <div className="item right space-top">
                <span className="step-count" ref={step4}>
                  4
                </span>
                <div className="main-box">
                  <p className="main-desc font-weight-bold">Receive your payments digitally</p>
                  <p className="main-desc">
                    All international payment methods are accepted on our secured platform, where
                    ever you or your tenant are based, you can collect your rent, deposit or any
                    other fees. The first month’s rent is paid the moment your property is booked.
                    It is fast, flexible and fully transparent
                  </p>
                </div>
                <div className="rounded-icon not-responsive">
                  <img src="/images/steps-money-online.png" alt="item icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default Page;
