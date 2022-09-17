import { useRef, useEffect } from 'react';
import { Background } from './src/components/Background';
import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import './src/service/notificationConfig';
import { getPushNotificationToken } from './src/service/getPushNotificationToken';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  
  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()

  // precisa executar o comando 'expo login' no terminal para não erro na hora de buscar o token
  useEffect(() => {
    getPushNotificationToken();
  })

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification)
    })

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  },[])

  return (
    <Background>
      <StatusBar 
         barStyle="light-content"
         backgroundColor="transparent"
         translucent
      />

      { fontsLoaded ? <Routes /> : <Loading />}

    </Background>
  );
}


