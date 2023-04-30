import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const RawPlusIconInCircle = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 10}
            height={height || 9}
            viewBox="0 0 10 9"
            fill="none"
            {...props}
        >
            <Path
                d="M11.5 0C5.15 0 0 5.15 0 11.5S5.15 23 11.5 23 23 17.85 23 11.5 17.85 0 11.5 0zm4.929 12.116a.206.206 0 01-.206.205h-3.902v3.902a.206.206 0 01-.205.206h-1.232a.206.206 0 01-.205-.206v-3.902H6.777a.206.206 0 01-.206-.205v-1.232c0-.113.093-.205.206-.205h3.902V6.777c0-.113.092-.206.205-.206h1.232c.113 0 .205.093.205.206v3.902h3.902c.113 0 .206.092.206.205v1.232z"
                fill={mapRoleToTextColor(role) || '#000'}
            />
        </Svg>
    );
};

export default RawPlusIconInCircle;
