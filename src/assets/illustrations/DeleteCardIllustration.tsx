import * as React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { IllustrationType } from './types';

const DeleteCardIllustration = (props: IllustrationType) => {
    return (
        <Svg
            width="173"
            height="151"
            viewBox="0 0 173 151"
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
                x="31.8389"
                y="60.4253"
                width="107.822"
                height="22.6552"
                fill="#5EB14E"
            />
            <Circle cx="104" cy="101.75" r="9.125" fill="#5EB14E" />
            <Circle cx="117.688" cy="101.75" r="9.125" fill="#5EB14E" />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M166.151 114.303C166.151 130.581 153.126 143.776 137.062 143.776C120.998 143.776 107.976 130.581 107.976 114.303C107.976 98.0251 120.998 84.8298 137.062 84.8298C153.126 84.8298 166.151 98.0251 166.151 114.303Z"
                fill="white"
                stroke="black"
                stroke-width="0.706122"
            />
            <Path
                d="M126.562 128.673C131.751 123.092 140.477 122.776 146.055 127.963"
                stroke="black"
                stroke-width="0.706122"
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M128.87 107.204C128.878 108.402 127.83 109.38 126.53 109.389C125.229 109.396 124.168 108.433 124.16 107.235C124.153 106.036 125.201 105.058 126.501 105.049C127.802 105.04 128.863 106.005 128.87 107.204Z"
                fill="black"
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M146.759 107.204C146.766 108.402 145.719 109.38 144.419 109.389C143.117 109.396 142.057 108.433 142.049 107.235C142.042 106.036 143.089 105.058 144.389 105.049C145.691 105.04 146.752 106.005 146.759 107.204Z"
                fill="black"
            />
        </Svg>
    );
};

export default DeleteCardIllustration;
