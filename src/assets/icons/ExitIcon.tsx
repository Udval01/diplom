import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const ExitIcon = (props: IconType) => {
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
                d="M4.167 18.333a.833.833 0 01-.834-.833v-15a.833.833 0 01.834-.833h11.666a.833.833 0 01.834.833V5H15V3.333H5v13.334h10V15h1.667v2.5a.833.833 0 01-.834.833H4.167zm10.833-5v-2.5H9.167V9.167H15v-2.5L19.167 10 15 13.333z"
                fill="#000"
            />
        </Svg>
    );
};

export default ExitIcon;
