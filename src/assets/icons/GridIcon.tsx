import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const GridIcon = (props: IconType) => {
    const { width, height } = props;

    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M2.5 2.5h6.667v6.667H2.5V2.5zm0 8.333h6.667V17.5H2.5v-6.667zM10.833 2.5H17.5v6.667h-6.667V2.5zm0 8.333H17.5V17.5h-6.667v-6.667zM12.5 4.167V7.5h3.333V4.167H12.5zm0 8.333v3.333h3.333V12.5H12.5zM4.167 4.167V7.5H7.5V4.167H4.167zm0 8.333v3.333H7.5V12.5H4.167z"
                fill="#000"
            />
        </Svg>
    );
};

export default GridIcon;
