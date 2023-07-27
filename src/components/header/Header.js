import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppLogo from '../../assets/svg/app-logo.svg'
import SettingsLogo from '../../assets/svg/setting.svg'
import { navigateTo } from '../../helpers/navigationHelper'
import { routeTexts } from '../../constants/routeTexts'

export const Header = () => {

    const handleLogoPress = () => {
        navigateTo(routeTexts.HOME)
    }
    const handleSettingPress = () => {
        navigateTo(routeTexts.SETTINGS)
    }

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={handleLogoPress}
            >
                <AppLogo width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSettingPress}
            >
                <SettingsLogo width={30} height={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 18, paddingLeft: 18
    }
})