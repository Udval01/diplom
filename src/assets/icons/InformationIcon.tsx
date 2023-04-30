import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const InformationIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.667A8.336 8.336 0 001.667 10c0 4.6 3.733 8.333 8.333 8.333S18.333 14.6 18.333 10 14.6 1.667 10 1.667zm.833 12.5H9.167v-5h1.666v5zm0-6.667H9.167V5.833h1.666V7.5z"
                fill={mapRoleToTextColor(role) || '#374FC7'}
            />
        </Svg>
    );
};

export default InformationIcon;
