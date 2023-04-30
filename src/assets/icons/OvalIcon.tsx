import * as React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const OvalIcon = (props: IconType) => {
    const { size, role } = props;
    return (
        <Svg
            width={size || 38}
            height={size || 38}
            viewBox="0 0 38 38"
            stroke={mapRoleToBackgroundColor(role || 'info')}
            {...props}
        >
            <G
                transform="translate(1 1)"
                strokeWidth={2}
                fill="none"
                fillRule="evenodd"
            >
                <Circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
                <Path d="M36 18c0-9.94-8.06-18-18-18"></Path>
            </G>
        </Svg>
    );
};

export default OvalIcon;
