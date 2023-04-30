import * as React from 'react';
import Svg, { Path, Mask } from 'react-native-svg';
import { IconType } from './types';

const ChevronRightIcon = (props: IconType) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 19a1 1 0 01-.768-1.64l4.476-5.37-4.316-5.363a1 1 0 011.56-1.254l4.828 6a1 1 0 01-.011 1.267l-5 6a1 1 0 01-.77.36z"
                fill="#A2A2A2"
            />
            <Mask id="prefix__a" x={9} y={5} width={8} height={14}>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 19a1 1 0 01-.768-1.64l4.476-5.37-4.316-5.363a1 1 0 011.56-1.254l4.828 6a1 1 0 01-.011 1.267l-5 6a1 1 0 01-.77.36z"
                    fill="#fff"
                />
            </Mask>
        </Svg>
    );
};

export default ChevronRightIcon;
