import { expect } from 'chai';
import {
    getCharacters,
    getCharacterItems,
    getCharactersLoading,
    getCharactersErrorMessage
} from "../../src/selectors/characterSelectors";


describe('characterSelectors', () => {
    it('getCharacters - should return characters', () => {
        //given
        const givenState = {
            characters: 'test'
        };
        const expectedValue = 'test';

        //then
        expect(getCharacters(givenState)).to.equal(expectedValue);
    });

    it('getCharacterItems - should return character items', () => {
        //given
        const givenState = {
            items: 'test'
        };
        const expectedValue = 'test';

        //then
        expect(getCharacterItems.resultFunc(givenState)).to.equal(expectedValue);
    });

    it('getCharacterItems - should return empty array as default', () => {
        //given
        const givenState = {};
        const expectedValue = [];

        //then
        expect(getCharacterItems.resultFunc(givenState)).to.deep.equal(expectedValue);
    });

    it('getCharactersLoading - should return character loading state', () => {
        //given
        const givenState = {
            loading: 'test'
        };
        const expectedValue = true;

        //then
        expect(getCharactersLoading.resultFunc(givenState)).to.equal(expectedValue);
    });

    it('getCharactersErrorMessage - should return error message', () => {
        //given
        const givenState = {
            error: {
                message: 'test'
            }
        };
        const expectedValue = 'test';

        //then
        expect(getCharactersErrorMessage.resultFunc(givenState)).to.equal(expectedValue);
    });
});
