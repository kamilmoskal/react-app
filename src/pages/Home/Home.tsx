import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link'
import Head from 'next/head';
import * as P from './parts';
import { Store } from 'src/store/rootReducer';
import { TestStore } from 'src/store/test/reducer';

export interface HomeOwnProps { }
type HomeStateProps = { clock: TestStore }
export type HomeProps = HomeOwnProps & HomeStateProps

const Home: React.FC<HomeProps> = ({ clock: { data, test, isLoading } }) => (
    <>
        <Head>
            <title key="title">Strona główna</title>
            <meta name="description" content="Strona główna bez prawie żadnej zawartości" key="description" />
            <meta name="keywords" content="strona, główna, brak zawartości" key="keywords" />
        </Head>
        <P.Wrapper>
            <h1>Hello world! - user agent: asd</h1>
            <p><Link href={'/auth'}><a>link to auth</a></Link></p>
            <h1>store:{test}</h1>
            {data && data.results && data.results.map((result, i) => <p key={i}>{result.original_name}</p>)}
        </P.Wrapper>
    </>
)

const mapStateToProps = (store: Store) => ({
    clock: store.clock
})

export default connect(mapStateToProps)(Home);