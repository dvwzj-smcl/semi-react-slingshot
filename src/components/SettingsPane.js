import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SettingsPane extends Component {
    componentDidUpdate(){

    }
    render(){
        return (
            <div className="settings-pane">
                <a style={{cursor: 'pointer'}} data-toggle="settings-pane" onClick={this.props.appActions.toggleSettingsPane}>
                    &times;
                </a>
                <div className="settings-pane-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="user-info">
                                <div className="user-image">
                                    <Link to="/profile"
                                        onClick={()=>{
                                            (
                                                this.props.appActions.toggleSettingsPane(),
                                                this.props.appActions.setActiveMenuOnSidebar('/')
                                            );
                                        }}
                                    >
                                        <img src={this.props.userState.image.settingsPane} className="img-responsive img-circle" />
                                    </Link>
                                </div>
                                <div className="user-details">
                                    <h3>
                                        <Link to="/profile"
                                            onClick={()=>{
                                                (
                                                    this.props.appActions.toggleSettingsPane(),
                                                    this.props.appActions.setActiveMenuOnSidebar('/')
                                                );
                                            }}
                                        >
                                            {this.props.userState.name}
                                        </Link>
                                        <span className="user-status is-online"></span>
                                    </h3>
                                    <p className="user-title">{this.props.userState.roles.join(', ')}</p>
                                    <div className="user-links">
                                        <Link to="/profile/edit" className="btn btn-primary"
                                            onClick={()=>{
                                                (
                                                    this.props.appActions.toggleSettingsPane(),
                                                    this.props.appActions.setActiveMenuOnSidebar('/')
                                                );
                                            }}
                                        >
                                            Edit Profile
                                        </Link>
                                        <Link to="/logout" className="btn btn-danger">
                                            Logout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SettingsPane.propTypes = {
    appState: PropTypes.shape({
        menu: PropTypes.shape({
            settingsPane: PropTypes.shape({
                isOpened: PropTypes.bool.isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
    userState: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        roles: PropTypes.array.isRequired,
        image: PropTypes.object.isRequired
    }).isRequired,
    appActions: PropTypes.object.isRequired
};

export default SettingsPane;
