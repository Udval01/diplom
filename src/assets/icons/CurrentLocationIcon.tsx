import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const CurrentLocationIcon = (props: IconType) => {
    const { height, width, role } = props;

    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-.001 8l20-8-10 20V10l-10-2z"
                fill={mapRoleToTextColor(role || 'primary')}
            />
        </Svg>
    );
};

export default CurrentLocationIcon;
