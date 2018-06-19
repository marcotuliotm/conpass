import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import { storiesOf } from '@storybook/react';
import configureStore from 'redux-mock-store';

import Header from 'components/Header';
import UserTableContainer from 'containers/UserTableContainer';
import UserFormContainer from 'containers/UserFormContainer';
import 'vendor/bootstrap-grid.min.css';
import 'vendor/bootstrap.min.css';
import 'antd/dist/antd.css';
import './index.css';

const mockStore = configureStore();

const store = mockStore({
  users: {
    data: [{
      key: '1',
      name: {
        text: 'John Brown',
        avatar: '',
      },
      create: 1229274074002,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: {
        text: 'Jim Green',
        avatar: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
      },
      create: 1529274074002,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: {
        text: 'Moe Black',
        avatar: '',
      },
      create: 1329274076002,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: {
        text: 'Jim Red',
        avatar: '',
      },
      create: 1529274075002,
      address: 'London No. 2 Lake Park',
    }],
    load: false,
  },
});

const storeEmpty = mockStore({
  users: {
    data: [],
    load: false,
  },
});


storiesOf('<Header>', module)
  .add('full', () => <Header />);

storiesOf('<UserTableContainer> with data', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('full', () => (<div className="container jumbotron">
    <UserTableContainer />
  </div>));

storiesOf('<UserTableContainer> with no data', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((story) => <Provider store={storeEmpty}>{story()}</Provider>)
  .add('full', () => (<div className="container jumbotron">
    <UserTableContainer />
  </div>));

storiesOf('<UserFormContainer> with data', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/new']}>{story()}</MemoryRouter>
  ))
  .add('full', () => (<div className="container jumbotron">
    <UserFormContainer />
  </div>));

