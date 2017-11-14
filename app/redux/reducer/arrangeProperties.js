import immutable from 'immutable';
import {
  arrangeProperties
} from '../defaultData';



module.exports = (state = immutable.fromJS(arrangeProperties), action) => {
  switch (action.type) {

    /**
     * 通过父级组件的宽获取列宽
     */
    case 'SET_columnsWidth':
      let spacing = state.get('spacing');
      let maxcolumns = state.get('maxColumns');

      return state.set('columnsWidth', Math.floor(((action.data - (spacing * maxcolumns)) / maxcolumns)));

    case 'SET_locationLeft':
      let getspacing = state.get('spacing');
      let columnsWidth = state.get('columnsWidth');
      let columns = state.get('maxColumns');

      columnsWidth += getspacing;

      let newLeftLocation = [];

      for (let i = 0; i < columns; i++) {
        newLeftLocation.push((columnsWidth * i) + (getspacing / 2));
      }

      return state.set('locationLeft', newLeftLocation);

    case 'SET_windowHeight':
      return state.update('windowViewHeight', defaultHeight => (defaultHeight + action.data));

    case 'UP_containerHeight':
      return state.update('containerHeight', currentHeight => (currentHeight < action.data ? action.data : currentHeight));

    default:
      return state;
  }
}