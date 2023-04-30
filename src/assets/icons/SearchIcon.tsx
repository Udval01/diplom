import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapRoleToTextColor } from '../../components';
import { IconType } from './types';

const SearchIcon = (props: IconType) => {
    const { height, width, role } = props;
    return (
        <Svg
            width={width || 15}
            height={height || 14}
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <Path
                d="M13.158 12.352l-4.07-4.058c.631-.814.973-1.81.973-2.857 0-1.253-.49-2.428-1.378-3.314A4.674 4.674 0 005.36.75a4.68 4.68 0 00-3.324 1.373A4.643 4.643 0 00.657 5.437c0 1.252.49 2.43 1.378 3.315a4.672 4.672 0 003.324 1.373c1.05 0 2.047-.34 2.864-.969l4.07 4.056a.13.13 0 00.182 0l.683-.68a.127.127 0 00.028-.139.128.128 0 00-.028-.041zm-5.316-4.44a3.497 3.497 0 01-2.483 1.026 3.497 3.497 0 01-2.482-1.026 3.476 3.476 0 01-1.029-2.474c0-.935.366-1.815 1.029-2.475a3.497 3.497 0 012.482-1.026c.937 0 1.82.363 2.483 1.025A3.476 3.476 0 018.87 5.438c0 .935-.365 1.815-1.028 2.475z"
                fill={mapRoleToTextColor(role) || '#000'}
            />
        </Svg>
    );
};

export default SearchIcon;
