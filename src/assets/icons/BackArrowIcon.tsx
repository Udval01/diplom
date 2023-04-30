import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const BackArrowIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 8}
            height={height || 14}
            viewBox="0 0 8 14"
            fill="none"
            {...props}
        >
            <Path
                d="M.322 7.42l5.66 5.65a.998.998 0 001.42 0 1 1 0 000-1.41l-4.95-5 4.95-4.95a1 1 0 000-1.41 1 1 0 00-.71-.3 1 1 0 00-.71.3L.322 5.95a1 1 0 000 1.47z"
                fill={mapRoleToTextColor(role) || '#000'}
            />
        </Svg>
    );
};

export default BackArrowIcon;
