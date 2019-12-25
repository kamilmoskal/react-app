import { NextPage } from 'next';
import Link from 'next/link'
import * as P from './parts';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <P.Wrapper>
        <h1>Hello world! - user agent: {userAgent}</h1>
        <p><Link href={'/auth'}><a>link to auth</a></Link></p>
    </P.Wrapper>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;
