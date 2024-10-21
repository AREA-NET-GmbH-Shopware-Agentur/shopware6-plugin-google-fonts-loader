const { Component, State, Mixin } = Shopware;
const { Criteria } = Shopware.Data;
const { mapPropertyErrors } = Shopware.Component.getComponentHelper();
const utils = Shopware.Utils;

import template from './index.html.twig';
import './index.scss';

Component.register('areanet-google-fonts-loader-detail', {
    template,

    inject: [
        'repositoryFactory',
        'systemConfigApiService',
        'customApiService'
    ],

    mixins: [
        Mixin.getByName('notification'),
        Mixin.getByName('placeholder'),
    ],

    props: {
        fontId: {
            type: String,
            required: false,
            default() {
                return null;
            },
        },
    },

    shortcuts: {
        'SYSTEMKEY+S': 'onSave',
        ESCAPE: 'onAbortButtonClick'
    },

    data() {
        return {
            font: [],
            processSuccess: false,
            identifier: '',
            isLoading: false,
        };
    },

    created() {
        this.createdComponent();
    },

    watch: {
        fontId() {
            this.createdComponent();
        },
    },

    computed: {
        fontRepository() {
            return this.repositoryFactory.create('areanet_google_font');
        },

        fontCriteria() {
            return (new Criteria(1, 1)).addAssociation('salesChannels');
        },
    },

    methods: {
        async createdComponent() {
            if(this.isCreateMode) {
                if (Shopware.Context.api.languageId !== Shopware.Context.api.systemLanguageId) {
                    Shopware.State.commit('context/setApiLanguageId', Shopware.Context.api.languageId)
                }

                if (!Shopware.State.getters['context/isSystemDefaultLanguage']) {
                    Shopware.State.commit('context/resetLanguageToDefault');
                }
            }

            await Promise.all([
                this.getFont(),
            ]);

            this.isLoading = false;
        },

        async getFont() {
            this.fontRepository
                .get(this.$route.params.id, Shopware.Context.api, this.fontCriteria)
                .then((entity) => {
                    this.font = entity;
                });
        },

        onClickSave() {
            this.isLoading = true;
            this.fontRepository
                .save(this.font, Shopware.Context.api)
                .then(() => {
                    this.getFont();
                    this.isLoading = false;
                    this.processSuccess = true;
                    this.loadFont(this.font.id);
                    this.createNotificationSuccess({
                        title: this.$t('areanet-google-fonts-loader.notification.successTitle'),
                        message: this.$tc('areanet-google-fonts-loader.notification.success')
                    });
                }).catch((exception) => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                    message: exception
                });
            });
        },

        saveFinish() {
            this.processSuccess = false;
        },

        async loadFont(id) {
            if(this.font.downloaded !== true && this.font.active) {
                const response = await this.systemConfigApiService.getValues('AreanetGoogleFontsLoader.config');
                const googleAPIKey = response['AreanetGoogleFontsLoader.config.googleAPIKey'];

                if(!googleAPIKey) {
                    this.createNotificationError({
                        title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                        message: this.$t('areanet-google-fonts-loader.notification.noApiKey')
                    });
                } else {
                    const script = document.createElement('script');
                    script.src = "https://apis.google.com/js/api.js";
                    script.async = true;
                    script.onload = () => {
                        gapi.load('client', () => {
                            gapi.client.setApiKey(googleAPIKey);
                            gapi.client.load("https://www.googleapis.com/discovery/v1/apis/webfonts/v1/rest")
                                .then(() => {
                                    gapi.client.webfonts.webfonts.list({
                                        "capability": [
                                            "WOFF2",
                                            "CAPABILITY_UNSPECIFIED"
                                        ],
                                        "family": [
                                            this.font.name
                                        ],
                                        "subset": "latin-ext"
                                    })
                                        .then(async (response) => {
                                            if(response.result.items.length) {
                                                if (response.result.items.length) {
                                                    let notification = await this.customApiService.downloadFont(response.result.items, id);

                                                    if(notification.status === 200) {
                                                        this.createNotificationSuccess({
                                                            title: this.$t('areanet-google-fonts-loader.notification.successTitle'),
                                                            message: this.$tc('areanet-google-fonts-loader.notification.successDownload')
                                                        });
                                                    } else {
                                                        this.createNotificationError({
                                                            title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                                                            message: notification.message
                                                        });
                                                    }
                                                } else {
                                                    this.createNotificationError({
                                                        title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                                                        message: this.$t('areanet-google-fonts-loader.notification.notFound')
                                                    });
                                                }
                                            } else {
                                                this.createNotificationError({
                                                    title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                                                    message: this.$t('areanet-google-fonts-loader.notification.notFound')
                                                });
                                            }
                                        }, (err) => {
                                            if(err.result.error.message === "Requested entity was not found.") {
                                                this.createNotificationError({
                                                    title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                                                    message: this.$t('areanet-google-fonts-loader.notification.notFound')
                                                });
                                            } else {
                                                this.createNotificationError({
                                                    title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                                                    message: err
                                                });
                                            }
                                        });
                                }, (err) => {
                                    this.createNotificationError({
                                        title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                                        message: err
                                    });
                                });
                        });
                    };
                    document.head.appendChild(script);
                }
            }
        }
    }
});
