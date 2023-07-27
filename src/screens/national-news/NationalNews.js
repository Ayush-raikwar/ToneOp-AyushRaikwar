import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArticleCard } from '../../components/article-card/ArticleCard'
import { fetchNationalNews } from '../../api/newsApi'


export const NationalNews = () => {


    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        fetchBreakingNewsData()
    }, [])

    const fetchBreakingNewsData = async () => {
        const breakingNewsData = await fetchNationalNews()
        setNewsData(breakingNewsData)
    }



    return (
        <View>
            <Text style={{ color: 'black' }}>National News</Text>

            <FlatList
                data={newsData}
                renderItem={({ item }) => <ArticleCard data={item} title={item?.title} desc={item?.description} imgUrl={item?.urlToImage} />}
            />

        </View>
    )
}


const styles = StyleSheet.create({})