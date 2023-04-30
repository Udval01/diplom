import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const LocationMedailIcon = (props: IconType) => {
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
                d="M14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5 3.5 8.201 3.5 14 8.201 24.5 14 24.5z"
                fill="#5EB14E"
            />
            <Path
                d="M14 19.834l-1.167-4.667L8.166 14l10.5-4.666-4.667 10.5z"
                fill="#fff"
            />
        </Svg>
    );
};

export default LocationMedailIcon;
