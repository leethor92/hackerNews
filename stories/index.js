import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NewsForm from '../src/components/newsForm/';

storiesOf("Hacker App/News Form", module).add("default", () => <NewsForm />);
