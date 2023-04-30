import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const ClockIcon = (props: IconType) => {
    const { width, height, role } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0010 18zm1-8h4v2H9V5h2v5z"
                fill={mapRoleToBackgroundColor(role) || '#000'}
            />
        </Svg>
    );
};

export default ClockIcon;
