import React, { Component } from 'react';

import { ProgressiveButton } from 'js/progressive-button';
import ProgressiveBoxAsync from 'js/progressive-box-async';

import randomName from 'random-name';
import arnold from 'running-man';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { itemList: [] };

        this.showTwitterBox = this.showTwitterBox.bind(this);
    }

    showTwitterBox(e) {
        e.preventDefault();
        this.setState({
            itemList: [...this.state.itemList, {
                picture: 'http://lorempixel.com/128/128/people/',
                name: `${randomName.first()} ${randomName.last()}`,
                username: randomName.middle().toLowerCase(),
                content: arnold.quote(),
                time: new Date(),
            }]
        });
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title">Webpack Demo</h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <ProgressiveButton text={'Show more feeds!'} clickEvent={this.showTwitterBox} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        {this.state.itemList.length <= 0
                            ? null
                            : this.state.itemList.map((item, idx) => <ProgressiveBoxAsync key={idx} {...item} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

const showTwitterBox = e => {
}