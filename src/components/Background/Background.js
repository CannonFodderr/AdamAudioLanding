import React, {Component} from 'react';
import Title from '../Title/Title';
import Content from '../Content/Content';
import Action from '../Action/Action';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Footer from '../Footer/Footer';
import {Container} from 'semantic-ui-react';
import './Background.css';

class Background extends Component{
    render(){
        return(
            <Container fluid id="banner-wrapper">
            <div className="galley img1"></div>
            <div className="galley img2"></div>
            <div className="galley img3"></div>
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