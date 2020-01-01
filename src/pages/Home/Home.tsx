import React from 'react';
import Link from 'next/link'
import * as P from './parts';
import { Store } from 'src/store/rootReducer';
import { connect } from 'react-redux';
import { TestStore } from 'src/store/test/reducer';
import withReduxSaga from 'next-redux-saga';

interface HomeOwnProps { userAgent: string }
type HomeStateProps = /* {data:  */TestStore/* } */
export type HomeProps = HomeOwnProps & HomeStateProps

const Home: React.FC<HomeProps> = ({ data, test }) => (
    <P.Wrapper>
        <h1>Hello world! - user agent: asd</h1>
        <p><Link href={'/auth'}><a>link to auth</a></Link></p>
        <h1>store:{test}</h1>
        {data && data.results && data.results.map((result, i) => <p key={i}>{result.original_name}</p>)}
    </P.Wrapper>
);

/* const mapStateToProps = (store: Store) => ({
    data: store.clock
}) */

export default /* withReduxSaga(connect(mapStateToProps)( */Home/* )) */