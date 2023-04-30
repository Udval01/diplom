import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Center, Circle, Margin, RemoteImage, Stack, Text} from '../components';
import {useFirestoreCollection} from '../firebase';
import {NavigationRoutes} from '../navigation/navigation-param';

const RenderCategories = ({item, type}) => {
  const {url, name, image} = item;
  const navigation = useNavigation();
  const analyticNavigate = () => {
    navigation.navigate(NavigationRoutes.CategoryDetailsScreen, {
      category: item,
    });
  };
  return (
    <TouchableOpacity onPress={analyticNavigate}>
      <Margin size={[0, 0, 0, 0]}>
        <Stack size={4}>
          <Center>
            <Circle size={65}>
              <RemoteImage
                aspectRatio={1}
                url={image || 'http://placeimg.com/640/360/any'}
              />
            </Circle>
          </Center>
          <View style={{width: 85}}>
            <Text type="caption1.medium" numberOfLines={2} textAlign="center">
              {name}
            </Text>
          </View>
        </Stack>
      </Margin>
    </TouchableOpacity>
  );
};
export const Categories = (props: {type?: string}) => {
  const {type} = props;
  let {data} = useFirestoreCollection(['catalog']);

  return (
    <Stack size={5}>
      <FlatList
        style={{
          overflow: 'visible',
        }}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Margin size={[0, 0, 0, 0]} />}
        renderItem={({item}) => <RenderCategories item={item} type={type} />}
        keyExtractor={(item, index) => index + item}
      />
    </Stack>
  );
};
