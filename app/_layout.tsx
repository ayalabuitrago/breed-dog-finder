import { Navbar } from "@/features/components/navbar";
import { BDF_SCREEN_OPTIONS } from "@/features/constants/bdf-screen-options";
import { BdfStack } from "@/features/layout/bdf-stack";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 300,
  fade: true,
});

const queryClient = new QueryClient();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        const fonts = Font.loadAsync({
          Outfit: require("../assets/fonts/Outfit.ttf"),
        });

        const images = Asset.loadAsync([
          require("../assets/images/background.png"),
        ]);

        // Artificially delay for two seconds
        const fake = new Promise((resolve) => setTimeout(resolve, 2000));

        await Promise.all([fake, fonts, images]);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const router = useRouter();

  const indexHeader = () => <Navbar more moreAction={() => router.push('/about')} />;
  const historyHeader = () => <Navbar more moreAction={() => router.push('/about')} />
  const aboutHeader = () => <Navbar back />

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BdfStack screenOptions={BDF_SCREEN_OPTIONS}>
        <Stack.Screen
          name="index"
          options={{
            header: indexHeader,
          }}
        />
        <Stack.Screen
          name="history"
          options={{
            header: historyHeader,
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            header: aboutHeader,
          }}
        />
      </BdfStack>
      <StatusBar style="light" />
    </QueryClientProvider>
  );
}
