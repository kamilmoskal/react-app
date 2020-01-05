import { AxiosError } from 'axios';
import { TVShowListOnTheAir } from 'src/api/models';

export const onTheAirMockData: TVShowListOnTheAir = {
    "page": 1,
    "total_results": 192,
    "total_pages": 10,
    "results": [
        {
            "poster_path": "/vC324sdfcS313vh9QXwijLIHPJp.jpg",
            "popularity": 47.432451,
            "id": 31917,
            "backdrop_path": "/rQGBjWNveVeF8f2PGRtS85w9o9r.jpg",
            "vote_average": 5.04,
            "overview": "Based on the Pretty Little Liars series of young adult novels by Sara Shepard, the series follows the lives of four girls — Spencer, Hanna, Aria, and Emily — whose clique falls apart after the disappearance of their queen bee, Alison. One year later, they begin receiving messages from someone using the name \"A\" who threatens to expose their secrets — including long-hidden ones they thought only Alison knew.",
            "first_air_date": "2010-06-08",
            "origin_country": [
                "US"
            ],
            "genre_ids": [
                18,
                9648
            ],
            "original_language": "en",
            "vote_count": 133,
            "name": "Pretty Little Liars",
            "original_name": "Pretty Little Liars"
        },
        {
            "poster_path": "/esN3gWb1P091xExLddD2nh4zmi3.jpg",
            "popularity": 37.882356,
            "id": 62560,
            "backdrop_path": "/v8Y9yurHuI7MujWQMd8iL3Gy4B5.jpg",
            "vote_average": 7.5,
            "overview": "A contemporary and culturally resonant drama about a young programmer, Elliot, who suffers from a debilitating anti-social disorder and decides that he can only connect to people by hacking them. He wields his skills as a weapon to protect the people that he cares about. Elliot will find himself in the intersection between a cybersecurity firm he works for and the underworld organizations that are recruiting him to bring down corporate America.",
            "first_air_date": "2015-05-27",
            "origin_country": [
                "US"
            ],
            "genre_ids": [
                80,
                18
            ],
            "original_language": "en",
            "vote_count": 287,
            "name": "Mr. Robot",
            "original_name": "Mr. Robot"
        },
        {
            "poster_path": "/i6Iu6pTzfL6iRWhXuYkNs8cPdJF.jpg",
            "popularity": 34.376914,
            "id": 37680,
            "backdrop_path": "/8SAQqivlp74MZ7u55ccR1xa0Nby.jpg",
            "vote_average": 6.94,
            "overview": "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory. Mike and Harvey are a winning team. Even though Mike is a genius, he still has a lot to learn about law. And while Harvey may seem like an emotionless, cold-blooded shark, Mike's sympathy and concern for their cases and clients will help remind Harvey why he went into law in the first place. Mike's other allies in the office include the firm's best paralegal Rachel and Harvey's no-nonsense assistant Donna to help him serve justice. Proving to be an irrepressible duo and invaluable to the practice, Mike and Harvey must keep their secret from everyone including managing partner Jessica and Harvey's arch nemesis Louis, who seems intent on making Mike's life as difficult as possible.",
            "first_air_date": "2011-06-23",
            "origin_country": [
                "US"
            ],
            "genre_ids": [
                18
            ],
            "original_language": "en",
            "vote_count": 161,
            "name": "Suits",
            "original_name": "Suits"
        },
        {
            "poster_path": "/cCDuZqLv6jwnf3cZZq7g3uNLaIu.jpg",
            "popularity": 21.734193,
            "id": 62286,
            "backdrop_path": "/okhLwP26UXHJ4KYGVsERQqp3129.jpg",
            "vote_average": 6.23,
            "overview": "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
            "first_air_date": "2015-08-23",
            "origin_country": [
                "US"
            ],
            "genre_ids": [
                18,
                27
            ],
            "original_language": "en",
            "vote_count": 160,
            "name": "Fear the Walking Dead",
            "original_name": "Fear the Walking Dead"
        },
        {
            "poster_path": "/7Fwo5d29j374khrFJQ7cs5U69cv.jpg",
            "popularity": 17.133592,
            "id": 45253,
            "backdrop_path": "/r8qkc5No5PC75x88PJ5vEdwwQpX.jpg",
            "vote_average": 4.3,
            "overview": "The Super Sentai Series is the name given to the long-running Japanese superhero team genre of shows produced by Toei Co., Ltd., Toei Agency and Bandai, and aired by TV Asahi. The shows are of the tokusatsu genre, featuring live action characters and colorful special effects, and are aimed mainly at children. The Super Sentai Series is one of the most prominent tokusatsu productions in Japan, alongside the Ultra Series and the Kamen Rider Series, which it currently airs alongside in the Super Hero Time programming block on Sundays. Outside Japan, the Super Sentai Series are best known as the source material for the Power Rangers franchise.",
            "first_air_date": "1975-04-05",
            "origin_country": [
                "JP"
            ],
            "genre_ids": [
                12,
                10759,
                10765
            ],
            "original_language": "ja",
            "vote_count": 10,
            "name": "Super Sentai",
            "original_name": "スーパー戦隊シリーズ"
        },
    ],
}

export const mockErrorMessage: string = 'Request failed with status code 401';

export const mockAxiosError: AxiosError = {
    config: {},
    name: 'Error',
    message: mockErrorMessage,
    isAxiosError: true,
}