import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const AddButtonIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 75}
            height={height || 28}
            viewBox="0 0 75 28"
            fill="none"
            {...props}
        >
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5 1.9999H61.4995C68.4121 1.9999 73.9996 7.58733 73.9996 14.4998C73.9996 21.4123 68.4121 27 61.4995 27H14.5C7.5873 27 1.99988 21.4123 1.99988 14.4998C1.99988 7.58733 7.5873 1.9999 14.5 1.9999Z"
                fill={mapRoleToTextColor(role) || '#5EB14E'}
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5 1.9999C21.4121 1.9999 26.9995 7.58733 26.9995 14.4998C26.9995 21.4123 21.4121 27 14.5 27C7.58733 27 1.9999 21.4123 1.9999 14.4998C1.9999 7.58733 7.58733 1.9999 14.5 1.9999Z"
                fill="#50A141"
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99992 13.9998H19V16H9.99992V13.9998Z"
                fill={mapRoleToTextColor(role) || 'white'}
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.4995 1.9999C68.4122 1.9999 73.9996 7.58733 73.9996 14.4998C73.9996 21.4123 68.4122 27 61.4995 27C54.5874 27 49 21.4123 49 14.4998C49 7.58733 54.5874 1.9999 61.4995 1.9999Z"
                fill={mapRoleToTextColor(role) || '#50A141'}
            />
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60.6005 19.0005V15.4006H56.999V13.6009H60.6005V10.0008H62.4005V13.6009H66.0005V15.4006H62.4005V19.0005H60.6005Z"
                fill={mapRoleToTextColor(role) || 'white'}
            />
        </Svg>
    );
};

export default AddButtonIcon;
