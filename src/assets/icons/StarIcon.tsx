import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const StarIcon = (props: IconType) => {
    const { height, width, color } = props;
    return (
        <Svg
            width={height || 38}
            height={width || 38}
            viewBox="0 0 38 37"
            fill="none"
            {...props}
        >
            <Path
                d="M17.098 1.854c.599-1.843 3.205-1.843 3.804 0l3.037 9.348a2 2 0 001.902 1.382h9.829c1.937 0 2.743 2.479 1.176 3.618l-7.952 5.777a2 2 0 00-.726 2.236l3.037 9.347c.598 1.843-1.51 3.375-3.078 2.236l-7.951-5.777a2 2 0 00-2.352 0l-7.951 5.777c-1.567 1.14-3.676-.393-3.078-2.236l3.037-9.347a2 2 0 00-.726-2.236l-7.952-5.777c-1.567-1.14-.761-3.618 1.176-3.618h9.829a2 2 0 001.902-1.382l3.037-9.348z"
                fill={color || '#3D3D3D'}
            />
        </Svg>
    );
};

export default StarIcon;
