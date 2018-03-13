import React from 'react';
import job from './job.png';
import './logo.less'
export default class Logo extends React.Component {

    render() {
        return (
            <div className="logo">
                <img src={job} alt="logo"/>
            </div>
        )
    }
}