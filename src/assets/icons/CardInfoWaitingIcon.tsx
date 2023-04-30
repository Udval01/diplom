import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const CardInfoWaitingIcon = (props: IconType) => {
    const { width, height } = props;

    return (
        <Svg
            width={width || 40}
            height={height || 40}
            viewBox="0 0 40 40"
            fill="none"
            {...props}
        >
            <Path
                d="M29.167 4.167L38.334 20l-9.167 15.833H10.834L1.667 20l9.167-15.834h18.333zM27.245 7.5h-14.49L5.52 20l7.236 12.5h14.49L34.482 20 27.245 7.5zM18.334 25h3.333v3.333h-3.333V25zm0-13.334h3.333v10h-3.333v-10z"
                fill="#000"
            />
        </Svg>
    );
};

export default CardInfoWaitingIcon;
