import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const AdminOrderTabIcon = (props: IconType) => {
    const { width, height, color } = props;
    return (
        <Svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill={color}
        >
            <Path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13 3h-2a2 2 0 100 4h2a2 2 0 100-4z"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default AdminOrderTabIcon;
