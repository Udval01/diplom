import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../core';

export const Grid = ({
    children,
    columns = 1,
}: {
    children: any;
    columns?: number | number[];
}) => {
    const array = React.Children.toArray(children);
    const count = React.Children.count(children);
    if (_.isArray(columns)) {
        const columnsSize = _.size(columns);
        const rowCounts = _.ceil(count / columnsSize);

        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}
                >
                    {_.times(rowCounts, (index) => {
                        return (
                            <View
                                style={{ flexDirection: 'row' }}
                                key={`grid-1-element-${index}`}
                            >
                                {_.times(columnsSize, (itemIndex) => {
                                    const flexSize = _.get(columns, itemIndex);
                                    return (
                                        <View
                                            style={{ flex: flexSize || 1 }}
                                            key={`grid-2-element-${itemIndex}`}
                                        >
                                            {_.get(
                                                array,
                                                index * columnsSize + itemIndex
                                            )}
                                        </View>
                                    );
                                })}
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }

    if (_.isNumber(columns)) {
        const rowCounts = _.ceil(count / columns);

        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}
                >
                    {_.times(rowCounts, (index) => {
                        return (
                            <View
                                style={{ flexDirection: 'row' }}
                                key={`grid-1-element-${index}`}
                            >
                                {_.times(columns, (itemIndex) => {
                                    return (
                                        <View
                                            style={{ flex: 1 }}
                                            key={`grid-2-element-${itemIndex}`}
                                        >
                                            {_.get(
                                                array,
                                                index * columns + itemIndex
                                            )}
                                        </View>
                                    );
                                })}
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }

    return (
        <View>
            <Text>Not Supported</Text>
        </View>
    );
};
