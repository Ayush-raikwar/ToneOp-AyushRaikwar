import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArticleCard } from '../../components/article-card/ArticleCard'
import { fetchBreakingNews } from '../../api/newsApi'
import { commonStyles } from '../../constants/commonStyles'


export const Home = () => {


    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        fetchBreakingNewsData()
    }, [])

    const fetchBreakingNewsData = async () => {
        const breakingNewsData = await fetchBreakingNews()
        setNewsData(breakingNewsData)
    }

    const data = [
        {
            id: 1,
            title: "Test title is written here!",
            desc: "This is the descrption, his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption",
            img: "https://media.wired.com/photos/64b1aeff2cc57777ec67f264/191:100/w_1280,c_limit/071123-business-india-instagram-aurangzeb-arrest.jpg"
        },
        {
            id: 2,
            title: "Test title is written here!",
            desc: "This is the descrption, his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption",
            img: "https://media.wired.com/photos/64b1aeff2cc57777ec67f264/191:100/w_1280,c_limit/071123-business-india-instagram-aurangzeb-arrest.jpg"
        },
        {
            id: 3,
            title: "Test title is written here!",
            desc: "This is the descrption, his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption",
            img: "https://media.wired.com/photos/64b1aeff2cc57777ec67f264/191:100/w_1280,c_limit/071123-business-india-instagram-aurangzeb-arrest.jpg"
        },
        {
            id: 4,
            title: "Test title is written here!",
            desc: "This is the descrption, his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption",
            img: "https://media.wired.com/photos/64b1aeff2cc57777ec67f264/191:100/w_1280,c_limit/071123-business-india-instagram-aurangzeb-arrest.jpg"
        },
        {
            id: 5,
            title: "Test title is written here!",
            desc: "This is the descrption, his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption",
            img: "https://media.wired.com/photos/64b1aeff2cc57777ec67f264/191:100/w_1280,c_limit/071123-business-india-instagram-aurangzeb-arrest.jpg"
        },
        {
            id: 6,
            title: "Test title is written here!",
            desc: "This is the descrption, his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption",
            img: "https://media.wired.com/photos/64b1aeff2cc57777ec67f264/191:100/w_1280,c_limit/071123-business-india-instagram-aurangzeb-arrest.jpg"
        },
        {
            id: 7,
            title: "Test title is written here!",
            desc: "This is the descrption, his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption his is the descrption",
            img: "https://media.wired.com/photos/64b1aeff2cc57777ec67f264/191:100/w_1280,c_limit/071123-business-india-instagram-aurangzeb-arrest.jpg"
        }

    ]

    return (
        <View>

            <FlatList
                data={newsData}
                renderItem={({ item }) => <ArticleCard data={item} title={item?.title} desc={item?.description} imgUrl={item?.urlToImage} />}
                keyExtractor={({ item }) => item?.url}
            />

        </View>
    )
}


const styles = StyleSheet.create({})