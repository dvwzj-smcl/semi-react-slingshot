import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function appReducer(state = initialState.app, action) {
    let newState;
    switch (action.type) {
        case types.TOGGLE_SETTINGS_PANE:
            newState = objectAssign({}, state);
            newState.menu.settingsPane.isOpened = !state.menu.settingsPane.isOpened;
            return newState;
        case types.TOGGLE_SIDEBAR_MENU:
            newState = objectAssign({}, state);
            newState.menu.sidebarMenu.isExpanded = !state.menu.sidebarMenu.isExpanded;
            return newState;
        case types.SET_ACTIVE_MENU_ON_SIDEBAR:
            newState = objectAssign({}, state);
            newState.menu.sidebarMenu.current = action.current;
            return newState;
        case types.SET_CURRENT_LANGUAGE:
            newState = objectAssign({}, state);
            newState.menu.navbarMenu.language.current = action.current;
            return newState;
        default:
            return state;
    }
}
