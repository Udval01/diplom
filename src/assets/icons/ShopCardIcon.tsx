import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const ShopCardIcon = (props: any) => {
    const { width, height } = props;

    return (
        <Svg
            width={width || 48}
            height={height || 48}
            viewBox="0 0 48 48"
            fill="none"
            {...props}
        >
            <Circle cx={24} cy={24} r={23.5} stroke="#E8EAED" />
            <Path
                d="M33 24.742V31.5h1v2H14v-2h1v-6.758A4.497 4.497 0 0113 21c0-.827.224-1.624.633-2.303L16.345 14a1 1 0 01.866-.5H30.79a1 1 0 01.866.5l2.702 4.682A4.496 4.496 0 0133 24.742zm-2 .73a4.498 4.498 0 01-3.75-1.36 4.497 4.497 0 01-6.5.002A4.496 4.496 0 0117 25.473V31.5h14V25.472zM17.789 15.5l-2.433 4.213a2.5 2.5 0 004.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 004.644 0c.335-.837 1.52-.837 1.856 0a2.501 2.501 0 104.457-2.232L30.21 15.5H17.789z"
                fill="#5EB14E"
            />
        </Svg>
    );
};

export default ShopCardIcon;
