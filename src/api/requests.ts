import axios from 'axios';

const defaultPath = 'https://api.themoviedb.org/3';

export const getTest = async () => await axios.get(
    `${defaultPath}/tv/on_the_air?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
)

