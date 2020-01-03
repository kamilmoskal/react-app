export interface TVShowOnTheAirResult {
    poster_path?: string | null;
    popularity?: number;
    id?: number;
    backdrop_path?: string | null;
    vote_average?: number;
    overview?: string;
    first_air_date?: string;
    origin_country?: string[];
    genre_ids?: number[];
    original_language?: string;
    vote_count?: number;
    name?: string;
    original_name?: string;
}

export interface TVShowListOnTheAir {
    page?: number;
    total_results?: number;
    total_pages?: number;
    results?: TVShowOnTheAirResult[]
}

export interface CreatedBy {
    id?: number;
    credit_id?: string;
    name?: string;
    gender?: number;
    profile_path?: string;
}
export interface Genres {
    id?: number;
    name?: string;
}

export interface EpisodeToAir {
    air_date? : string;
    episode_number?: number;
    id?: number;
    name?: string;
    overview?: string;
    production_code?: string;
    season_number?: number;
    show_id?: number;
    still_path?: string;
    vote_average?: number;
    vote_count?: number;
}

export interface Networks {
    name?: string;
    id?: number;
    logo_path?: string;
    origin_country?: string;
}

export interface ProductionCompanies {
    id?: number;
    logo_path?: string | null;
    name?: string;
    origin_country?: string;
}

export interface Seasons {
    air_date?: string;
    episode_count?: number;
    id?: number;
    name?: string;
    overview?: string;
    poster_path?: string;
    season_number?: number;
}

export interface TVShowDetails {
    backdrop_path?: string | null;
    created_by?: CreatedBy[];
    episode_run_time?: number[];
    first_air_date?: string;
    genres?: Genres[];
    homepage?: string;
    id?: number;
    in_production?: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air?: EpisodeToAir;
    name?: string;
    next_episode_to_air?: EpisodeToAir
    networks?: Networks[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: ProductionCompanies[];
    seasons?: Seasons[];
    status?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number;
}