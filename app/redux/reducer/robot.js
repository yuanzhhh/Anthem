import immutable from 'immutable';
import {
  robot
} from '../defaultData';


module.exports = (state = immutable.fromJS(robot), action) => {
  switch (action.type) {
    /**
     * 新增加机器人
     */
    case 'SET_addlocationInfo':
      const { robotId, screenNumIng, imgdata, } = action.data;
      const { src, width, height, left, top, domHeight, domWidth, columnsNum} = imgdata;

      return state.updateIn(['locationInfo', screenNumIng.toString()], list => list.push({
        robotid: robotId,
        img: src,
        owidth: width,
        oheight: height,
        left: left,
        top: top,
        domHeight: domHeight,
        domWidth: domWidth,
        columnsNum: columnsNum
      }));

      //存储robot
    case 'SET_robotContainer':

      return state.update('robotContainer', container => {
        const getRobot = action.data.map(item => {
          return {
            robotid: item.robotid,
            info: item
          }
        });

        return container.concat(getRobot);
      });

      /**
       * 初始化top值
       */
    case 'SET_initTop':
      return state.set('robotTopLocation', new Array(action.data).fill(0));

      /**
       * 更新top值
       */
    case 'SET_top':
      return state.update('robotTopLocation', list => {
        list[action.data.columnsNum] += action.data.height;

        return list;
      });

      //添加位置信息
    case 'ADD_locationInfoNum':
      return state.setIn(['locationInfo', action.data.toString()], immutable.fromJS([]));

    default:
      return state;
  }
}