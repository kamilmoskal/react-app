import React from 'react';
import Link from 'next/link'
import * as P from './parts';
import { Store } from 'src/store/rootReducer';
import { connect } from 'react-redux';
import { TestStore } from 'src/store/test/reducer';

type HomeStateProps = { data: TestStore}
export type HomeProps = HomeStateProps

const Home: React.FC<HomeProps> = ({ data }) => (
    <P.Wrapper>
        <h1>Hello world! - user agent: disable3d</h1>
        <p><Link href={'/auth'}><a>link to auth</a></Link></p>
        <h1>store:{data.test}</h1>
        {data.data && data.data.results && data.data.results.map((result, i) => <p key={i}>{result.original_name}</p>)}
    </P.Wrapper>
);

const mapStateToProps = (store: Store) => ({
    data: store.clock
})

export default  connect(mapStateToProps)(Home);