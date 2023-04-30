import React from 'react';
import { View } from 'react-native';
import { mapRoleToBackgroundColor } from '../core';
import '../types';
import { Spacer } from './spacer';

export const Stack = ({
    size = 0,
    children,
    role,
    height,
    width,
    maxWidth,
    zIndex,
    justifyContent,
    alignItems,
}: StackType) => {
    return (
        <View
            style={{
                flexDirection: 'column',
                backgroundColor: mapRoleToBackgroundColor(role),
                height,
                width,
                maxWidth,
                zIndex,
                justifyContent,
                alignItems
            }}
        >
            {React.Children.toArray(children).map((child, index) => {
                if (index == 0) {
                    return <View key={index}>{child}</View>;
                }
                return (
                    <View key={index}>
                        <Spacer horizontal={true} size={size} />
                        {child}
                    </View>
                );
            })}
        </View>
    );
};
