import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';
import { IconType } from './types';

const CartDateIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={height || '24'}
            height={width || '16'}
            viewBox="0 0 24 16"
            fill="none"
            {...props}
        >
            <Rect
                x="0.25"
                y="0.25"
                width="23.5"
                height="15.5"
                rx="1.75"
                stroke="#A2A2A2"
                stroke-width="0.5"
            />
            <Rect y="3" width="24" height="5" fill="#A2A2A2" />
            <Circle cx="16" cy="12" r="2" fill="#C4C4C4" />
            <Circle cx="19" cy="12" r="2" fill="#C4C4C4" />
        </Svg>
    );
};

export default CartDateIcon;
