//@ts-nocheck
import React, {useRef, useState} from 'react';
import {Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  CompleteIllustration,
  OnBoardingMapIllustrations,
  PhoneIllustrationne,
} from '../assets/illustrations/index';
import {
  Button,
  Center,
  Circle,
  Margin,
  Padding,
  Queue,
  Stack,
  Text,
} from '../components';
import {NavigationRoutes} from '../navigation/navigation-param';

export const OnBoarding = ({navigation}) => {
  const [PageIndex, setPageIndex] = useState(0);
  const [listRef, setListRef] = useState<any>(useRef());
  const DisplayWidth = Dimensions.get('screen').width;

  const ViewRef = useRef(pages => {
    if (pages.viewableItems.length > 0) {
      let currentPageIndex = pages.viewableItems[0].index;
      setPageIndex(currentPageIndex);
    }
  });

  const handleButtonClick = () => {
    if (PageIndex === OnboardPages.length - 1) {
      navigation.navigate(NavigationRoutes.MainRoot);
      return;
    }

    listRef?.scrollToIndex({
      animated: true,
      index: PageIndex + 1,
    });
  };

  const ConfigRef = useRef({viewAreaCoveragePercentThreshold: 10});

  const OnboardPages = [
    {
      image: <OnBoardingMapIllustrations width={DisplayWidth} />,
      title: 'Хүргэлттэй',
      description: 'Таньд хурдан шуурхай хүргэж үйлчилнэ',
    },
    {
      image: <CompleteIllustration width={DisplayWidth} />,
      title: 'Баталгаатай бараа',
      description: 'Та хүнсны аюулгүй шаардлага хангасан баталгаатай бараа.',
    },
    {
      image: <PhoneIllustrationne width={DisplayWidth} />,
      title: 'Хялбар хэрэглээ',
      description:
        'Та бүртгүүлэхгүйгээр бараагаа харах боломжтой бөгөөд хамгийн хялбар замаар худалдан авалт хийх болно',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Queue alignItems="center" justifyContent="flex-end">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NavigationRoutes.MainRoot);
          }}>
          <Padding size={[4, 4, 4, 4]}>
            <Text role="success" type="paragraph.main">
              Алгасах
            </Text>
          </Padding>
        </TouchableOpacity>
      </Queue>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={ViewRef.current}
        viewabilityConfig={ConfigRef.current}
        showsHorizontalScrollIndicator={false}
        ref={ref => {
          setListRef(ref);
        }}
        data={OnboardPages}
        pagingEnabled={true}
        bounces={false}
        horizontal
        renderItem={({item}: any) => {
          return (
            <Stack width={DisplayWidth} size={5}>
              <Center>{item.image}</Center>
              <Stack size={1}>
                <Text textAlign="center" type="subheading.bold">
                  {item.title}
                </Text>
                <Padding size={[0, 5, 0, 5]}>
                  <Text
                    textAlign="center"
                    type="paragraph.light"
                    numberOfLines={3}>
                    {item.description}
                  </Text>
                </Padding>
              </Stack>
            </Stack>
          );
        }}
      />
      <Stack role="lightYellow">
        <Queue alignItems="center" justifyContent="center">
          {OnboardPages.map((x, index) => (
            <Margin left={1} right={1} key={index}>
              <Circle
                size={6}
                backgroundRole={index == PageIndex ? 'success' : 'lightGray'}
              />
            </Margin>
          ))}
        </Queue>
        <Padding size={[6, 5, 5, 5]}>
          <Button
            radius="medium"
            backgroundRole="success"
            textRole="light"
            onPress={handleButtonClick}
            textType="subheading.bold">
            Үргэлжүүлэх
          </Button>
        </Padding>
      </Stack>
    </SafeAreaView>
  );
};
