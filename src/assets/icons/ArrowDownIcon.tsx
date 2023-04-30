import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const ArrowDownIcon = (props: IconType) => {
    const { width, height, role, style } = props;
    return (
        <Svg
            width={width || 12}
            height={height || 7}
            viewBox="0 0 12 7"
            fill="none"
            style={style}
            {...props}
        >
            <Path
                d="M.718.359L5.999 5.64 11.281.359"
                stroke={mapRoleToTextColor(role)}
            />
        </Svg>
    );
};

export default ArrowDownIcon;
