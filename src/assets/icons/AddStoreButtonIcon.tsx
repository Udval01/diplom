import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddStoreButtonIcon = () => {
    return (
        <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
            <Path
                d="M10 20.5c-5.523 0-10-4.477-10-10S4.477.5 10 .5s10 4.477 10 10-4.477 10-10 10zm-1-11H5v2h4v4h2v-4h4v-2h-4v-4H9v4z"
                fill="#000"
            />
        </Svg>
    );
};

export default AddStoreButtonIcon;
