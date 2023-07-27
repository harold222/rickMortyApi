import * as actions from './episode.action';
import { initialEpisodeState, reducer } from './episode.reducer';
import * as selectors from './episode.selector';
import { IEpisodeState } from './interfaces/IEpisodeState';

export * from './episode.action';
export * from './episode.reducer';
export * from './episode.selector';

export {
    IEpisodeState,
    actions,
    initialEpisodeState,
    reducer,
    selectors,
};