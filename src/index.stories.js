import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from './components/Header';
import './index.css';


storiesOf('<Header>', module)
  .add('full', () => <Header />);

