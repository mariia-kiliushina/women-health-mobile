import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ConditionalWrapper} from 'src/helpers/conditionalWrapper';
import {COLORS} from 'constants/colors';

export type AppScreenProps = {
  children: React.ReactNode[] | React.ReactNode;
  viewType?: 'fixed' | 'scroll';
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  edges?: Edge[];
};

export const Container = ({
  children,
  viewType = 'fixed',
  style,
  contentContainerStyle,
  edges = ['top', 'right', 'left'],
}: AppScreenProps) => {
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      <ConditionalWrapper
        condition={viewType === 'scroll'}
        wrapper={(wrapperChildren: React.ReactNode) => (
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={true}
            enableOnAndroid
          >
            <>{wrapperChildren}</>
          </KeyboardAwareScrollView>
        )}
      >
        <View style={[styles.contentContainer, contentContainerStyle]}>
          <>{children}</>
        </View>
      </ConditionalWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.greyscaleWhite,
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});
