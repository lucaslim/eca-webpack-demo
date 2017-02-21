import React, { Component } from 'react';

import { ProgressiveButton } from 'js/progressive-button';
import { ProgressiveBox } from 'js/progressive-box';
// import { ProgressiveBoxAsync } from 'js/progressive-box-async';

// import { getTwitterData } from 'js/twitter-action';

//Third Party API
import arnold from 'running-man';
import randomProfile from 'random-profile-generator';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { itemList: [] };

        this.showTwitterBox = this.showTwitterBox.bind(this);
    }

    showTwitterBox(e) {
        e.preventDefault();

        const profile = randomProfile.profile();
        this.setState({
            itemList: [{
                picture: profile.avatar,
                name: profile.fullName,
                username: profile.twitter,
                content: arnold.quote(),
                time: new Date(),
            }, ...this.state.itemList]
        });


        // getTwitterData()
        //     .then(data => {
        //         this.setState({
        //             itemList: [data, ...this.state.itemList]
        //         })
        //     });
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
                            : this.state.itemList.map((item, idx) =>
                                <ProgressiveBox key={idx} {...item} />
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

const showTwitterBox = e => {
}