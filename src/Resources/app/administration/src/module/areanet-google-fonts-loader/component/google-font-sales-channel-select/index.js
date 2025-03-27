/**
 * @package buyers-experience
 */
import template from './google-font-sales-channel-select.html.twig';

const { Criteria } = Shopware.Data;

export default {
    template,

    inject: [
        'repositoryFactory',
    ],

    props: {
        font: {
            type: Object,
            required: false,
            default: null,
        },
    },

    data() {
        return {
            salesChannels: [],
            sortBy: 'name',
        };
    },

    computed: {
        salesChannelRepository() {
            return this.repositoryFactory.create('sales_channel');
        },

        areanetGoogleFontSalesChannelRepository() {
            if (this.font) {
                return this.repositoryFactory.create(
                    this.font.salesChannels.entity,
                    this.font.salesChannels.source,
                );
            }

            return null;
        },

        salesChannelIds: {
            get() {
                if (!this.font || !this.font.salesChannels) {
                    return [];
                }

                return this.font.salesChannels.map((fontSalesChannels) => {
                    return fontSalesChannels.salesChannelId;
                });
            },

            set(salesChannelsIds) {
                salesChannelsIds = salesChannelsIds || [];
                const { deleted, added } = this.getChangeset(salesChannelsIds);

                if (this.font.isNew()) {
                    this.handleLocalMode(deleted, added);
                    return;
                }

                this.handleWithRepository(deleted, added);
            },
        },

        salesChannelCriteria() {
            const salesChannelCriteria = new Criteria(1, 500);
            salesChannelCriteria.addSorting(Criteria.sort(this.sortBy, this.sortDirection, this.naturalSorting));

            return salesChannelCriteria;
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.salesChannelRepository
                .search(this.salesChannelCriteria)
                .then(searchresult => {
                    this.salesChannels = searchresult;
                });
        },

        getChangeset(salesChannelsIds) {
            const deleted = [];
            const added = [];

            salesChannelsIds.forEach((id) => {
                const foundSalesChannel = this.font.salesChannels.find((salesChannel) => {
                    return salesChannel.salesChannelId === id;
                });

                if (!foundSalesChannel) {
                    added.push(id);
                }
            });

            this.font.salesChannels.forEach((salesChannel) => {
                if (!salesChannelsIds.includes(salesChannel.salesChannelId)) {
                    deleted.push(salesChannel.salesChannelId);
                }
            });

            return { deleted, added };
        },

        getAssociationBySalesChannelId(salesChannelId) {
            return this.font.salesChannels.find((association) => {
                return association.salesChannelId === salesChannelId;
            });
        },

        handleLocalMode(deleted, added) {
            deleted.forEach((deletedId) => {
                const collectionEntry = this.getAssociationBySalesChannelId(deletedId);
                this.font.salesChannels.remove(collectionEntry.id);
            });

            added.forEach((newId) => {
                const newAssociation = this.areanetGoogleFontSalesChannelRepository.create(this.font.salesChannels.context);

                newAssociation.salesChannelId = newId;
                newAssociation.fontId = this.font.id;
                newAssociation.priority = 1;
                this.font.salesChannels.add(newAssociation);
            });
        },

        handleWithRepository(deleted, added) {
            deleted.forEach((deletedId) => {
                const associationEntry = this.getAssociationBySalesChannelId(deletedId);
                this.font.salesChannels.remove(associationEntry.id);
            });

            added.forEach((addedId) => {
                const newAssociation = this.areanetGoogleFontSalesChannelRepository.create(this.font.salesChannels.context);

                newAssociation.salesChannelId = addedId;
                newAssociation.fontId = this.font.id;
                this.font.salesChannels.add(newAssociation);
            });
        },
    },
};
