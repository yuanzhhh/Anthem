import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

import BaseCom from '@/app/components/BaseComponent';

const RobotMe = styled.div `
    width:${props => props.columnsWidth};
    position: absolute;
    left:${props => props.locLeft};
    top:${props => props.locTop};
    &>img{
        max-width:100%;
        border:0;
        display:block;
    }
`;

class Robot extends BaseCom {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <RobotMe
                columnsWidth={this.props.info.domWidth}
                locLeft={this.props.info.left}
                locTop={this.props.info.top}>
                <img src={"http://localhost:10086/" + this.props.info.img}/>
            </RobotMe>
        )
    }
}

export default connect()(Robot, RobotMe);