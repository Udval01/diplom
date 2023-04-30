import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

type CenterType = {
    children?: any;
    flex?: number;
    width?: number;
    role?: BackgroundRoleType;
};

export const CenterStyle = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export const Center = (props: CenterType) => {
    const { children, flex } = props;
    return <View style={[CenterStyle.container, { flex }]}>{children}</View>;
};
