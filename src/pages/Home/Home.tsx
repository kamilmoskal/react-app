import React from 'react';
import Link from 'next/link'
import * as P from './parts';
import { Store } from 'src/store/rootReducer';
import { connect } from 'react-redux';
import { TestStore } from 'src/store/test/reducer';

interface HomeOwnProps { userAgent: string }
type HomeStateProps = TestStore
export type HomeProps = HomeOwnProps & HomeStateProps

const Home: React.FC<HomeProps> = ({ userAgent, test }) => (
    <P.Wrapper>
        <h1>Hello world! - user agent: {userAgent}</h1>
        <p><Link href={'/auth'}><a>link to auth</a></Link></p>
        <h1>store:{test}</h1>
    </P.Wrapper>
);

/* const mapStateToProps = (store: Store) => ({
    test: store.clock.test
})
 */
export default /* connect(mapStateToProps)( */Home/* ) */