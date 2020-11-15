import React from 'react';

import MainTitle from '../components/MainTitle';
import Carousel from '../components/Carousel';


function HomePage(props) {

    return(
        <div>
            <MainTitle title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    );

}

export default HomePage;
