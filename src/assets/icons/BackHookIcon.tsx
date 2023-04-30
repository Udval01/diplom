import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const BackHookIcon = (props: IconType) => {
    const { width, height, role } = props;

    return (
        <Svg
            width={width || 16}
            height={height || 16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                d="M3.884 4.667l1.69 1.69-.942.943-3.3-3.3 3.3-3.3.943.943-1.691 1.69h4.781a5.333 5.333 0 110 10.667h-6v-1.333h6a4 4 0 100-8H3.884z"
                fill="#404145"
            />
        </Svg>
    );
};

export default BackHookIcon;
