import { Colors, FontFamily, FontSize, FontWeight } from '@/constants/tokens';
import { ReactNode } from 'react';
import { Text, type TextStyle } from 'react-native';

interface LabelProps {
  size?: keyof typeof FontSize;
  color?: keyof typeof Colors.text;
  weight?: keyof typeof FontWeight;
  style?: TextStyle;
  children: string | ReactNode;
}

export function Label(props: Readonly<LabelProps>) {
  const { children, color = 'base', size = 'm', weight = 'regular', style } = props;
  return (
    <Text
      style={[
        style,
        {
          color: Colors.text[color],
          fontSize: FontSize[size],
          fontFamily: FontFamily.outfit,
          fontWeight: FontWeight[weight],
        },
      ]}
    >
      {children}
    </Text>
  );
}
