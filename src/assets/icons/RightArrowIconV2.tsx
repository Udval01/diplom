import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';
import { mapRoleToTextColor } from '../../components';

const RightArrowV2Icon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 16}
            height={height || 16}
            viewBox="0 0 16 16"
            fill={mapRoleToTextColor(role) || 'none'}
            {...props}
        >
            <Path
                d="M10.781 7.333L7.205 3.757l.943-.943L13.333 8l-5.185 5.185-.943-.943 3.576-3.576H2.667V7.333h8.114z"
                fill="#fff"
            />
        </Svg>
    );
};

export default RightArrowV2Icon;
