import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/Home';
import { Help } from '../pages/Help';
import { Prevent } from '../pages/Prevent';

import { StateList } from '../pages/StateList';
import { CountriesList } from '../pages/CountriesList';
import { SelfCheckUp } from '../pages/SelfCheckUp';

const { Navigator, Screen } = createBottomTabNavigator();

const { Navigator: StackNavigator, Screen: StackScreen } =
  createStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 10 : 0,
          height: 50,
        },
      }}
    >
      <Screen
        name="Casos Covid-19"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="bar-chart" />
          ),
        }}
      />
      <Screen
        name="Como se prevenir"
        component={Prevent}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="healing" />
          ),
        }}
      />
      <Screen
        name="Como ajudar"
        component={Help}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="local-hospital" />
          ),
        }}
      />
    </Navigator>
  );
}

function StackRoutes() {
  return (
    <StackNavigator screenOptions={{ headerShown: false }}>
      <StackScreen name="currentSituation" component={Home} />
      <StackScreen name="casesByStates" component={StateList} />
      <StackScreen name="casesByCountry" component={CountriesList} />
      <StackScreen name="selfCheckUp" component={SelfCheckUp} />
    </StackNavigator>
  );
}
