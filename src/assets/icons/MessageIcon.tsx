import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './types';

const MessageIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 16}
            height={height || 12}
            viewBox="0 0 16 12"
            fill="none"
            {...props}
        >
            <Path
                d="M1 1l7 5 7-5M1 11h14V1H1v10z"
                stroke="#5EB14E"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default MessageIcon;
