import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const MyLocationIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 28}
            height={height || 28}
            viewBox="0 0 28 28"
            fill="none"
            {...props}
        >
            <Circle
                opacity={0.25}
                cx={14}
                cy={14}
                r={14}
                fill={mapRoleToTextColor(role) || '#5EB14E'}
            />
            <Circle
                cx={14}
                cy={14}
                r={6}
                fill={mapRoleToTextColor(role) || '#5EB14E'}
            />
        </Svg>
    );
};

export default MyLocationIcon;
