import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon, { createSandbox } from 'sinon';
import Location from '../../src/components/Location';

describe('<Location> component', () => {
    const getLocationWrapper = props => shallow(<Location {...props} />);
    
    it('should be rendered', () => {
        //given
        const component = getLocationWrapper();

        //then
        expect(component).to.have.lengthOf(1);
        expect(component.text()).to.equal('Location info not found');
    });
});