import './page/list';

import deDE from '../../snippet/de-DE';
import enGB from '../../snippet/en-GB';

Shopware.Module.register('areanet-google-fonts-loader', {
    type: 'plugin',
    name: 'Google Fonts',
    title: 'areanet-google-fonts-loader.general.mainMenuItemGeneral',
    description: 'sw-property.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'regular-products',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        list: {
            component: 'areanet-google-fonts-loader-list',
            path: 'list'
        },
        /*detail: {
            component: 'areanet-google-fonts-loader-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'areanet-google-fonts-loader-list'
            }
        },
        create: {
            component: 'areanet-google-fonts-loader-create',
            path: 'create',
            meta: {
                parentPath: 'areanet-google-fonts-loader-list'
            }
        }*/
    },
    navigation: [{
        label: 'areanet-google-fonts-loader.general.mainMenuItemGeneral',
        color: '#57d9a3',
        path: 'areanet-google-fonts-loader.index',
        icon: 'regular-products',
        parent: 'sw-content',
        position: 100
    }]
});
