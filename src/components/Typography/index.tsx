import {ReactNode} from 'react';
import {
  Text,
  TextProps,
  StyleProp,
  TextStyle,
  StyleSheet,
  ColorValue,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from 'constants/colors';

type TFontVariant = '14' | '16' | '18' | '24' | '36' | '40';

const fontVariants: {[k in TFontVariant]: StyleProp<TextStyle>} =
  StyleSheet.create({
    /*eslint-disable react-native/no-unused-styles */
    14: {
      fontSize: 14,
      lineHeight: 18,
    },
    16: {
      fontSize: 16,
      lineHeight: 20,
    },
    18: {
      fontSize: 18,
      lineHeight: 22,
    },
    24: {
      fontSize: 24,
      lineHeight: 32,
    },
    36: {
      fontSize: 36,
      lineHeight: 40,
    },
    40: {
      fontSize: 40,
      lineHeight: 44,
    },
    /*eslint-enable react-native/no-unused-styles */
  });

type Props = TextProps & {
  children: ReactNode;
  variant?: TFontVariant;
  color?: ColorValue;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

export const Typography = ({
  children,
  variant = '14',
  color = COLORS.colorGreyscaleContent,
  textStyle,
  style,
  ...restProps
}: Props) => {
  const fontVariant = fontVariants[variant];

  return (
    <View style={style}>
      <Text style={[fontVariant, {color}, textStyle]} {...restProps}>
        {children}
      </Text>
    </View>
  );
};