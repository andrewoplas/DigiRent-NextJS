import { useEffect, useRef, useState } from 'react';
import { getDistance } from 'shared/functions';
import { userTypes } from 'shared/types';
import { UserSelect } from 'widgets/UserSelect';

const HowDoesItWork = () => {
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

      const distance = getDistance(boundingClient1, boundingClient4);
      const height = divider1.current.getBoundingClientRect().height + distance;
      line.current.style.height = `${height}px`;
    }
  }, [step1, step2, step3, step4, divider2, divider3, divider4, line]);

  return (
    <div className="how-does-it-work container">
      <h3 className="main-title">
        HOW DOES IT <span className="text-primary font-weight-bold">WORK?</span>
      </h3>
      <p className="main-subtitle mt-2 mt-md-4 dark-gray">
        FIND YOUR NEW HOME <span className="font-weight-bold">4 EASY STEPS</span>
      </p>
      <p className="main-subtitle mt-1 mt-md-2 dark-gray">
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
              <p className="main-desc font-weight-bold title">List your house online</p>
              <p className="main-desc">
                Upload your house and images and make sure that your house is seen by thousand
                tenants that are looking for the right space to live in. It’s never been easier to
                find so much screened tenants
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
              <p className="main-desc font-weight-bold title">Sign documents online</p>
              <p className="main-desc">
                Get a signed legally binding document back without wasting time on coordinating a
                personal meeting. Digi Rent uses a secure sign service to provide you with a
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
              <p className="main-desc font-weight-bold title">
                Get in touch with tenants and match
              </p>
              <p className="main-desc">
                Our screened database will automatically connect you to the right tenants. You can
                send out messages if they already didn’t apply for your house as they will receive
                automatic messages. In a matter of seconds, you will know who your next tenant will
                be
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
              <p className="main-desc font-weight-bold title">Receive your payments digitally</p>
              <p className="main-desc">
                All international payment methods are accepted on our secured platform, where ever
                you or your tenant are based, you can collect your rent, deposit or any other fees.
                The first month’s rent is paid the moment your property is booked. It is fast,
                flexible and fully transparent
              </p>
            </div>
            <div className="rounded-icon not-responsive">
              <img src="/images/steps-money-online.png" alt="item icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="steps mobile">
        <div className="item">
          <span className="step-count">1</span>
          <div className="main-box">
            <p className="main-desc font-weight-bold title">List your house online</p>
            <p className="main-desc">
              Upload your house and images and make sure that your house is seen by thousand tenants
              that are looking for the right space to live in. It’s never been easier to find so
              much screened tenants
            </p>
          </div>
        </div>

        <div className="item">
          <span className="step-count">2</span>
          <div className="main-box">
            <p className="main-desc font-weight-bold title">Get in touch with tenants and match</p>
            <p className="main-desc">
              Our screened database will automatically connect you to the right tenants. You can
              send out messages if they already didn’t apply for your house as they will receive
              automatic messages. In a matter of seconds, you will know who your next tenant will be
            </p>
          </div>
        </div>

        <div className="item">
          <span className="step-count">3</span>
          <div className="main-box">
            <p className="main-desc font-weight-bold title">Sign documents online</p>
            <p className="main-desc">
              Get a signed legally binding document back without wasting time on coordinating a
              personal meeting. Digi Rent uses a secure sign service to provide you with a
              convenient online signing that will save you valuable time
            </p>
          </div>
        </div>

        <div className="item">
          <span className="step-count">4</span>
          <div className="main-box">
            <p className="main-desc font-weight-bold title">Receive your payments digitally</p>
            <p className="main-desc">
              All international payment methods are accepted on our secured platform, where ever you
              or your tenant are based, you can collect your rent, deposit or any other fees. The
              first month’s rent is paid the moment your property is booked. It is fast, flexible
              and fully transparent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
