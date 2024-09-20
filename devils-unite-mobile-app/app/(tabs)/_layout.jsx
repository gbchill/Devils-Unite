import { View, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const TabIcon = ({ icon, color }) => {
  return (
    <View className="flex items-center justify-center gap-2 mt-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#f7b70a',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#66001a',
          borderTopWidth: 1,
          borderTopColor: '#66001a',
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="home" size={30} color="gold" />
          ),
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="silverware-fork" size={33} color="gold" style={{ transform: [{ rotate: '315deg' }] }} />

          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="add-circle-sharp" size={33} color="gold" />
          ),
        }}
      />
       <Tabs.Screen
        name="calendar"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="calendar" size={28} color="gold" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <EvilIcons name="user" size={45} color="gold" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
