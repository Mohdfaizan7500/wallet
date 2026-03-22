import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from 'sonner-native';
import "./global.css";
import AppNavigation from './src/navigation/AppNavigation';
import { AuthProvider } from './src/context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View className="absolute inset-0 z-50 w-90% pointer-events-none">
          <Toaster />
        </View>
        <AppNavigation />
      </SafeAreaProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});