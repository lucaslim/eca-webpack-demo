import React, { Component } from 'react';

import { ProgressiveButton } from 'js/progressive-button';
import ProgressiveBoxAsync from 'js/progressive-box-async';

import { getTwitterData } from 'js/twitter-action';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { itemList: [] };

        this.showTwitterBox = this.showTwitterBox.bind(this);
    }

    showTwitterBox(e) {
        e.preventDefault();

        getTwitterData()
            .then(data => {
                this.setState({
                    itemList: [data, ...this.state.itemList]
                })
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