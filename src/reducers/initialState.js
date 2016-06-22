export default {
    app: {
        menu: {
            settingsPane: {
                isOpened: false
            },
            sidebarMenu: {
                isExpanded: true,
                main: {
                    to: '/',
                    logo: {
                        expanded: require('../styles/xenon/images/logo@2x.png'),
                        collapsed: require('../styles/xenon/images/logo-collapsed@2x.png')
                    }
                },
                current: '/',
                items: [
                    {
                        text: 'Calendar',
                        icon: 'linecons-calendar',
                        to: '/calendar',
                        items: [] //optional with only {text,to}
                    }
                ]
            },
            navbarMenu: {
                language: {
                    current: 'uk',
                    items: [
                        {
                            name: 'United Kingdom',
                            code: 'uk',
                            flag: require('../styles/xenon/images/flags/flag-uk.png')
                        },
                        {
                            name: 'ภาษาไทย',
                            code: 'th',
                            flag: require('../styles/xenon/images/flags/flag-th.png')
                        }
                    ]
                }
            }
        }
    },
    user: {
        id: 1,
        name: 'Admin',
        image: {
            settingsPane: require('../styles/xenon/images/user-2.png'),
            navbarMenu: require('../styles/xenon/images/user-4.png')
        },
        roles: [
            'Super Admin',
            'Developer'
        ]
    }
};
