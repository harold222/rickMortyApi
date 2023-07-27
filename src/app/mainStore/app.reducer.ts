import * as Home from '../components/pages/home/store/index';
import * as Place from '../components/pages/place/store/index';
import * as Episode from '../components/pages/episode/store/index';

export const reducers: any = {
    Home: Home.reducer,
    Place: Place.reducer,
    Episode: Episode.reducer
}