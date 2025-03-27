const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

import template from './index.html.twig';

Component.register('areanet-google-fonts-loader-list', {
    template,

    inject: ['repositoryFactory', 'acl'],

    mixins: [
        Mixin.getByName('notification'),
        Mixin.getByName('listing'),
    ],

    data() {
        return {
            items: null,
            isLoading: true,
            sortBy: 'name',
            sortDirection: 'ASC',
            total: 0,
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        fontRepository() {
            return this.repositoryFactory.create('areanet_google_font');
        },

        columns() {
            return [
                {
                    property: 'name',
                    dataIndex: 'name',
                    label: this.$t('areanet-google-fonts-loader.list.name'),
                    routerLink: 'areanet.google.fonts.loader.detail',
                    allowResize: true
                },
                {
                    property: 'active',
                    dataIndex: 'active',
                    label: this.$t('areanet-google-fonts-loader.list.active'),
                    allowResize: true,
                    inlineEdit: 'boolean',
                },
                {
                    property: 'salesChannel',
                    dataIndex: 'salesChannel',
                    label: this.$t('areanet-google-fonts-loader.list.salesChannel')
                },
                {
                    property: 'downloaded',
                    dataIndex: 'downloaded',
                    label: this.$t('areanet-google-fonts-loader.list.downloaded'),
                    scopedSlots: {
                        default: 'downloadedStatus'
                    }
                }
            ];
        }
    },

    methods: {
        async getList() {
            this.isLoading = true;

            const criteria = new Criteria(this.page, this.limit);
            criteria.addAssociation('salesChannels.salesChannel');

            return this.fontRepository.search(criteria)
                .then(result => {
                    this.items = result;
                    this.total = result.total;
                    this.isLoading = false;
                });
        },
    }
});
