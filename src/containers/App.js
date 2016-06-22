import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions';

import Layout from '../components/Layout';

const App = (props) => {
    return (
        <Layout
            appState={props.appState}
            appActions={props.appActions}
            userState={props.userState}
            children={props.children}
        />
    );
};

App.propTypes = {
    children: PropTypes.element,
    appState: PropTypes.object.isRequired,
    userState: PropTypes.object.isRequired,
    appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        appState: state.app,
        userState: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
