import { expect } from 'chai';
import {
    getPage,
    getCurrentPage
} from "../../src/selectors/pageSelectors";


describe('pageSelectors', () => {
    it('getPage - should return page info', () => {
        //given
        const givenState = {
            page: 'test'
        };
        const expectedValue = 'test';

        //then
        expect(getPage(givenState)).to.equal(expectedValue);
    });

    it('getCurrentPage - should return current page', () => {
        //given
        const givenState = {
            current: 2
        };
        const expectedValue = 2;

        //then
        expect(getCurrentPage.resultFunc(givenState)).to.equal(expectedValue);
    });
});
