import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const Zip = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg width={width || 20} height={height || 20} viewBox="0 0 20 20">
            <Path
                d="M0 0H1.34375V13.3438H0V0ZM5.34375 13.3438V0H2.65625V13.3438H5.34375ZM6.65625 0H8V13.3438H6.65625V0ZM9.34375 0H10.6562V13.3438H9.34375V0ZM0 14.6562H16V16H0V14.6562ZM14.6562 0H13.3438V13.3438H16V0H14.6562Z"
                fill={mapRoleToTextColor(role) || '#000'}
            />
        </Svg>
    );
};

export default Zip;
