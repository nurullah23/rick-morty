import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon, { createSandbox } from 'sinon';
import Character from '../../src/components/Character';

describe('<Character> component', () => {
    const getCharacterWrapper = props => shallow(<Character {...props} />);
    
    it('should be rendered', () => {
        //given
        const component = getCharacterWrapper();

        //then
        expect(component).to.have.lengthOf(1);
        expect(component.text()).to.equal('Character data is empty');
    });
});