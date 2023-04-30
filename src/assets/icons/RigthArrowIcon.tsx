import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const RigthArrowIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 24}
            height={height || 25}
            viewBox="0 0 24 25"
            fill="none"
            {...props}
        >
            <Path
                d="M13.172 12.5l-4.95-4.95 1.414-1.414L16 12.5l-6.364 6.364-1.414-1.414 4.95-4.95z"
                fill={mapRoleToTextColor(role) || '#000'}
            />
        </Svg>
    );
};

export default RigthArrowIcon;
