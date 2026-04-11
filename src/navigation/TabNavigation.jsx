import { StyleSheet, Text, Alert, Pressable, View, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/AppScreens/Home/Home';
import Profile from '../screens/AppScreens/Profile/Profile';
import History from '../screens/AppScreens/History/History';
import { HomeIcon, ProfileIcon, } from '../assets/svgIcons/SVGIcons';
import { Colors } from '../constants/Color';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner-native';
import StatusMessage from '../comonents/StatusMessage';
import { Clock } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

// Custom tab bar button that checks online status before navigating
const CustomTabBarButton = ({ children, onPress, isOnline, style, ...props }) => {
  const handlePress = () => {
    if (!isOnline) {
      toast.custom(<StatusMessage type='error' title={'You are offline, Connect to service center.'}/>,{duration:1000})
      return;
    }
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        style,
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      {...props}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </View>
    </Pressable>
  );
};

const TabNavigation = () => {
  const { IsOnline } = useAuth();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      }
    );

    // Cleanup listeners on unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.brand.primary,
        tabBarInactiveTintColor: Colors.gray[800],
        tabBarStyle: {
          backgroundColor: Colors.background.primary,
          borderTopWidth: 1,
          borderTopColor: Colors.ui.border,
          paddingBottom: 5,
          paddingTop: 5,
          height: 70,
          // Hide tab bar when keyboard is visible
          display: isKeyboardVisible ? 'none' : 'flex',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        headerStyle: {
          backgroundColor: Colors.brand.primary,
        },
        headerTintColor: Colors.text.inverse,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          color: Colors.text.inverse,
        },
        // Custom button for each tab
        tabBarButton: (props) => (
          <CustomTabBarButton {...props} isOnline={IsOnline} />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <HomeIcon
              color={focused ? Colors.brand.primary : Colors.gray[600]}
              size={size}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{
              color: focused ? Colors.brand.primary : Colors.gray[600],
              fontSize: 12,
              fontWeight: focused ? '600' : '500'
            }}>
              Home
            </Text>
          ),
          headerTitle: 'Home',
        }}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Clock
              color={focused ? Colors.brand.primary : Colors.gray[600]}
              size={size}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{
              color: focused ? Colors.brand.primary : Colors.gray[600],
              fontSize: 12,
              fontWeight: focused ? '600' : '500'
            }}>
              History
            </Text>
          ),
          headerTitle: 'History',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ProfileIcon
              stroke={focused ? Colors.brand.primary : Colors.gray[600]}
              size={size}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{
              color: focused ? Colors.brand.primary : Colors.gray[600],
              fontSize: 12,
              fontWeight: focused ? '600' : '500'
            }}>
              Profile
            </Text>
          ),
          headerTitle: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});