import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ImageTableView} from '../../Modules/Home/Screen/ImageTableView';
import {LoginScreen} from '../../Auth/LoginScreen';
import {ImageEditScreen} from '../../Modules/Home/Screen/ImageEditScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AddImageButton} from '../../Modules/Home/Container/AddImageButton';
import {Home} from '../../Modules/Home/Screen/Home';
import {TaskScreen} from '../../Modules/Home/Screen/Task';
import {CalendarScreen} from '../../Modules/Home/Screen/Calendar';
interface myTabProps {
  selectedBottom: any;
  onPress: () => void;
  navigation: any;
}
const MyTab: FC<myTabProps> = ({selectedBottom, onPresss, navigation}) => {
  const [selectedTab, setSelectedTab] = useState(2);
  console.log('navigation=======>', navigation);

  const bottomData = [
    {
      id: 1,
      title: 'Home',
      iconFill: 'home',
      icon: 'home',
      navigate: 'Home',
    },
    {
      id: 2,
      title: 'Job',
      iconFill: 'creditcard',
      icon: 'creditcard',
      navigate: 'ImageEditScreen',
    },
    {
      id: 3,
      title: 'Calendar',
      iconFill: 'calendar',
      icon: 'calendar',
      navigate: 'CalendarScreen',
    },
    {
      id: 4,
      title: 'Task',
      iconFill: 'book',
      icon: 'book',
      navigate: 'TaskScreen',
    },
  ];
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: 70,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        {bottomData &&
          bottomData.map((el, i) => {
            const isSelectedTab = el.id === selectedTab;
            return (
              <TouchableOpacity
                style={{
                  alignContent: 'space-between',
                  alignItems: 'center',
                  justifyContent: 'center',

                  flex: 1,
                }}
                onPress={() => {
                  navigation.navigate(el.navigate);
                  setSelectedTab(el.id);
                }}>
                <View
                  style={{
                    borderBottomWidth: 2,
                    alignItems: 'center',
                    borderColor: isSelectedTab ? '#21C0F0' : 'white',
                  }}>
                  <AntDesign
                    name={el.icon}
                    size={20}
                    color={isSelectedTab ? '#21C0F0' : '#898989'}
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: isSelectedTab ? '#21C0F0' : '#898989',
                    }}>
                    {el.title}
                  </Text>
                </View>
                {/* <View style={{borderBottomWidth: 1, color: 'black', width: 30}} /> */}
              </TouchableOpacity>
            );
          })}
      </View>
      <AddImageButton />
    </>
  );
};
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'ImageEditScreen'}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTab {...props} />}>
      <Tab.Screen name="ImageEditScreen" component={ImageEditScreen} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CalendarScreen" component={CalendarScreen} />
      <Tab.Screen name="TaskScreen" component={TaskScreen} />
    </Tab.Navigator>
  );
}

export {BottomTabs};
