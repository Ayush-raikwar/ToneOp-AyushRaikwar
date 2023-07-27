import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { commonStyles } from '../../constants/commonStyles'

export const ArticleCard = ({ data, title, desc, imgUrl }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.flexHorizontal}>
                <View style={{ flex: 2, marginRight: 12 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{desc}</Text>
                </View>
                <Image
                    style={styles.img}
                    source={{ uri: imgUrl }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        padding: 12
    },
    flexHorizontal: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    title: {
        fontWeight: '700', fontSize: 16, color: 'blue',
    },
    description: {
        fontWeight: '700', fontSize: 16, color: commonStyles.COLOR.BLACK
    },
    img: {
        flex: 1, backgroundColor: 'grey', width: 200, height: "100%",
    }
})