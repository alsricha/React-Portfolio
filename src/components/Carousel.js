import React from 'react';

import Card from '../components/Card';

import studybuddy from '../assets/images/studybuddy.png';
import quiz from '../assets/images/quiz.png';
import employeetracker from '../assets/images/employeetracker.png';
import eventsmash from '../assets/images/EventSmash.png';
import Burger from '../assets/images/burger.png';
import weatherdashboard from '../assets/images/weatherdashboard.png';
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
                    title: 'JS Code Quiz',
                    subTitle: 'How is Your JavaScript Knowledge?',
                    imgSrc: quiz,
                    link: 'https://github.com/alsricha/Code-Quiz',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Template Engine',
                    subTitle: '',
                    imgSrc: TemplateEngine,
                    link: 'https://github.com/alsricha/wk10-Template-Engine',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Weather Dashboard',
                    subTitle: 'Daily Weather Application',
                    imgSrc: weatherdashboard,
                    link: 'https://github.com/alsricha/Weather-Dashboard',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Employee Tracker',
                    subTitle: 'Application to Track Employees',
                    imgSrc: employeetracker,
                    link: 'https://github.com/alsricha/Employee-Tracker',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Eat-da-Burger',
                    subTitle: 'A burger logger using MySQL, Node, Handlebars and More!',
                    imgSrc: Burger,
                    link: 'https://github.com/alsricha/Burger',
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