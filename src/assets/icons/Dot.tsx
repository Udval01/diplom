import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { IconType } from './types';
import { mapRoleToTextColor } from '../../components';

const Dot = (props: IconType) => {
    const { width, height, role } = props;

    return (
        <Svg
            width={width || 4}
            height={height || 4}
            viewBox="0 0 4 4"
            fill={mapRoleToTextColor(role) || 'none'}
            {...props}
        >
            <Circle cx={2} cy={2} r={2} fill="#000" />
        </Svg>
    );
};

export default Dot;
