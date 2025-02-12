import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from "react-native-track-player";

import { store } from "@/state";
import { ErrorToast } from "@/components/error-toast";
import { StyleProvider } from "@/styles/provider";

import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

TrackPlayer.registerPlaybackService(() => require("../service"));

const setupTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();

    TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
    });
  } catch (error) {
    console.error("Error setting up TrackPlayer:", error);
  }
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    setupTrackPlayer();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StyleProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{
                headerShown: false,
                animation: "default",
                presentation: "modal",
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
          <ErrorToast />
        </StyleProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
