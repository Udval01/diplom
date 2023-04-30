import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const CrossIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M22.5 10.5h-9v-9a1.5 1.5 0 10-3 0v9h-9a1.5 1.5 0 100 3h9v9a1.5 1.5 0 103 0v-9h9a1.5 1.5 0 100-3z"
                fill={mapRoleToTextColor(role) || '#3DBA4E'}
            />
        </Svg>
    );
};

export default CrossIcon;
