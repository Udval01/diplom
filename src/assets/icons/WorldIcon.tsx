import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const WorldIcon = (props: IconType) => {
    const { width, height, role } = props;

    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M19.37 6.61v-.05a10 10 0 00-18.78 0v.05a9.86 9.86 0 000 6.72v.05a10 10 0 0018.78 0v-.05a9.86 9.86 0 000-6.72zM2.22 11.97a7.82 7.82 0 010-4h1.86a16.73 16.73 0 000 4H2.22zm.82 2h1.4c.235.893.57 1.755 1 2.57a7.999 7.999 0 01-2.4-2.57zm1.4-8h-1.4A8 8 0 015.41 3.4a12.15 12.15 0 00-.97 2.57zm4.52 11.7a6.34 6.34 0 01-2.43-3.7h2.43v3.7zm0-5.7H6.1a14.36 14.36 0 010-4h2.86v4zm0-6H6.53a6.34 6.34 0 012.43-3.7v3.7zm7.92 0h-1.4a12.16 12.16 0 00-1-2.57 8 8 0 012.4 2.57zm-5.92-3.7a6.34 6.34 0 012.43 3.7h-2.43v-3.7zm0 15.4v-3.7h2.43a6.34 6.34 0 01-2.43 3.7zm2.86-5.7h-2.86v-4h2.86a14.36 14.36 0 010 4zm.69 4.57c.43-.815.765-1.677 1-2.57h1.4a7.999 7.999 0 01-2.4 2.57zm3.19-4.57h-1.86c.082-.663.122-1.33.12-2a16.285 16.285 0 00-.12-2h1.86a7.821 7.821 0 010 4z"
                fill={mapRoleToBackgroundColor(role || 'tertiary')}
            />
        </Svg>
    );
};
export default WorldIcon;
