import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon, { createSandbox } from 'sinon';
import Episodes from '../../src/components/Episodes';

describe('<Episodes> component', () => {
    const getEpisodesWrapper = props => shallow(<Episodes {...props} />);
    
    it('should be rendered', () => {
        //given
        const component = getEpisodesWrapper();

        //then
        expect(component).to.have.lengthOf(1);
        expect(component.text()).to.equal('-');
    });
});