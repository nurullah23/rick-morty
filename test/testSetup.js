import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {Response, Request, Headers, fetch} from 'whatwg-fetch';
import '@babel/polyfill';
import chai from 'chai';
import sinonChai from 'sinon-chai';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

chai.use(sinonChai);

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;