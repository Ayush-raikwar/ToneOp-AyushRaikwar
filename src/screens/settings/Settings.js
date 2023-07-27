import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenTexts } from '../../constants/screenTexts'
import { commonStyles } from '../../constants/commonStyles'

export const Settings = () => {


    const handleList = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => handleItemPress(item)}
                >
                    <View>
                        {item.icon}
                    </View>
                    <Text style={styles.listItemTitle}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
                {item?.id != screenTexts.SETTINGS_LIST?.LIST_DATA?.length ?
                    <View style={styles.separator} />
                    : null
                }
            </>

        )
    }


    return (
        <View>

            <View style={styles.listContainer}>
                <FlatList
                    data={screenTexts.SETTINGS_LIST.LIST_DATA}
                    renderItem={item => handleList(item)}
                    style={{ paddingVertical: 12 }}
                />
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row', alignItems: 'center',
    },
    separator: {
        width: '100%', height: 1, backgroundColor: 'rgba(0,0,0,.1)', marginVertical: 18
    },
    listItemTitle: {
        color: commonStyles.COLOR.BLACK, fontSize: 16, marginLeft: 18, minHeight: 20
    },
    listContainer: {
        backgroundColor: commonStyles.COLOR.WHITE, padding: 18, paddingBottom: 21, marginTop: 40, borderRadius: 22, marginHorizontal: 20
    }
})