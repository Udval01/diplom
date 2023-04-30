import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const MinusIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 12}
            height={height || 3}
            viewBox="0 0 12 3"
            fill="none"
            {...props}
        >
            <Path
                d="M22.5 0h-21a1.5 1.5 0 000 3h21a1.5 1.5 0 000-3z"
                fill={mapRoleToTextColor(role) || '#3DBA4E'}
            />
        </Svg>
    );
};

export default MinusIcon;
