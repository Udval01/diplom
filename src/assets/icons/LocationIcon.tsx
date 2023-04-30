import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const LocationIcon = (props: IconType) => {
    const { role } = props;
    return (
        <Svg width={18} height={22} viewBox="0 0 18 22" fill="none" {...props}>
            <Path
                d="M9 21.728l-6.364-6.364a9 9 0 1112.728 0L9 21.728zm4.95-7.778a7 7 0 10-9.9 0L9 18.9l4.95-4.95zM9 11a2 2 0 110-4 2 2 0 010 4z"
                fill={mapRoleToBackgroundColor(role) || '#000'}
            />
        </Svg>
    );
};

export default LocationIcon;
