import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RawPlusIconInCircle from './RawPlusIconInCircle';
import { IconType } from './types';

const PlusIconInCircle = (props: IconType) => {
    const { onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <RawPlusIconInCircle {...props} />
        </TouchableOpacity>
    );
};

export default PlusIconInCircle;
