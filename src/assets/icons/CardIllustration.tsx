import * as React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { IconType } from './types';

const CardIllustration = (props: IconType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || '173'}
            height={height || '138'}
            viewBox="0 0 173 138"
            fill="none"
            {...props}
        >
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8763 136.137H159.361H14.8763Z"
                fill="white"
                stroke="black"
                stroke-width="0.706122"
            />
            <Path
                opacity="0.15"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M145.348 132.21C161.184 123.758 171.957 107.12 171.957 87.9756C171.957 66.7902 158.767 48.6734 140.12 41.3228C140.144 40.7589 140.163 40.1938 140.163 39.6242C140.163 18.5169 122.981 1.4062 101.785 1.4062C87.6918 1.4062 75.3804 8.97619 68.7061 20.2509C68.5622 20.2499 68.4179 20.2452 68.2725 20.2452C30.9564 20.2452 0.706186 50.3711 0.706186 87.5311C0.706186 104.68 7.15061 120.327 17.7564 132.21H145.348Z"
                fill="#5EB14E"
            />
            <Rect
                x="31.5"
                y="47.5"
                width="108.5"
                height="72"
                rx="11.5"
                fill="white"
                stroke="black"
            />
            <Rect
                x="31.8391"
                y="60.4253"
                width="107.822"
                height="22.6552"
                fill="#5EB14E"
            />
            <Circle cx="104" cy="101.75" r="9.125" fill="#5EB14E" />
            <Circle cx="117.688" cy="101.75" r="9.125" fill="#5EB14E" />
        </Svg>
    );
};

export default CardIllustration;
