import axios from "axios";

const KEY ='AIzaSyAFl3T4fkExgnE0P8f8lYU7IfccTnTYv5A'
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});