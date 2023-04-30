import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const LeftArrowIcon = (props: IconType) => {
    const { width, height, role } = props;
    return (
        <Svg
            width={width || 37}
            height={height || 35}
            viewBox="0 0 37 35"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.163 10.163c.107.102.193.222.25.355a1.042 1.042 0 010 .839 1.092 1.092 0 01-.25.355L12.04 17.5l6.122 5.788c.107.102.192.223.25.355a1.046 1.046 0 01-.25 1.194 1.165 1.165 0 01-.376.237 1.216 1.216 0 01-1.262-.237l-6.937-6.563a1.092 1.092 0 01-.252-.355 1.043 1.043 0 010-.838c.059-.133.144-.254.252-.355l6.937-6.563c.108-.102.235-.183.376-.238a1.214 1.214 0 011.262.238z"
                fill={mapRoleToTextColor(role) || '#000'}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.406 17.5c0-.29.122-.568.339-.773.217-.206.51-.32.818-.32h15.03c.307 0 .602.114.818.32.217.205.339.483.339.773 0 .29-.122.568-.339.773a1.19 1.19 0 01-.817.32H11.562c-.306 0-.6-.114-.817-.32a1.065 1.065 0 01-.339-.773z"
                fill={mapRoleToTextColor(role) || '#000'}
            />
        </Svg>
    );
};

export default LeftArrowIcon;
