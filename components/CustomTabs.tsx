import { View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import * as Icons from 'phosphor-react-native'
import Animated, { FadeIn } from 'react-native-reanimated';
export default function CustomTabs({ state, descriptors, navigation }:BottomTabBarProps) {
//   const { colors } = useTheme();
//   const { buildHref } = useLinkBuilder();
    const tabBarIcons:any =  {
        home : (isFocused:boolean)=>(
            <Icons.House 
                size={verticalScale(30)}
                weight={isFocused ? 'fill': 'light'}
                color={isFocused ? colors.primary:colors.neutral400}
            />
        ),
        packs : (isFocused:boolean)=>(
            <Icons.Package 
                size={verticalScale(30)}
                weight={isFocused ? 'fill': 'light'}
                color={isFocused ? colors.primary:colors.neutral400}
            />
        ),
        suppliers : (isFocused:boolean)=>(
            <Icons.Users  
                size={verticalScale(30)}
                weight={isFocused ? 'fill': 'light'}
                color={isFocused ? colors.primary:colors.neutral400}
            />
        ),
        profile : (isFocused:boolean)=>(
            <Icons.UserCircle  
                size={verticalScale(30)}
                weight={isFocused ? 'fill': 'light'}
                color={isFocused ? colors.primary:colors.neutral400}
            />
        ),
    }
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label : any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            // href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            key={route.name}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabBarItem, { flex: 1 }]}
          >
            {
              tabBarIcons[route.name] && tabBarIcons[route.name](isFocused) 
            }
            
            {/* <Text style={{ color: isFocused ? colors.primary : colors.textLight }}>
              { label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// const MyTabs = createBottomTabNavigator({
//   tabBar: (props) => <CustomTabs {...props} />,
//   screens: {
//     // Home: HomeScreen,
//     // Profile: ProfileScreen,
//   },
// });

const styles  = StyleSheet.create({
    tabBar: { 
        flexDirection: 'row',
        width:'100%',
        height: Platform.OS === 'ios' ? verticalScale(75) : verticalScale(55),
        backgroundColor:colors.neutral800,
        justifyContent:'space-around',
        alignItems:'center',
        borderTopColor: colors.neutral700,
        borderTopWidth:1,
        padding:10

    },
    tabBarItem:{
        marginBottom:Platform.OS == 'ios'? spacingY._10 : spacingY._5,
        justifyContent:'center',
        alignItems:'center',
    }

})