import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const BottomOfText = (props: IconType) => {
    const { width, height, role } = props;

    return (
        <Svg
            width={width || 12}
            height={height || 10}
            viewBox="0 0 12 10"
            fill="none"
            {...props}
        >
            <Path
                d="M7.942 8.398L12 0H0l4.364 8.446c.757 1.464 2.86 1.436 3.578-.048z"
                fill={mapRoleToBackgroundColor(role || 'light')}
            />
        </Svg>
    );
};

export default BottomOfText;
