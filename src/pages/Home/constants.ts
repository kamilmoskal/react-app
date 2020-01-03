import { OnTheAirState } from 'src/store/TVShow/OnTheAir/constants';

interface HomeOwnProps { };

type HomeStateProps = {
    onTheAir: OnTheAirState
}

export type HomeProps = HomeOwnProps & HomeStateProps