import axios from 'axios';
import { YOUTUBE_APY_KEY, YOUTUBE_API_BASE_URL } from '@env'

export const fetchYouTubeNewsVideos = async () => {
    try {
        const API_KEY = 'YOUR_YOUTUBE_API_KEY';

        const response = await axios.get(YOUTUBE_API_BASE_URL, {
            params: {
                key: YOUTUBE_APY_KEY,
                part: 'snippet',
                q: 'news',
                type: 'video',
                maxResults: 10,
            }
        });

        const videos = response.data.items;
        return videos;
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return [];
    }
};

