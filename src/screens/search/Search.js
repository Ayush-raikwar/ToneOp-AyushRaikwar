import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState, useMemo } from 'react'
import { ArticleCard } from '../../components/article-card/ArticleCard'
import { fetchBreakingNews, searchNews } from '../../api/newsApi'
import { commonStyles } from '../../constants/commonStyles'


export const Search = () => {


    const [newsData, setNewsData] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const fetchNewsData = async () => {

        const breakingNewsData = await searchNews(searchInput)
        setNewsData(breakingNewsData)
    }
    useMemo(() => {
        fetchNewsData()
    }, [searchInput])



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
        <View style={styles.mainContainer}>
            <TextInput
                style={styles.input}
                placeholder='Search News!'
                placeholderTextColor={'rgba(0,0,0,.35)'}
                value={searchInput}
                onChangeText={val => setSearchInput(val)}
            />

            <FlatList
                data={newsData}
                renderItem={({ item }) => <ArticleCard data={item} title={item?.title} desc={item?.description} imgUrl={item?.urlToImage} />}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    input: {
        color: commonStyles.COLOR.BLACK, borderWidth: 1, margin: 12, marginBottom: 0, borderRadius: 4, padding: 8, marginTop: 20, marginBottom: 30
    }
})