import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from 'components/Header';
import UserTableContainer from 'containers/UserTableContainer';
import 'vendor/bootstrap-grid.min.css';
import 'vendor/bootstrap.min.css';
import './index.css';


storiesOf('<Header>', module)
  .add('full', () => <Header />);

storiesOf('<UserTableContainer>', module)
  .add('full', () => (<div className="container jumbotron">
    <UserTableContainer />
  </div>));

