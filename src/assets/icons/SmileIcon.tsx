import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToBackgroundColor } from '../../components';
import { IconType } from './types';

const SmileIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 19"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 7.537c.016.677-.361 1.308-.986 1.651-.625.343-1.4.343-2.026 0-.625-.342-1.003-.973-.987-1.65.024-1.013.912-1.824 1.999-1.824 1.087 0 1.975.81 2 1.823zm-1.109 3.877c-1.014 4.781-8.768 4.781-9.782 0-.119-.563.383-1.078.999-1.078.48 0 .872.324.984.76.695 2.718 5.121 2.718 5.816 0a1.01 1.01 0 01.984-.76c.616 0 1.118.515.999 1.078zM6 9.404c-.725.014-1.402-.338-1.77-.92a1.758 1.758 0 010-1.89c.367-.584 1.044-.936 1.769-.921 1.087.022 1.956.85 1.956 1.864 0 1.015-.868 1.843-1.955 1.866zm4 7.462c-4.411 0-8-3.348-8-7.463s3.589-7.462 8-7.462 8 3.347 8 7.462-3.589 7.463-8 7.463zM10 .075C4.477.075 0 4.251 0 9.403c0 5.152 4.477 9.328 10 9.328s10-4.176 10-9.328C20 4.251 15.523.075 10 .075z"
                fill={mapRoleToBackgroundColor(role || 'tertiary')}
                fillOpacity={1}
            />
        </Svg>
    );
};

export default SmileIcon;
