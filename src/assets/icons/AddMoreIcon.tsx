import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const AddMoreIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 51}
            height={height || 51}
            viewBox="0 0 51 51"
            fill="none"
            {...props}
        >
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.9995 1.99996C39.2712 1.99996 49.9991 12.7279 49.9991 26C49.9991 39.2719 39.2712 49.9999 25.9995 49.9999C12.7273 49.9999 1.9994 39.2719 1.9994 26C1.9994 12.7279 12.7273 1.99996 25.9995 1.99996Z"
                fill={mapRoleToTextColor(role) || '#5EB14E'}
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.9419 24.7346H27.2596V19.0521C27.2596 18.7034 26.9769 18.4208 26.6281 18.4208H25.3656C25.0164 18.4208 24.7342 18.7034 24.7342 19.0521V24.7346H19.0514C18.7027 24.7346 18.42 25.0172 18.42 25.366V26.6289C18.42 26.9777 18.7027 27.2603 19.0514 27.2603H24.7342V32.9428C24.7342 33.2915 25.0164 33.5741 25.3656 33.5741H26.6281C26.9769 33.5741 27.2596 33.2915 27.2596 32.9428V27.2603H32.9419C33.2911 27.2603 33.5733 26.9777 33.5733 26.6289V25.366C33.5733 25.0172 33.2911 24.7346 32.9419 24.7346Z"
                fill={mapRoleToTextColor(role) || '#fff'}
            />
        </Svg>
    );
};

export default AddMoreIcon;
