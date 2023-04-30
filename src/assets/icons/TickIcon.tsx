import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const TickIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 15}
            height={height || 11}
            viewBox="0 0 15 11"
            fill="none"
            {...props}
        >
            <Path
                d="M13.732.296a.999.999 0 00-1.42 0l-7.45 7.46-3.13-3.14a1.022 1.022 0 10-1.42 1.47l3.84 3.84a1.001 1.001 0 001.42 0l8.16-8.16a1 1 0 000-1.47z"
                fill={mapRoleToBackgroundColor(role || 'light')}
            />
        </Svg>
    );
};

export default TickIcon;
