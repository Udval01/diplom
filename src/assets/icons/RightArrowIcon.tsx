import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const RightArrowIcon = (props: IconType) => {
    const { width, height, role } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 21}
            viewBox="0 0 20 21"
            fill="none"
        >
            <Path
                d="M10.9767 10.5001L6.85168 6.37511L8.03002 5.19678L13.3334 10.5001L8.03002 15.8034L6.85168 14.6251L10.9767 10.5001Z"
                fill={mapRoleToTextColor(role) || 'black'}
            />
        </Svg>
    );
};
export default RightArrowIcon;
