import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const ChevronDownIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 14}
            height={height || 8}
            viewBox="0 0 14 8"
            fill="none"
            {...props}
        >
            <Path
                d="M7.71 7.54l5.65-5.66A1 1 0 1011.95.46l-5 4.95L2 .46a1 1 0 00-1.41 0 1 1 0 00-.3.71 1 1 0 00.3.71l5.65 5.66a1 1 0 001.47 0z"
                fill={mapRoleToTextColor(role) || '#000'}
            />
        </Svg>
    );
};

export default ChevronDownIcon;
