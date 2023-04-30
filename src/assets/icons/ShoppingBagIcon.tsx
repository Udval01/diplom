import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const ShoppingBagIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 16}
            height={height || 17}
            viewBox="0 0 16 17"
            fill="none"
            {...props}
        >
            <Path
                d="M4.667 5.833V4.5a3.333 3.333 0 016.666 0v1.333h2A.667.667 0 0114 6.5v8a.667.667 0 01-.667.667H2.667A.667.667 0 012 14.5v-8a.667.667 0 01.667-.667h2zm0 1.334H3.333v6.666h9.334V7.167h-1.334V8.5H10V7.167H6V8.5H4.667V7.167zM6 5.833h4V4.5a2 2 0 10-4 0v1.333z"
                fill="#B7B7B7"
            />
        </Svg>
    );
};

export default ShoppingBagIcon;
