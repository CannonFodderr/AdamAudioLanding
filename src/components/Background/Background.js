import React, {Component} from 'react';
import Title from '../Title/Title';
import Content from '../Content/Content';
import Action from '../Action/Action';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Footer from '../Footer/Footer';
import {Container} from 'semantic-ui-react';
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import './Background.css';


class Background extends Component{
    render(){
        return(
            <Container fluid id="banner-wrapper">
            <div className="galley img1" style={{backgroundImage: `url(${bg1})`}}></div>
            <div className="galley img2" style={{backgroundImage: `url(${bg2})`}}></div>
            <div className="galley img3" style={{backgroundImage: `url(${bg3})`}}></div>
                <Title />
                <Content />
                <VideoPlayer />
                <Action />
                <Footer />
            </Container>
        )
    }
}

export default Background;