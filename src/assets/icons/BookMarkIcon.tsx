import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const ArrowDownIcon = (props: IconType) => {
    const { width, height, role, style } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M4.165 1.667h11.667a.833.833 0 01.833.833v15.953a.417.417 0 01-.638.353l-6.028-3.781-6.029 3.78a.417.417 0 01-.638-.352V2.5a.833.833 0 01.833-.833zM15 3.333h-10v12.86l5-3.134 5 3.134V3.333zM6.665 7.5h6.667v1.667H6.665V7.5z"
                fill="#000"
            />
        </Svg>
    );
};

export default ArrowDownIcon;
