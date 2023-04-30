import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import { IconType } from './types';

const MasterCardIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 17}
            height={height || 11}
            viewBox="0 0 17 11"
            fill="none"
        >
            <Ellipse
                cx="11.6031"
                cy="5.5"
                rx="5.39683"
                ry="5.5"
                fill="#F79E1B"
            />
            <Ellipse
                cx="5.39683"
                cy="5.5"
                rx="5.39683"
                ry="5.5"
                fill="#EB001B"
            />
            <Path
                d="M8.49995 10.0003C9.88723 9.005 10.7936 7.36033 10.7936 5.49992C10.7936 3.63951 9.88723 1.99484 8.49995 0.999512C7.11267 1.99484 6.2063 3.63951 6.2063 5.49992C6.2063 7.36033 7.11267 9.005 8.49995 10.0003Z"
                fill="#FF5F00"
            />
        </Svg>
    );
};

export default MasterCardIcon;
