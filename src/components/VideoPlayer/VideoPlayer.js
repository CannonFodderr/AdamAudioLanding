import React, {Component} from 'react';
import {Container } from 'semantic-ui-react';
import './VideoPlayer.css';

class VideoPlayer extends Component{
    state = {src: "https://www.youtube.com/embed/grnKuOVamBo"}
    render(){
        return(
            <Container text className="animated fadeIn delay-3s" id="video-wrapper">
                <iframe title="Adam Audio Video" width="100%" height="365px" src={this.state.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </Container>
        )
    }
}

export default VideoPlayer