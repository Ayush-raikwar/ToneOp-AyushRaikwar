import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import Carousel from 'react-native-snap-carousel';
import { commonStyles } from '../../constants/commonStyles';
import { fetchYouTubeNewsVideos } from '../../api/youtubeApi';
import YoutubePlayer from "react-native-youtube-iframe";

export const VideoTab = React.memo(() => {


    const [videosData, setVideosData] = useState([])
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    useEffect(() => {
        fetchVideosData()
    }, [])

    const fetchVideosData = async () => {
        const youtubeVideosData = await fetchYouTubeNewsVideos()
        setVideosData(youtubeVideosData)
    }

    const renderItem = ({ item }) => {

        const handlePress = () => {
            setPaused(prev => !prev)
        }


        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,.5)', width: '100%', flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: commonStyles.COLOR.WHITE, margin: 12 }} >{item?.snippet?.description}</Text>
                <Pressable onPress={handlePress}>

                    <YoutubePlayer
                        height={300}
                        play={playing}
                        videoId={item?.id?.videoId}
                        onChangeState={onStateChange}
                    />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                data={videosData}
                renderItem={renderItem}
                sliderHeight={commonStyles.device.height}
                itemHeight={commonStyles.device.height}
                layout="default"
                vertical={true}
            // autoplay
            // loop
            // autoplayInterval={7000}
            />
        </View>
    )
})


const styles = StyleSheet.create({})