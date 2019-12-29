import { styled } from 'src/utils/theme';

export const Wrapper = styled.div`
    ${({ theme: { secondary } }) => `color: ${secondary.color}`}
`