import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import './types';
import { IconType } from './types';

const ItemTrash = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 16}
            height={height || 16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                d="M11.3335 4.00016H14.6668V5.3335H13.3335V14.0002C13.3335 14.177 13.2633 14.3465 13.1382 14.4716C13.0132 14.5966 12.8436 14.6668 12.6668 14.6668H3.3335C3.15669 14.6668 2.98712 14.5966 2.86209 14.4716C2.73707 14.3465 2.66683 14.177 2.66683 14.0002V5.3335H1.3335V4.00016H4.66683V2.00016C4.66683 1.82335 4.73707 1.65378 4.86209 1.52876C4.98712 1.40373 5.15669 1.3335 5.3335 1.3335H10.6668C10.8436 1.3335 11.0132 1.40373 11.1382 1.52876C11.2633 1.65378 11.3335 1.82335 11.3335 2.00016V4.00016ZM12.0002 5.3335H4.00016V13.3335H12.0002V5.3335ZM6.00016 2.66683V4.00016H10.0002V2.66683H6.00016Z"
                fill="#404145"
            />
        </Svg>
    );
};

export default ItemTrash;
