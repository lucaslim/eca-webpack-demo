import React, { Component } from 'react';

export class ProgressiveBoxAsync extends Component {
    constructor(props) {
        super(props);

        this.state = { component: null };
    }

    componentDidMount() {

        require.ensure([], require => {
            const Component = require('js/progressive-box').default;
            
            this.setState({
                component: Component
            })

        }, 'Progressive Box Component');
    }

    render() {
        if (this.state.component) {
            return <this.state.component {...this.props} />
        }

        return null;
    }
}

export default ProgressiveBoxAsync;
