import { expect } from 'chai';
import * as ActionCreators from './appActions';
import * as ActionTypes from '../constants/actionTypes';
//import initialState from '../reducers/initialState';
//import objectAssign from 'object-assign';

describe('Actions', () => {
    //const appState = objectAssign({}, initialState.app);
    it('should create an action to toggle settings pane', () => {
        const expected = {type: ActionTypes.TOGGLE_SETTINGS_PANE};
        expect(ActionCreators.toggleSettingsPane()).to.deep.equal(expected);
    });
    it('should create an action to toggle settings pane', () => {
        const expected = {type: ActionTypes.TOGGLE_SIDEBAR_MENU};
        expect(ActionCreators.toggleSidebarMenu()).to.deep.equal(expected);
    });
    it('should create an action to set active menu on sidebar', () => {
        const current = '/';
        const expected = {type: ActionTypes.SET_ACTIVE_MENU_ON_SIDEBAR, current};
        expect(ActionCreators.setActiveMenuOnSidebar(current)).to.deep.equal(expected);
    });
    it('should create an action to set current language', () => {
        const current = 'uk';
        const expected = {type: ActionTypes.SET_CURRENT_LANGUAGE, current};
        expect(ActionCreators.setCurrentLanguage(current)).to.deep.equal(expected);
    });
});
