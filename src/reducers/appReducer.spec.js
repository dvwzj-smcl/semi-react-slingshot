import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './appReducer';

describe('Reducers::App', () => {
    const getInitialState = () => {
        return {
            menu: {
                settingsPane: {
                    isOpened: false
                },
                sidebarMenu: {
                    isExpanded: true,
                    current: '/'
                },
                navbarMenu: {
                    language: {
                        current: 'uk'
                    }
                }
            }
        };
    };

    const getAppState = () => {
        let state = {
            menu: {
                settingsPane: {
                    isOpened: true
                },
                sidebarMenu: {
                    isExpanded: false,
                    current: '/calendar'
                },
                navbarMenu: {
                    language: {
                        current: 'th'
                    }
                }
            }
        };
        return state;
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = getInitialState();
        expect(reducer(getInitialState(), action)).to.deep.equal(expected);
    });

    it('should handle TOGGLE_SETTINGS_PANE', () => {
        const action = { type: ActionTypes.TOGGLE_SETTINGS_PANE };
        expect(reducer(getAppState(), action).menu.settingsPane.isOpened).to.equal(false);
    });

    it('should handle TOGGLE_SIDEBAR_MENU', () => {
        const action = { type: ActionTypes.TOGGLE_SIDEBAR_MENU };
        expect(reducer(getAppState(), action).menu.sidebarMenu.isExpanded).to.equal(true);
    });

    it('should handle SET_ACTIVE_MENU_ON_SIDEBAR', () => {
        const current = '/';
        const action = { type: ActionTypes.SET_ACTIVE_MENU_ON_SIDEBAR, current };
        expect(reducer(getAppState(), action).menu.sidebarMenu.current).to.equal(current);
    });
    it('should handle SET_CURRENT_LANGUAGE', () => {
        const current = 'uk';
        const action = { type: ActionTypes.SET_CURRENT_LANGUAGE, current };
        expect(reducer(getAppState(), action).menu.navbarMenu.language.current).to.equal(current);
    });
});
