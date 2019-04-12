import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

configure({adapter : new Adapter()})

describe('check app', () =>{
  it('should have', () => {
    const wrapper = shallow(<App />);
    const element = <div className="App"></div>
    // expect(wrapper.contains(element)).to.equal(true);
  })
})
