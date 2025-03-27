import './page/list';
import './page/detail';
import './page/create';
Shopware.Component.register('google-font-sales-channel-select', () => import('./component/google-font-sales-channel-select'));

Shopware.Module.register('areanet-google-fonts-loader', {
    type: 'plugin',
    name: 'areanet-google-fonts-loader',
    title: 'areanet-google-fonts-loader.general.mainMenuItemGeneral',
    description: 'sw-property.general.descriptionTextModule',
    color: '#ff68b4',
    routes: {
        list: {
            component: 'areanet-google-fonts-loader-list',
            path: 'list'
        },
        detail: {
            component: 'areanet-google-fonts-loader-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'areanet.google.fonts.loader.list'
            }
        },
        create: {
            component: 'areanet-google-fonts-loader-create',
            path: 'create',
            meta: {
                parentPath: 'areanet.google.fonts.loader.list'
            }
        }
    },
    navigation: [{
        label: 'areanet-google-fonts-loader.general.mainMenuItemGeneral',
        color: '#ff68b4',
        path: 'areanet.google.fonts.loader.list',
        parent: 'sw-content',
        position: 400
    }]
});
