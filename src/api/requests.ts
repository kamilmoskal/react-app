import { TVShowListOnTheAir } from 'src/api/models';
import axios from 'axios';

const defaultPath = 'https://api.themoviedb.org/3';

export const getTVShowListOnTheAir = async () => await axios.get<TVShowListOnTheAir>(
    `${defaultPath}/tv/on_the_air?api_key=${process.env.TMDB_API_KEY}`
)

export const getTVShowDetails = async (id: number) => await axios.get(
    `${defaultPath}/tv/${id}?api_key=${process.env.TMDB_API_KEY}`
)