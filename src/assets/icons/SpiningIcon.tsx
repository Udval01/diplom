import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const SpiningIcon = (props: IconType) => {
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
                d="M19 9.001a1 1 0 00-1 1 8.05 8.05 0 11-2.22-5.5h-2.4a1 1 0 100 2h4.53a1 1 0 001-1v-4.5a1 1 0 00-2 0v1.77a10 10 0 103.09 7.23 1 1 0 00-1-1z"
                fill="#000"
            />
        </Svg>
    );
};

export default SpiningIcon;
