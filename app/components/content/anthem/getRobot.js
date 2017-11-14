import React from 'react';

//机器人组件
import Robot from './Robot';

/**
 * 获取当前显示robot
 * @param {*} state
 */
const renderRobot = state => {

    const loadingScreen = state.getIn(['screen', 'loadingScreen']);

    let robotList = null;

    //遍历当前应该显示的屏幕下标号
    loadingScreen.forEach(element => {
        //通过屏幕号码获取信息
        let locationInfo = state.getIn([
            'robot', 'locationInfo', element.toString()
        ]);

        //排除undefined
        if (!locationInfo) {
            return;
        }

        robotList = robotList ? robotList.concat(locationInfo) : locationInfo;
    });

    return robotList.map(robot => (<Robot key={robot.robotid} info={robot}/>));
}

export default renderRobot;