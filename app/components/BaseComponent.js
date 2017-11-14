import React from 'react';
import {is} from 'immutable';

/**
 * 基类定义 shouldComponentUpdate 统一优化
 */
class BaseComponent extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};

        nextState = nextState || {};
        nextProps = nextProps || {};

        //对象个数比较
        if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true;
        }

        //props 新旧对比
        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                return true;
            }
        }

        //state 新旧对比
        for (const key in nextState) {
            if (!is(thisState[key], nextState[key])) {
                return true;
            }
        }

        return false;
    }
}

export default BaseComponent;