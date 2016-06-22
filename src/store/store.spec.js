import * as ActionTypes from '../constants/actionTypes';
import { createStore } from 'redux';
import { expect } from 'chai';
import rootReducer from '../reducers';
//import calculator from '../businessLogic/fuelSavingsCalculator';
//import dateHelper from '../businessLogic/dateHelper';
import initialState from '../reducers/initialState';

describe('Store', () => {
    it('should display results when necessary data is provided', () => {
        const store = createStore(rootReducer, initialState);

        const actions = [
            { type: ActionTypes.TOGGLE_SETTINGS_PANE },
            { type: ActionTypes.SET_ACTIVE_MENU_ON_SIDEBAR, current: '/calendar' }
            /*{ type: ActionTypes.TOGGLE_SETTINGS_PANE }*/
        ];
        actions.forEach(action => store.dispatch(action));

        const actual = store.getState();
        const expected = {isOpened: true};

        expect(actual.app.menu.settingsPane).to.deep.equal(expected);
        expect(actual.app.menu.sidebarMenu.current).to.equal('/calendar');
    });
});
