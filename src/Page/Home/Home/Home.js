import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import UserReview from '../UserReview/UserReview';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <UserReview></UserReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;