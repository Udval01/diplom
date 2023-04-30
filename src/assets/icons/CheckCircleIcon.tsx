import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const CheckCircleIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 19}
            height={height || 19}
            viewBox="0 0 19 19"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.136 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm4.46 5.332L8.673 12.87a.615.615 0 01-.844.072l-3.077-2.461a.616.616 0 01.769-.962l2.62 2.097 4.536-5.102a.615.615 0 11.92.818z"
                fill="#fff"
            />
        </Svg>
    );
};

export default CheckCircleIcon;
