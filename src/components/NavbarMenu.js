import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NavbarMenu extends Component {
    componentDidUpdate(){

    }
    toggleDropdown(ref){
        this.refs[ref].classList.toggle('open');
    }
    render(){
        const { navbarMenu } = this.props.appState.menu;
        return (
            <nav className="navbar user-info-navbar"  role="navigation">
				<ul className="user-info-menu left-links list-inline list-unstyled">
					<li className="hidden-sm hidden-xs">
						<a  style={{cursor: 'pointer'}} data-toggle="sidebar" onClick={this.props.appActions.toggleSidebarMenu}>
							<i className="fa-bars"></i>
						</a>
					</li>
                    <li className="dropdown hover-line language-switcher" ref="language-switcher" onClick={this.toggleDropdown.bind(this, 'language-switcher')}>
                        {((current, languages)=>{
                            if(!current || (!languages || !languages.length)) return;
                            return languages.filter((language)=>{
                                    return language.code==current;
                                }).map((exist, i)=>{
                                    return (
                                        <a key={i} className="dropdown-toggle" data-toggle="dropdown" style={{cursor: 'pointer'}}>
                                            <img src={exist.flag} alt={'flag-'+exist.code} />
                                            {exist.name}
                                        </a>
                                    );
                                });
                        })(navbarMenu.language.current, navbarMenu.language.items)}
                        {((languages)=>{
                            if(!languages) return;
                            return (
                                <ul className="dropdown-menu languages">
                                {languages.map((language, j)=>{
                                    return (
                                        <li key={j} onClick={this.props.appActions.setCurrentLanguage.bind(null, language.code)}>
                                            <a style={{cursor: 'pointer'}}>
                                                <img src={language.flag} alt={'flag-'+language.code} />
                                                {language.name}
                                            </a>
                                        </li>
                                    );
                                })}
                                </ul>
                            );
                        })(navbarMenu.language.items)}
                    </li>
                </ul>
                <ul className="user-info-menu right-links list-inline list-unstyled">
					{/*<li className="search-form">
						<form name="userinfo_search_form" method="get" action="/">
							<input type="text" name="s" className="form-control search-field" placeholder="Type to search..." />
							<button type="submit" className="btn btn-link">
								<i className="linecons-search"></i>
							</button>
						</form>
					</li>*/}
					<li className="dropdown user-profile" ref="user-profile" onClick={this.toggleDropdown.bind(this, 'user-profile')}>
						<a style={{cursor: 'pointer'}} className="dropdown-toggle" data-toggle="dropdown">
							<img src={this.props.userState.image.navbarMenu} alt="user-image" className="img-circle img-inline userpic-32" width="28" />
							<span>
								John Smith
								<i className="fa-angle-down"></i>
							</span>
						</a>
						<ul className="dropdown-menu user-profile-menu list-unstyled">
							<li>
								<Link to="/settings">
									<i className="fa-wrench"></i>
									Settings
								</Link>
							</li>
							<li>
								<Link to="/profile">
									<i className="fa-user"></i>
									Profile
								</Link>
							</li>
							<li className="last">
								<Link to="/logout">
									<i className="fa-lock"></i>
									Logout
								</Link>
							</li>
						</ul>
					</li>
				</ul>
            </nav>
        );
    }
}

NavbarMenu.propTypes = {
    appState: PropTypes.shape({
        menu: PropTypes.shape({
            navbarMenu: PropTypes.shape({
                language: PropTypes.object.isRequired
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

export default NavbarMenu;
