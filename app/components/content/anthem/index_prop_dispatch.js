import axios from 'axios';
import server from '@/serverConf.js';
import getRobot from './getRobot';


/**
 *
 * @param {*} state
 * @param {*} ownProps
 */
const stateSetProp = (state, ownProps) => {
  return {
    //列数
    maxcolumns: state.getIn(['arrangeProperties', 'maxColumns']),
    //列宽
    columnsWidth: state.getIn(['arrangeProperties', 'columnsWidth']),
    //屏幕总数
    screenAllNum: state.getIn(['screen', 'allNum']),
    //当前屏幕
    numIng: state.getIn(['screen', 'numIng']),
    //旧屏幕
    oldNum: state.getIn(['screen', 'oldNum']),
    //left
    locationLeft: state.getIn(['arrangeProperties', 'locationLeft']),
    //top
    robotTopLocation: state.getIn(['robot', 'robotTopLocation']),
    //windowHeight
    windowViewHeight: state.getIn(['arrangeProperties', 'windowViewHeight']),
    //当前显示robot
    renderRobot: getRobot(state),
    //请求图片数量
    requestImgNum: state.getIn(['arrangeProperties', 'requestImgNum']),
    //已存所有位置信息
    locationInfo: state.getIn(['robot', 'locationInfo']),
    //当前加载的屏幕队
    loadingScreen: state.getIn(['screen', 'loadingScreen']),
    //机器人父级容器高度
    containerHeight: state.getIn(['arrangeProperties', 'containerHeight'])
  };
}

/**
 *
 * @param {*} dispatch
 * @param {*} ownProps
 */
const dispatchToProps = (dispatch, ownProps) => {

  return {
    /**
     * 获取列宽
     */
    setColumnsWidth: width => dispatch({
      type: 'SET_columnsWidth',
      data: width
    }),

    /**
     * 获取可视区域高度
     */
    setWindowHeight: height => dispatch({
      type: 'SET_windowHeight',
      data: height
    }),

    /**
     * 添加新图片位置信息
     * imglist 图片
     */
    addlocationInfo: (imgdata, robotId, screenNumIng) => dispatch({
      type: 'SET_addlocationInfo',
      data: {
        imgdata,
        robotId,
        screenNumIng
      }
    }),

    /**
     * 获取left值
     */
    setlocationLeft: () => dispatch({
      type: 'SET_locationLeft'
    }),

    //初始化top值
    setInitTop: maxColumns => dispatch({
      type: 'SET_initTop',
      data: maxColumns
    }),

    //设置top
    setTop: (columnsNum, newTop) => dispatch({
      type: 'SET_top',
      data: {
        columnsNum,
        height: newTop
      }
    }),

    addScreen: () => dispatch({
      type: 'ADD_screen'
    }),

    addlocationInfoNum: upNum => dispatch({
      type: 'ADD_locationInfoNum',
      data: upNum
    }),

    addloadingScreen: screenAllNum => dispatch({
      type: 'ADD_loadingScreen',
      data: screenAllNum
    }),

    //更换上一个屏幕下标
    changeOldNum: newOldNum => dispatch({
      type: 'UP_loadingScreen',
      data: newOldNum
    }),

    //更换当前屏幕下标
    changeScreen: screenNumIng => dispatch({
      type: 'UP_changeScreen',
      data: screenNumIng
    }),

    //更新容器高度
    upContainerHeight: newHeight => dispatch({
      type: 'UP_containerHeight',
      data: newHeight
    }),

    downChange: screenNumIng => dispatch({
      type: 'CHANGE_downChange',
      data: screenNumIng
    }),

    upChange: screenNumIng => dispatch({
      type: 'CHANGE_upChange',
      data: screenNumIng
    }),

    /**
     * 获取图片
     */
    getNewImgData: requestImgNum => axios.get('http://' + server.imgserver + '/', {
      params: {
        num: requestImgNum
      }
    })
  };
}

export default {
  stateSetProp,
  dispatchToProps
}