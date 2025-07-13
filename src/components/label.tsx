import { Colors, FontFamily, FontSize, FontWidth } from "@/constants/tokens";
import { ReactNode } from "react";
import { Text, type TextStyle } from "react-native";

interface LabelProps {
  size?: keyof typeof FontSize;
  color?: keyof typeof Colors.text;
  weidth?: keyof typeof FontWidth;
  style?: TextStyle,
  children: string | ReactNode;
}

export function Label(props: Readonly<LabelProps>) {
  const { children, color = 'base', size = 'm', weidth = 'regular', style } = props;
  return (
    <Text
      style={{
        ...style,
        color: Colors.text[color],
        fontSize: FontSize[size],
        fontFamily: FontFamily.outfit,
        fontWeight: FontWidth[weidth]
      }}
    >
      {children}
    </Text>
  );
}
