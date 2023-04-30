import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const MenuIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M4 8h16M4 16h16"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default MenuIcon;
