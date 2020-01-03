import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link'
import Head from 'next/head';
import { Store } from 'src/store/rootReducer';
import * as P from './parts';
import { HomeProps } from './constants';

export const Home: React.FC<HomeProps> = ({ onTheAir: { data, isLoading } }) => (
    <>
        <Head>
            <title key="title">Strona główna</title>
            <meta name="description" content="Strona główna bez prawie żadnej zawartości" key="description" />
            <meta name="keywords" content="strona, główna, brak zawartości" key="keywords" />
        </Head>
        <P.Wrapper>
            <h1>Hello world! - user agent: asd</h1>
            <p><Link href={'/auth'}><a>link to auth</a></Link></p>
            <h1>store:{isLoading}</h1>
            {data && data.results && data.results.map((result, i) => <p key={i}>{result.original_name}</p>)}
        </P.Wrapper>
    </>
)

const mapStateToProps = (store: Store) => ({
    onTheAir: store.onTheAir
})

export default connect(mapStateToProps)(Home);