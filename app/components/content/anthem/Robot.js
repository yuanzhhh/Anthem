import React from 'react';
import serverConf from '@/serverConf';

import BaseCom from '@/app/components/BaseComponent';

class Robot extends BaseCom {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                style={{
                width: this.props.info.domWidth,
                position: 'absolute',
                left: this.props.info.left,
                top: this.props.info.top
            }}>
                <img
                    src={"http://" + serverConf.imgserver + "/" + this.props.info.img}
                    style={{
                    maxWidth: '100%',
                    border: 0,
                    display: 'block'
                }}/>
            </div>
        )
    }
}

export default Robot;