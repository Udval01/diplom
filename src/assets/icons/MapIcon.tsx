import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const MapIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M1.667 4.167l5.833-2.5 5 2.5 5.252-2.25a.417.417 0 01.581.382v13.535l-5.833 2.5-5-2.5-5.253 2.25a.416.416 0 01-.58-.383V4.167zm10.779 1.837l-5-2.5-4.113 1.762v10.54l4.221-1.808 5 2.5 4.112-1.764V4.194l-4.22 1.809z"
                fill="#404145"
            />
        </Svg>
    );
};

export default MapIcon;
