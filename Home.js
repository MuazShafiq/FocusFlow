import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '../constants/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.gray, COLORS.gray]}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 36, fontWeight: '800', color: COLORS.blue }}>
          Welcome to FocusFlow
        </Text>
      </View>
    </LinearGradient>
  );
};

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.openDrawer()}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              marginLeft: 16,
            })}
          >
            <Ionicons name="md-menu" size={24} color={COLORS.blue} />
          </Pressable>
        ),
        headerTitle: '',
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Home;
