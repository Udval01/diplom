import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const CheckMarkIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 7}
            height={height || 6}
            viewBox="0 0 7 6"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.491 5.324L.069 2.902l.807-.807L2.491 3.71 6.123.077l.808.807-4.44 4.44z"
                fill={mapRoleToTextColor(role || 'primary')}
            />
        </Svg>
    );
};

export default CheckMarkIcon;
