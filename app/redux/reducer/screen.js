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
        //最多显示4个屏幕
        for (let i = 0; i < 4; i++) {
          let showScreen = subscript - i;
          if (showScreen < 0) {
            break;
          }
          loadingScreenList = loadingScreenList.set(i, showScreen);
        }

        return loadingScreenList;
      });

    case 'UP_loadingScreen':
      return state.set('oldNum', action.data);

    case 'UP_changeScreen':
      return state.set('numIng', action.data);

    case 'CHANGE_downChange':
      return state.update('loadingScreen', list => {
        list = list.set(0, action.data - 1);
        list = list.set(1, action.data);
        list = list.set(2, action.data + 1);
        list = list.set(3, action.data + 2);
        return list;
      });

    case 'CHANGE_upChange':
      return state.update('loadingScreen', list => {
        list = list.set(0, action.data - 2);
        list = list.set(1, action.data - 1);
        list = list.set(2, action.data);
        list = list.set(3, action.data + 1);
        return list;
      });

    default:
      return state;
  }
}