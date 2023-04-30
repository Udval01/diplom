import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const AdminProductIcon = (props: IconType) => {
    const { width, height, color } = props;
    return (
        <Svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            {...props}
        >
            <Path
                d="M19 5h-6a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2zM7 7v10M3 8v8"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={color}
            />
        </Svg>
    );
};

export default AdminProductIcon;
