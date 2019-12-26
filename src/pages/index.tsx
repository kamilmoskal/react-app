import { NextPage } from 'next';
import Link from 'next/link'
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => `color: ${theme.primary}`}
`

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Wrapper>
        <h1>Hello world! - user agent: {userAgent}</h1>
        <p><Link href={'/auth'}><a>link to auth</a></Link></p>
    </Wrapper>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;
