import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconType } from './types';

const PhoneVerificationSuccessIcon = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || '60'}
            height={height || '60'}
            viewBox="0 0 60 60"
            fill="none"
            {...props}
        >
            <Circle
                cx={30}
                cy={30}
                r={29}
                fill="#fff"
                stroke="#5EB14E"
                strokeWidth={2}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.057 27.865c-.642 0-1.245.25-1.698.703a2.404 2.404 0 000 3.395l4.802 4.803c.457.452 1.061.701 1.7.701.64 0 1.244-.249 1.7-.7l9.606-9.606a2.409 2.409 0 00-.01-3.396 2.387 2.387 0 00-1.697-.702c-.642 0-1.245.25-1.698.702l-7.905 7.905-3.102-3.102a2.385 2.385 0 00-1.698-.703z"
                fill="#5EB14E"
            />
        </Svg>
    );
};

export default PhoneVerificationSuccessIcon;
