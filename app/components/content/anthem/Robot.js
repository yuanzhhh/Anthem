import React from 'react';
import serverConf from '@/serverConf';

import BaseCom from '@/app/components/BaseComponent';

class Robot extends BaseCom {
    constructor(props) {
        super(props);
    }

    render() {
        const { domWidth, left, top, img } = this.props.info;

        return (
            <div
                style={{
                width: domWidth,
                position: 'absolute',
                left: left,
                top: top
            }}>
                <img
                    src={"http://" + serverConf.imgserver + "/" + img}
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