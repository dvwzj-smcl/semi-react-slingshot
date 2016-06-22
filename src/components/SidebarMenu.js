import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SidebarMenu extends Component {
    componentDidUpdate(){
        this.refs['sidebar-menu'].setAttribute('class', 'sidebar-menu toggle-others fixed'+(this.props.appState.menu.sidebarMenu.isExpanded?'':' collapsed'));
    }
    render() {
        const { sidebarMenu } = this.props.appState.menu;
        return (
            <div className="sidebar-menu toggle-others fixed" ref="sidebar-menu">
                <div className="sidebar-menu-inner">
                    <header className="logo-env">
                        <div className="logo">
                            <Link to={sidebarMenu.main.to} className="logo-expanded" onClick={this.props.appActions.setActiveMenuOnSidebar.bind(null, sidebarMenu.main.to)}>
                                <img src={sidebarMenu.main.logo.expanded} width="80" alt="" />
                            </Link>
                            <Link to={sidebarMenu.main.to} className="logo-collapsed" onClick={this.props.appActions.setActiveMenuOnSidebar.bind(null, sidebarMenu.main.to)}>
                                <img src={sidebarMenu.main.logo.collapsed} width="40" alt="" />
                            </Link>
                        </div>
                        <div className="mobile-menu-toggle visible-xs">
                            <a href="#" data-toggle="mobile-menu">
                                <i className="fa-bars"></i>
                            </a>
                        </div>
                        <div className="settings-icon">
                            <a style={{cursor: 'pointer'}} data-toggle="settings-pane" data-animate="true" onClick={this.props.appActions.toggleSettingsPane}>
                                <i className="linecons-cog"></i>
                            </a>
                        </div>
                    </header>
                    {((items)=>{
                        if(!items) return;
                        return (
                            <ul id="main-menu" className="main-menu">
                            {items.map((item, i)=>{
                                return (
                                    <li key={i} className={((to, hasSub)=>{
                                        let liClassName = [
                                            (to==sidebarMenu.current?'active':''),
                                            (to==sidebarMenu.current&&hasSub&&hasSub.length?'expanded opened':''),
                                            (hasSub&&hasSub.length?'has-sub':'')
                                        ].filter(function(val){
                                            return val;
                                        });
                                        return liClassName.length ? liClassName.join(' ') : null;
                                    })(item.to, item.items)} onClick={this.props.appActions.setActiveMenuOnSidebar.bind(null, item.to)}>
                                        <Link to={item.to}>
                                            {((icon)=>{
                                                if(!icon) return;
                                                return <i className={icon}></i>;
                                            })(item.icon)}
                                            <span className="title">{item.text}</span>
                                        </Link>
                                        {((submenu)=>{
                                            if(!submenu) return;
                                            return (
                                                <ul>
                                                    {submenu.map((subitem, k)=>{
                                                        return (
                                                            <li key={k}>
                                                                <Link to={subitem.to}>
                                                                    <span className="title">{subitem.text}</span>
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            );
                                        })(item.items)}
                                    </li>
                                );
                            })}
                            </ul>
                        );
                    })(sidebarMenu.items)}
                </div>
            </div>
        );
    }
}

SidebarMenu.propTypes = {
    appState: PropTypes.shape({
        menu: PropTypes.shape({
            sidebarMenu: PropTypes.shape({
                isExpanded: PropTypes.bool.isRequired,
                main: PropTypes.shape({
                    to: PropTypes.string.isRequired,
                    logo: PropTypes.shape({
                        expanded: PropTypes.string.isRequired,
                        collapsed: PropTypes.string.isRequired
                    })
                }).isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
    appActions: PropTypes.object.isRequired
};

export default SidebarMenu;
