import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { routeTexts } from "../constants/routeTexts"
import { Home } from "../screens/home/Home"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { InternationalNews } from "../screens/international-news/InternationalNews"
import { NationalNews } from "../screens/national-news/NationalNews"
import { Search } from "../screens/search/Search"
import { VideoTab } from "../screens/video-tab/VideoTab"
import { navigationRef } from "../helpers/navigationHelper"
import { Settings } from "../screens/settings/Settings"
import HomeIcon from '../assets/svg/tabs/home-page.svg'
import SearchIcon from '../assets/svg/tabs/search.svg'
import VideoIcon from '../assets/svg/tabs/video.svg'

export const MainNavigation = () => {

    const Stack = createStackNavigator()
    const BottomTabs = createBottomTabNavigator()
    const TopTabs = createMaterialTopTabNavigator()

    const RenderBottomTabs = () => {
        return (
            <BottomTabs.Navigator
                initialRouteName={routeTexts.HOME}>
                <BottomTabs.Screen
                    name={routeTexts.HOME}
                    component={RenderTopTabs}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return <HomeIcon width={18} height={18} />
                        }
                    }}
                />
                {/* <BottomTabs.Screen
                    name={routeTexts.HOME}
                    component={Home}
                /> */}
                <BottomTabs.Screen
                    name={routeTexts.SEARCH}
                    component={Search}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return <SearchIcon width={18} height={18} />
                        }
                    }}
                />
                <BottomTabs.Screen
                    name={routeTexts.VIDEO}
                    component={VideoTab}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return <VideoIcon width={18} height={18} />
                        }
                    }}
                />
            </BottomTabs.Navigator>
        )
    }

    const RenderTopTabs = () => {
        return (
            <TopTabs.Navigator
                initialRouteName={routeTexts.TOP_TAB_ITEMS.BREAKING_NEWS}
            >
                <TopTabs.Screen
                    name={routeTexts.TOP_TAB_ITEMS.BREAKING_NEWS}
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <TopTabs.Screen
                    name={routeTexts.TOP_TAB_ITEMS.NATIONAL_NEWS}
                    component={NationalNews}
                    options={{
                        headerShown: false
                    }}
                />
                <TopTabs.Screen
                    name={routeTexts.TOP_TAB_ITEMS.INTERNATIONAL_NEWS}
                    component={InternationalNews}
                    options={{
                        headerShown: false
                    }}
                />
            </TopTabs.Navigator>
        )
    }

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    name={routeTexts.BOTTOM_TABS}
                    component={RenderBottomTabs}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={routeTexts.SETTINGS}
                    component={Settings}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}