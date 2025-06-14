import { StackNavigationOptions } from "@react-navigation/stack";
import { Animated, Easing } from "react-native";

const SPRING_ANIMATION: Omit<
  Animated.SpringAnimationConfig,
  "toValue" | keyof Animated.AnimationConfig
> = {
  stiffness: 320,
  damping: 40,
  mass: 1.6,
};
const INITIAL_TRANSLATE_X_MULTIPLIER = 1;
const NEXT_TRANSLATE_X_MULTIPLIER = -0.3;
const OVERLAY_OPACITY_MAX = 0.5;
const NEXT_SCREEN_OPACITY_MIN = 0.8;
const customEasing = Easing.bezier(0.5, 0.1, 0.5, 1.0);

export const BDF_SCREEN_OPTIONS: StackNavigationOptions = {
  cardOverlayEnabled: true,
  gestureEnabled: false,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    // Calculate translateX for the current screen
    const translateX = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [INITIAL_TRANSLATE_X_MULTIPLIER * layouts.screen.width, 0],
      extrapolate: "clamp",
    });

    // Calculate translateX for the next screen (if exists)
    const nextTranslateX = next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, NEXT_TRANSLATE_X_MULTIPLIER * layouts.screen.width],
          extrapolate: "clamp",
        })
      : 0;
    // Calculate overlay opacity
    const overlayOpacity = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, OVERLAY_OPACITY_MAX],
      extrapolate: "clamp",
    });

    // Calculate opacity for the next screen
    const nextScreenOpacity = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [NEXT_SCREEN_OPACITY_MIN, 1],
      extrapolate: "clamp",
    });

    // Combine all animations
    const transform = [
      { translateX },
      { translateX: nextTranslateX },
      { perspective: 1000 },
    //   { rotateY: rotate },
    //   { scale },
    ];

    return {
      cardStyle: {
        transform,
        opacity: nextScreenOpacity,
        transitionTimingFunction: customEasing,
      },
      overlayStyle: { opacity: overlayOpacity },
    };
  },
  transitionSpec: {
    open: {
      animation: "spring",
      config: SPRING_ANIMATION,
    },
    close: {
      animation: "spring",
      config: SPRING_ANIMATION,
    },
  },
};
