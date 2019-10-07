import React, { Component } from 'react';
import { Route } from 'react-router';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { GitHub } from './components/GitHub';
import { Home } from './components/Home';
import { Layout } from './components/Layout';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/git-hub' component={GitHub} />
            </Layout>
        );
    }
}
