import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IllustrationType } from './types';

const PhoneVerificationIllustration = (props: IllustrationType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 173}
            height={height || 139}
            viewBox="0 0 173 139"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.876 136.704h144.485H14.876z"
                fill="#fff"
                stroke="#000"
                strokeWidth={0.706}
            />
            <Path
                opacity={0.15}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M145.348 132.761c15.836-8.487 26.609-25.194 26.609-44.418 0-21.274-13.19-39.467-31.837-46.848.024-.566.043-1.134.043-1.706 0-21.195-17.182-38.377-38.378-38.377-14.093 0-26.405 7.602-33.079 18.923-.144 0-.288-.005-.434-.005C30.956 20.33.706 50.58.706 87.896c0 17.22 6.445 32.933 17.05 44.865h127.592z"
                fill="#5EB14E"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.443 4.95h54.017a8.466 8.466 0 018.474 8.473v108.41a8.466 8.466 0 01-8.474 8.474H58.443a8.466 8.466 0 01-8.474-8.474V13.423a8.466 8.466 0 018.474-8.473z"
                fill="#FCFCFC"
                stroke="#000"
                strokeWidth={0.706}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M91.456 119.311a5.498 5.498 0 11-10.995.001 5.498 5.498 0 0110.995-.001z"
                fill="#5EB14E"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.628 21.538h53.646v89.264H58.628V21.538z"
                fill="#FCFCFC"
                stroke="#000"
                strokeWidth={0.706}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.977 15.318a2.138 2.138 0 11-4.277 0 2.138 2.138 0 014.277 0zM76.123 13.18H94.78c.584 0 1.057.472 1.057 1.056V16.4c0 .584-.473 1.056-1.057 1.056H76.123a1.055 1.055 0 01-1.056-1.056v-2.164c0-.584.472-1.056 1.056-1.056zM85.452 11.146a1.377 1.377 0 01-1.379-1.379c0-.762.617-1.378 1.379-1.378s1.378.616 1.378 1.378c0 .762-.616 1.379-1.378 1.379z"
                fill="#FCFCFC"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.76 119.869a3.763 3.763 0 013.764-3.763l-3.763 3.763z"
                fill="#000"
                fillOpacity={0.01}
            />
            <Path
                d="M82.76 119.869a3.763 3.763 0 013.764-3.763"
                stroke="#000"
                strokeWidth={0.706}
            />
            <Circle cx={85.5} cy={66.5} r={20.5} fill="#5EB14E" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M85.664 77.889c6.2 0 11.226-5.026 11.226-11.226 0-6.2-5.026-11.226-11.226-11.226-6.2 0-11.227 5.026-11.227 11.226 0 6.2 5.027 11.226 11.227 11.226zm0-1.449c-5.4 0-9.778-4.377-9.778-9.777 0-5.4 4.377-9.778 9.777-9.778 5.4 0 9.778 4.378 9.778 9.778s-4.378 9.777-9.778 9.777zm-6.311-10.104a.724.724 0 011.024-.008l3.355 3.302 7.217-7.105a.724.724 0 011.017 1.032l-7.726 7.605a.724.724 0 01-1.016 0L79.36 67.36a.724.724 0 01-.008-1.024z"
                fill="#F4F8FA"
            />
        </Svg>
    );
};

export default PhoneVerificationIllustration;
