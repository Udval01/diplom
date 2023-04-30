import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';

const LocationPinIcon = (props) => {
    const { height, width } = props;
    return (
        <Svg
            width={height || 72}
            height={width || 72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M52.971 44.373L40.242 57.228A5.97 5.97 0 0136.002 59a5.97 5.97 0 01-4.241-1.773L19.029 44.373a24.31 24.31 0 01-6.568-12.41 24.457 24.457 0 011.366-14.002 24.187 24.187 0 018.84-10.877A23.834 23.834 0 0136 3c4.747 0 9.387 1.421 13.334 4.084a24.187 24.187 0 018.839 10.877 24.457 24.457 0 011.366 14.003 24.31 24.31 0 01-6.568 12.41z"
                fill="#50A141"
            />
            <Path d="M36 34a7 7 0 100-14 7 7 0 000 14z" fill="#fff" />
            <Ellipse
                opacity={0.1}
                cx={36}
                cy={66.5}
                rx={12}
                ry={2.5}
                fill="#000"
            />
        </Svg>
    );
};

export default LocationPinIcon;
