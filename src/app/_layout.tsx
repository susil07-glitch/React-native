import { Stack, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen"
import {SpaceGrotesk_300Light,
SpaceGrotesk_400Regular,
SpaceGrotesk_500Medium,
SpaceGrotesk_600SemiBold,
SpaceGrotesk_700Bold
} from "@expo-google-fonts/space-grotesk"

import { useState, useEffect } from "react";



SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();


  const [isReady, setIsReady ] = useState(false);
  
  useEffect(() => {
    async function doAsyncStuff() {
      try {
        // do something async here
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    doAsyncStuff();

    if (isReady) {
      SplashScreen.hide();
      router.navigate("/");
    }
  }, [isReady]);
  
  if (!isReady) {
    return null
  }

  

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  )

}
