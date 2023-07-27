import { Dimensions } from 'react-native'

export const commonStyles = {
    COLOR: {
        WHITE: "#fff",
        BLACK: "#000"
    },
    device: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    }
}