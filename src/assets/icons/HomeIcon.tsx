import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const HomeIcon = (props: IconType) => {
    const { width, height, role } = props;

    return (
        <Svg
            width={width || 18}
            height={height || 21}
            viewBox="0 0 18 21"
            fill="none"
            {...props}
        >
            <Path
                d="M17 6.024l-6-5.26a3 3 0 00-4 0l-6 5.26a3 3 0 00-1 2.26v8.74a3 3 0 003 3h12a3 3 0 003-3v-8.75a3 3 0 00-1-2.25zm-6 12H7v-5a1 1 0 011-1h2a1 1 0 011 1v5zm5-1a1 1 0 01-1 1h-2v-5a3 3 0 00-3-3H8a3 3 0 00-3 3v5H3a1 1 0 01-1-1v-8.75a1 1 0 01.34-.75l6-5.25a1 1 0 011.32 0l6 5.25a1 1 0 01.34.75v8.75z"
                fill={mapRoleToBackgroundColor(role || 'tertiary')}
            />
        </Svg>
    );
};

export default HomeIcon;
