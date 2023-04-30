import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const LocationPointerIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 28}
            height={height || 28}
            viewBox="0 0 28 28"
            fill="none"
            {...props}
        >
            <Path
                d="M20.6 19.433l-4.951 4.95a2.33 2.33 0 01-3.298 0L7.4 19.434a9.333 9.333 0 1113.2 0z"
                fill="#5EB14E"
            />
            <Path
                d="M17.5 12.834a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                fill="#fff"
            />
        </Svg>
    );
};

export default LocationPointerIcon;
