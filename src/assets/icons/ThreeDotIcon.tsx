import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const ThreeDotIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 24}
            height={height || 6}
            viewBox="0 0 24 6"
            fill="none"
            {...props}
        >
            <Path
                d="M12 .5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3.25.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm17.5 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                fill={mapRoleToTextColor(role) || '#fff'}
            />
        </Svg>
    );
};

export default ThreeDotIcon;
