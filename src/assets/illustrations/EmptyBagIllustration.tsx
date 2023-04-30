import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IllustrationType } from './types';

const EmptyBagIllustration = (props: IllustrationType) => {
    const { width, height } = props;
    return (
        <Svg
            width={width || 140}
            height={height || 140}
            viewBox="0 0 140 140"
            fill="none"
            {...props}
        >
            <Path
                d="M43.429 125h63.57m-63.57 0V38m0 87h-10.43V38h10.43m0 0h4.07m59.5 79.608V38h-11.5m0 0c-1.166-8-7.6-24-24-24-20.5 0-24 19.5-24 24m48 0h-48"
                stroke="#C8C8C8"
                strokeWidth={2}
            />
        </Svg>
    );
};

export default EmptyBagIllustration;
