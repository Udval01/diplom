import * as React from 'react';
import Svg, { Mask, Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const EditIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.019 10.679l-2.695-2.695 1.948-1.95 2.694 2.695-1.947 1.95zm-6.94 6.946l-2.976.27.264-2.955 5.617-5.617 2.696 2.696-5.6 5.606zM19.405 7.338l-.001-.001-2.738-2.738c-.741-.74-2.014-.774-2.716-.07l-8.996 8.997a1.973 1.973 0 00-.57 1.214l-.38 4.17a1.002 1.002 0 001.088 1.086l4.17-.38a1.974 1.974 0 001.214-.567l8.997-8.997c.728-.73.697-1.948-.068-2.714z"
                fill="#373737"
            />
            <Mask id="prefix__a" x={3} y={4} width={17} height={16}>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.019 10.679l-2.695-2.695 1.948-1.95 2.694 2.695-1.947 1.95zm-6.94 6.946l-2.976.27.264-2.955 5.617-5.617 2.696 2.696-5.6 5.606zM19.405 7.338l-.001-.001-2.738-2.738c-.741-.74-2.014-.774-2.716-.07l-8.996 8.997a1.973 1.973 0 00-.57 1.214l-.38 4.17a1.002 1.002 0 001.088 1.086l4.17-.38a1.974 1.974 0 001.214-.567l8.997-8.997c.728-.73.697-1.948-.068-2.714z"
                    fill={mapRoleToTextColor(role) || '#fff'}
                />
            </Mask>
        </Svg>
    );
};

export default EditIcon;
