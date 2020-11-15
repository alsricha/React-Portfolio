import React from 'react';
import Content from '../components/Content';
import MainTitle from '../components/MainTitle';

function AboutPage(props) {

    return(
        <div>
            <MainTitle title={props.title} />

            <Content>

            <p>
                My family, from both sides are from Latvia. Which is a country many don't know about- this really came in handy during my younger school days in Social Studies class whenever we'd have to 'pick a country to study'. Ask me about the 'songs' I cleverly created shortly before my presentations that always yielded a good grade! Another fun fact is that I'm the only person in the US with my last name, which will double next year when my fiance and I get married. I'm a laid back kind of person- who enjoys having a houseful of friends over just as much as being quarantined at home during this Pandemic. I live with my fiance and our two polar-opposite dogs; one of which has one eye and is alpaca-soft and the other is a couch potato herding pup. I keep LaCroix in business and prefer Costco over Sam's Club hands down
                </p>
            </Content>
        </div>
    );

}

export default AboutPage;