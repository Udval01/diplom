import * as React from 'react';
import Svg, { Path, ForeignObject } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { TickIcon } from '../icons';
import { IconType } from './types';

const SelectionIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg height={height || 75} width={width || 150}>
            <Path fill={mapRoleToBackgroundColor(role)} d="M200 0v100L100 0z" />
            <ForeignObject x={127} y={10} width={100} height={100}>
                <TickIcon />
            </ForeignObject>
        </Svg>
    );
};

export default SelectionIcon;
