import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// Importando as telas que criamos
import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Esconde o cabeçalho padrão
          tabBarActiveTintColor: '#4318FF', // Cor do ícone ativo
          tabBarInactiveTintColor: '#A3AED0', // Cor do ícone inativo
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
            borderTopWidth: 0,
            elevation: 10, // Sombra no Android
          }
        }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
              // Usando texto como ícone para não precisar instalar bibliotecas de ícones agora
              <TabBarIcon text="🏠" color={color} size={size} />
            ),
          }}
        />
        
        <Tab.Screen 
          name="Historico" 
          component={HistoryScreen} 
          options={{
            tabBarLabel: 'Histórico',
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon text="📜" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Componente simples para ícone (pode substituir por Feather/Ionicons depois)
const TabBarIcon = ({ text, color, size }) => (
  <item style={{ color: color, fontSize: size }}>{text}</item>
);