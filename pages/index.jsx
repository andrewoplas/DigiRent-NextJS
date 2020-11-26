import { useState } from 'react';
import AreasOfExpertise from 'widgets/HomePage/AreasOfExpertise';
import Blog from 'widgets/HomePage/Blog';
import ExploreOurMosePopularCities from 'widgets/HomePage/ExploreOurMosePopularCities';
import HomePageWrapper from 'widgets/HomePage/HomePageWrapper';
import HowDoesItWork from 'widgets/HomePage/HowDoesItWork';
import Landing from 'widgets/HomePage/Landing';
import LoginModal from 'widgets/HomePage/LoginModal';
import RegisterModal from 'widgets/HomePage/RegisterModal';
import RecentlyAddedProperties from 'widgets/HomePage/RecentlyAddedProperties';
import SectionDivider from 'widgets/HomePage/SectionDivider';
import WhyChooseDigiRentOverAnyAgency from 'widgets/HomePage/WhyChooseDigiRentOverAnyAgency';

const Page = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  return (
    <HomePageWrapper
      title="DigiRent"
      onLoginClick={() => setLoginModalVisible(true)}
      onRegisterClick={() => setRegisterModalVisible(true)}
    >
      <div className="layout-content homepage">
        <img src="/images/wheel.svg" className="left-main-background" alt="left bg" />
        <img src="/images/main-right-bg-2.svg" className="right-main-background" alt="right bg" />

        <LoginModal isVisible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />
        <RegisterModal
          isVisible={registerModalVisible}
          onClose={() => setRegisterModalVisible(false)}
        />

        <Landing />

        <RecentlyAddedProperties />

        <HowDoesItWork />

        <SectionDivider title="TENANTS" description="Find your new home online" />

        <AreasOfExpertise />

        <WhyChooseDigiRentOverAnyAgency />

        <ExploreOurMosePopularCities />

        <SectionDivider title="LANDLORDS" description="Find your renters online" />

        <Blog />
      </div>
    </HomePageWrapper>
  );
};

export default Page;
