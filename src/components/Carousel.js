import React from 'react';

import Card from '../components/Card';

import studybuddy from '../assets/images/studybuddy.png';
import eventsmash from '../assets/images/EventSmash.png';
import TemplateEngine from '../assets/images/templateengine.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Study Buddy',
                    subTitle: 'Student Community Project',
                    imgSrc: studybuddy,
                    link: 'https://github.com/jblatch2/Project2',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Event Smash',
                    subTitle: 'Fabrication of Ticket Master and Seat Geek',
                    imgSrc: eventsmash,
                    link: 'https://github.com/alsricha/EventSmash',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Template Engine',
                    subTitle: 'A social network for developers',
                    imgSrc: TemplateEngine,
                    link: 'https://github.com/alsricha/wk10-Template-Engine',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;