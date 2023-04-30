import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const ProfileIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M9.981 0a10 10 0 00-7.35 16.76 10.001 10.001 0 0014.7 0A10 10 0 009.981 0zm0 18a8 8 0 01-5.55-2.25 6 6 0 0111.1 0A8 8 0 019.981 18zm-2-10a2 2 0 114 0 2 2 0 01-4 0zm8.91 6a8 8 0 00-3.91-3.38 4 4 0 10-6 0A8 8 0 003.071 14a7.92 7.92 0 01-1.09-4 8 8 0 1116 0 7.92 7.92 0 01-1.09 4z"
                fill="#000"
            />
        </Svg>
    );
};

export default ProfileIcon;
