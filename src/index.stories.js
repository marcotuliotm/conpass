import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from 'components/Header';
import UserTableContainer from 'containers/UserTableContainer';
import './index.css';


storiesOf('<Header>', module)
  .add('full', () => <Header />);

storiesOf('<UserTableContainer>', module)
  .add('full', () => <UserTableContainer />);

