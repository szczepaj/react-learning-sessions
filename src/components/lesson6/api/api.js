import axios from "axios";

export const fetchArticlesWithQuery = async searchQuery => {
    const response = await axios.get(`/search?query=${searchQuery}`);
    return response.data.hits
}

export default fetchArticlesWithQuery