import immutable from 'immutable';
import {
  screen
} from '../defaultData';

module.exports = (state = immutable.fromJS(screen), action) => {
  switch (action.type) {
    /**
     * 增加屏幕
     */
    case 'ADD_screen':
      return state.update('allNum', allNum => allNum += 1);

      /**
       * 增加当前加载的屏幕队
       */
    case 'ADD_loadingScreen':
      //屏幕总数
      let subscript = action.data - 1;
      //返回新的显示数组
      return state.update('loadingScreen', loadingScreenList => {
        const newLadingScreenList = [];
        //最多显示4个屏幕
        for (let i = 0; i < 4; i++) {
          let showScreen = subscript - i;
          if (showScreen < 0) {
            break;
          }
          newLadingScreenList.push(showScreen);
        }

        return immutable.fromJS(newLadingScreenList
          //从小到大排列
          .sort((v1, v2) => (v1 - v2)));
      });

    case 'UP_loadingScreen':
      return state.set('oldNum', action.data);

    case 'UP_changeScreen':
      return state.set('numIng', action.data);

    case 'CHANGE_downChange':
      return state.update('loadingScreen', list => {

        let newList=list.set(0, action.data);

        newList=newList.toJS().sort((v1, v2) => (v1 - v2));

        return immutable.fromJS(newList);
      });
    case 'CHANGE_upChange':

      return state.update('loadingScreen', list => {

       
        let newList=list.set(list.size-1, action.data);

        newList=newList.toJS().sort((v1, v2) => (v1 - v2));

        return immutable.fromJS(newList);
      });

    default:
      return state;
  }
}
