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

      return state.updateIn(['locationInfo', action.data.screenNumIng.toString()], list => list.push({
        robotid: action.data.robotId,
        img: action.data.imgdata.src,
        owidth: action.data.imgdata.width,
        oheight: action.data.imgdata.height,
        left: action.data.imgdata.left,
        top: action.data.imgdata.top,
        domHeight: action.data.imgdata.domHeight,
        domWidth: action.data.imgdata.domWidth,
        columnsNum: action.data.imgdata.columnsNum
      }));

      //存储robot
    case 'SET_robotContainer':
      return state.update('robotContainer', container => {
        const br = action.data.map(item => {
          return {
            robotid: item.robotid,
            info: item
          }
        });
        return container.concat(br);
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