import { StackNavigationOptions } from "@react-navigation/stack";
import { Animated } from "react-native";

const SPRING_ANIMATION: Omit<Animated.SpringAnimationConfig, "toValue" | keyof Animated.AnimationConfig> = {
    stiffness: 320,
    damping: 40,
    mass: 1
}
const INITIAL_TRANSLATE_X_MULTIPLIER = 1;
const NEXT_TRANSLATE_X_MULTIPLIER = -0.3;

export const BDF_SCREEN_OPTIONS: StackNavigationOptions = {
    cardOverlayEnabled: true,
    gestureEnabled: false,
    cardStyleInterpolator: ({ current, next, layouts }) => {

        // Calculate translateX for the current screen
        const translateX = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [
                INITIAL_TRANSLATE_X_MULTIPLIER * layouts.screen.width,
                0,
            ],
            extrapolate: "clamp",
        });

        // Calculate translateX for the next screen (if exists)
        const nextTranslateX = next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [
                    0,
                    NEXT_TRANSLATE_X_MULTIPLIER * layouts.screen.width,
                ],
                extrapolate: "clamp",
            })
            : 0;

        const transform = [
            { translateX },
            { translateX: nextTranslateX },
        ];

        return {
            cardStyle: { transform },
        };
    },
    transitionSpec: {
        open: {
            animation: "spring",
            config: SPRING_ANIMATION
        },
        close: {
            animation: "spring",
            config: SPRING_ANIMATION
        },
    },
}