import React, { PropTypes, Component } from 'react';
//import { Link } from 'react-router';

import SettingsPane from './SettingsPane';
import SidebarMenu from './SidebarMenu';
import NavbarMenu from './NavbarMenu';

class Layout extends Component {
    componentDidMount(){
        this.refs['page-loading-overlay'].setAttribute('class', 'page-loading-overlay loaded');
    }
    componentDidUpdate(){
        this.refs['page-body'].setAttribute('class', 'page-body'+(this.props.appState.menu.settingsPane.isOpened?' settings-pane-open':''));
    }
    render(){
        return (
            <div className="page-body" ref="page-body">
                <SettingsPane appState={this.props.appState} appActions={this.props.appActions} userState={this.props.userState} />
                <div className="page-container">
                    <SidebarMenu appState={this.props.appState} appActions={this.props.appActions} />
                    <div className="main-content">
                        <NavbarMenu appState={this.props.appState} appActions={this.props.appActions} userState={this.props.userState} />
                        {this.props.children}
                    </div>
                </div>
                <div className="page-loading-overlay" ref="page-loading-overlay">
                    <div className="loader-2" />
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.element,
    appState: PropTypes.object.isRequired,
    userState: PropTypes.object.isRequired,
    appActions: PropTypes.object.isRequired
};

export default Layout;
