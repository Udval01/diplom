import * as React from 'react';
import Svg, { Path, Mask } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const CloseIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.943 8l2.862-2.862a.666.666 0 10-.943-.942L8 7.058 5.138 4.196a.666.666 0 10-.942.942L7.058 8l-2.862 2.862a.666.666 0 10.942.943L8 8.943l2.862 2.862a.665.665 0 00.943 0 .666.666 0 000-.943L8.943 8z"
                fill={mapRoleToTextColor(role) || '#7E8085'}
            />
        </Svg>
    );
};

export default CloseIcon;
