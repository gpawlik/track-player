import type { PropsWithChildren, ReactElement } from "react";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors, gradient } from "@/styles/theme";

import {
  Container,
  Header,
  Content,
  StyledScrollView,
  Title,
  GradientFill,
  ButtonPressable,
} from "./styles";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  headerButtonName?: keyof typeof Ionicons.glyphMap;
  onPressHeaderButton?: () => void;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  headerButtonName,
  onPressHeaderButton,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
          [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
        ),
      },
      {
        scale: interpolate(
          scrollOffset.value,
          [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
          [2, 1, 1]
        ),
      },
    ],
  }));

  return (
    <Container>
      <StyledScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Header
          style={[
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
          <Title>My playlists</Title>
        </Header>
        <Content>{children}</Content>
        {headerButtonName ? (
          <ButtonPressable onPress={onPressHeaderButton}>
            <GradientFill colors={gradient} start={{ x: 0.2, y: 0.1 }}>
              <Ionicons
                name={headerButtonName}
                color={colors.white}
                size={50}
              />
            </GradientFill>
          </ButtonPressable>
        ) : null}
      </StyledScrollView>
    </Container>
  );
}
