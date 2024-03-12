import template from './index.html.twig';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('areanet-google-fonts-loader-list', {
    template,

    inject: [
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('listing')
    ],

    data() {
        return {
            repository: null,
            vimeos: null
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        columns() {
            return this.getColumns();
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('areanet_google_fonts');

            this.repository.search(new Criteria(), Shopware.Context.api).then(result => {
                this.vimeos = result;
            });
        },
        getColumns() {
            return[{
                property: 'name',
                label: this.$tc('an-vimeoondemand.list.columnName'),
                routerLink: 'an.vimeoondemand.detail',
                inlineEdit: 'string',
                allowResize: true,
                primary: true
            }, {
                property: 'embedCode',
                label: this.$tc('an-vimeoondemand.list.columnEmbedCode'),
                inlineEdit: 'string',
                allowResize: true
            }];
        },
        deleteVimeo() {
            this.repository.delete(this.vimeo, Shopware.Context.api);
        }
    }
});
