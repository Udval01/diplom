import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const PlusIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 16}
            height={height || 16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                d="M8 3.333v9.334M3.334 8h9.333"
                stroke="#5EB14E"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default PlusIcon;
