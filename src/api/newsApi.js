import { API_BASE_URL, API_KEY } from '@env'
import axios from 'axios';

export const fetchBreakingNews = async () => {

    const url = `${API_BASE_URL}everything?q=breaking%20news&apiKey=${API_KEY}`;
    // https://newsapi.org/v2/everything?q=breaking%20news&apiKey=${apiKey}

    try {
        const response = await axios.get(url);
        return response.data.articles;

    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}

export const fetchInternationalNews = async () => {

    const url = `${API_BASE_URL}top-headlines?country=us&apiKey=${API_KEY}`;

    try {
        const response = await axios.get(url);
        return response.data.articles;

    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}

export const fetchNationalNews = async () => {

    const url = `${API_BASE_URL}top-headlines?country=in&apiKey=${API_KEY}`;

    try {
        const response = await axios.get(url);
        return response.data.articles;

    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}

export const searchNews = async (query) => {

    const url = `${API_BASE_URL}everything?q=${query}&apiKey=${API_KEY}`;

    try {
        const response = await axios.get(url);
        return response.data.articles;

    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}