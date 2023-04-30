import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const SheetsIcon = (props: IconType) => {
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
                d="M5.833 5.833V2.5a.833.833 0 01.834-.833H17.5a.833.833 0 01.833.833v10.833a.833.833 0 01-.833.834h-3.333v3.327c0 .464-.374.84-.84.84H2.507a.84.84 0 01-.84-.84L1.67 6.673c0-.464.374-.84.84-.84h3.324zm1.667 0h5.828c.463 0 .839.375.839.84V12.5h2.5V3.333H7.5v2.5zM3.336 7.5l-.003 9.167H12.5V7.5H3.336z"
                fill="#000"
            />
        </Svg>
    );
};

export default SheetsIcon;
