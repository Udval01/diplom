import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import './types';
import { IconType } from './types';

const TrashCanIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M6.875 6.875A.625.625 0 017.5 7.5V15a.625.625 0 11-1.25 0V7.5a.625.625 0 01.625-.625zm3.125 0a.625.625 0 01.625.625V15a.624.624 0 11-1.25 0V7.5A.625.625 0 0110 6.875zm3.75.625a.625.625 0 10-1.25 0V15a.624.624 0 101.25 0V7.5z"
                fill={mapRoleToTextColor(role) || '#535353'}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.125 3.75A1.25 1.25 0 0116.875 5h-.625v11.25a2.5 2.5 0 01-2.5 2.5h-7.5a2.5 2.5 0 01-2.5-2.5V5h-.625a1.25 1.25 0 01-1.25-1.25V2.5a1.25 1.25 0 011.25-1.25H7.5A1.25 1.25 0 018.75 0h2.5a1.25 1.25 0 011.25 1.25h4.375a1.25 1.25 0 011.25 1.25v1.25zM5.148 5L5 5.074V16.25a1.25 1.25 0 001.25 1.25h7.5A1.25 1.25 0 0015 16.25V5.074L14.852 5H5.148zM3.125 3.75V2.5h13.75v1.25H3.125z"
                fill={mapRoleToTextColor(role) || '#535353'}
            />
        </Svg>
    );
};

export default TrashCanIcon;
