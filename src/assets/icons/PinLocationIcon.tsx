import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const PinLocationIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 19}
            height={height || 32}
            viewBox="0 0 19 32"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.137 18.232c4.582-.495 8.149-4.375 8.149-9.09A9.143 9.143 0 107.95 18.21V32h2.186V18.232z"
                fill="#5EB14E"
            />
            <Path fill="#fff" d="M7.155 7.553h3.975v3.975H7.155z" />
        </Svg>
    );
};

export default PinLocationIcon;
