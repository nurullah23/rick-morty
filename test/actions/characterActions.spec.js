import { expect } from 'chai';
import sinon, { createSandbox } from 'sinon';
import { loadCharacters } from '../../src/actions/characterActions';
import { LOAD_PAGE_START, CHARACTER_API_URL, LOAD_PAGE_SUCCESS, UPDATE_PAGINATION } from '../../src/data/constants';

describe('character action creators', () => {

    const sandbox = createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    it('loadCharacters - should fetch results', async () => {
        //given
        const result = {
            info: 'test',
            results: ['test2']
        };
        const response = {
            json: () => result
        };
        const dispatch = sinon.spy();
        let stubedFetch = sinon.stub(window, 'fetch');
        stubedFetch.resolves(response);

        //when
        await loadCharacters()(dispatch);

        //then
        expect(dispatch).to.have.been.calledWith({ type: LOAD_PAGE_START });
        expect(stubedFetch).to.have.been.calledWith(CHARACTER_API_URL);
        expect(dispatch).to.have.been.calledWith({ payload: 'test', type: UPDATE_PAGINATION });
        expect(dispatch).to.have.been.calledWith({ payload: ['test2'], type: LOAD_PAGE_SUCCESS });
    });
});