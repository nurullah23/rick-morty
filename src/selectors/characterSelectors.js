import _ from "lodash";
import { createSelector } from "reselect";

export const getCharacters = state => state.characters || {};

export const getCharacterItems = createSelector(
    getCharacters,
    (characters) => characters.items || []
);

export const getCharactersLoading = createSelector(
    getCharacters,
    (characters) => Boolean(characters.loading)
);

export const getCharactersErrorMessage = createSelector(
    getCharacters,
    (characters) => _.get(characters, 'error.message', '')
);