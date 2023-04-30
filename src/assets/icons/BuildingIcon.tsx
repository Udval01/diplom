import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const BuildingIcon = (props: IconType) => {
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
                d="M12 6h1a1 1 0 100-2h-1a1 1 0 100 2zm0 4h1a1 1 0 100-2h-1a1 1 0 100 2zM7 6h1a1 1 0 000-2H7a1 1 0 000 2zm0 4h1a1 1 0 000-2H7a1 1 0 000 2zm12 8h-1V1a1 1 0 00-1-1H3a1 1 0 00-1 1v17H1a1 1 0 000 2h18a1 1 0 000-2zm-8 0H9v-4h2v4zm5 0h-3v-5a1 1 0 00-1-1H8a1 1 0 00-1 1v5H4V2h12v16z"
                fill={mapRoleToBackgroundColor(role || 'tertiary')}
            />
        </Svg>
    );
};

export default BuildingIcon;
