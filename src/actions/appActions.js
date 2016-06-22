import * as types from '../constants/actionTypes';

export function toggleSettingsPane() {
    return {type: types.TOGGLE_SETTINGS_PANE};
}
export function toggleSidebarMenu() {
    return {type: types.TOGGLE_SIDEBAR_MENU};
}
export function setActiveMenuOnSidebar(current) {
    return {type: types.SET_ACTIVE_MENU_ON_SIDEBAR, current};
}
export function setCurrentLanguage(current) {
    return {type: types.SET_CURRENT_LANGUAGE, current};
}
