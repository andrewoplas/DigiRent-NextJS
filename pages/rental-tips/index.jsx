/* eslint-disable react/jsx-props-no-spreading */

import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { rentalTipsType } from 'shared/types';
import PageWrapper from 'widgets/PageWrapper';
import { Reaction } from 'widgets/Reaction';
import { SocialMedias } from 'widgets/SocialMedias';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const NextArrow = ({ onClick }) => (
  <button type="button" className={cn('button btn-next slick-arrow')} onClick={onClick}>
    <img src="/images/icon/icon-caret-right-white.svg" alt="next arrow" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button type="button" className={cn('button btn-prev slick-arrow')} onClick={onClick}>
    <img src="/images/icon/icon-caret-left-white.svg" alt="next arrow" />
  </button>
);

const Page = () => {
  const router = useRouter();

  const [hash, setHash] = useState(rentalTipsType.TENANT);
  const [reaction, setReaction] = useState(null);

  const slickSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Effect: Get hash value
  useEffect(() => {
    const hashValue = router.asPath.split('#')?.[1] || rentalTipsType.TENANT;
    setHash(hashValue);
  }, [router]);

  const onReact = (value, id) => {
    setReaction((reactions) => ({
      ...reactions,
      [id]: value,
    }));
  };

  return (
    <PageWrapper title="DigiRent - Rental Tips" pageName="rental-tips">
      <img src="/images/main-left-bg.svg" className="left-arrow-bg" alt="left bg" />
      <img src="/images/main-right-bg.svg" className="right-arrow-bg" alt="left bg" />
      <div className="container-fluid container-md">
        <h3 className="main-title">RENTAL TIPS</h3>

        <div className="selector-buttons">
          <div className={cn('item for-tenants', { active: hash === rentalTipsType.TENANT })}>
            <Link href={`#${rentalTipsType.TENANT}`}>
              <a>
                <div className="rounded-icon mx-auto">
                  <img
                    className="icon-inactive"
                    src="/images/icon/icon-key-gray.svg"
                    alt="item icon"
                  />
                  <img
                    className="icon-active"
                    src="/images/icon/icon-key-primary.svg"
                    alt="item icon"
                  />
                </div>
                <span className="text mt-3 d-block text-center">FOR TENANTS</span>
              </a>
            </Link>
          </div>

          <div className={cn('item for-landlords', { active: hash === rentalTipsType.LANDLORD })}>
            <Link href={`#${rentalTipsType.LANDLORD}`}>
              <a>
                <div className="rounded-icon mx-auto">
                  <img
                    className="icon-inactive"
                    src="/images/icon/icon-roof-gray.svg"
                    alt="item icon"
                  />
                  <img
                    className="icon-active"
                    src="/images/icon/icon-roof-primary.svg"
                    alt="item icon"
                  />
                </div>
                <span className="text mt-3 d-block text-center">FOR LANDLORDS</span>
              </a>
            </Link>
          </div>
        </div>

        <Slider {...slickSettings} className="list-carousel">
          {data.map((item) => (
            <div className="item" key={item.id}>
              <span className="number">{item.id}</span>

              <SocialMedias />

              <div className="main-box wrapper">
                <div className="top-background" />
                <p className="main-desc text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="main-desc text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <Reaction
                  reaction={reaction?.[item.id]}
                  onReact={(value) => onReact(value, item.id)}
                  classNames="no-shadow mt-5"
                  likeIconClassNames="mx-1"
                  dislikeIconClassNames="mx-1"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </PageWrapper>
  );
};

export default Page;
