import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';
import { IconType } from './types';

const CardIcon = (props: IconType) => {
    const { height, width, color } = props;
    return (
        <Svg
            width={width || '24'}
            height={height || '16'}
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
            <Rect y="3" width="24" height="5" fill={color || '#A2A2A2'} />
            <Circle cx="16" cy="12" r="2" fill={color || '#C4C4C4'} />
            <Circle cx="19" cy="12" r="2" fill={color || '#C4C4C4'} />
        </Svg>
    );
};

export default CardIcon;
