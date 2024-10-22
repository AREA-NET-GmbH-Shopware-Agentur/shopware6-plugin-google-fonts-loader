const { Component, Context } = Shopware;
const { EntityCollection } = Shopware.Data;

Component.extend('areanet-google-fonts-loader-create', 'areanet-google-fonts-loader-detail', {
    methods: {
        getFont() {
            let entity = this.fontRepository.create(Shopware.Context.api);

            if (this.$route.params) {
                Object.assign(entity, this.$route.params);
            }

            this.font = entity;
        },
        onClickSave() {
            this.isLoading = true;
            this.fontRepository
                .save(this.font, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    this.loadFont(this.font.id);
                    this.$router.push({name: 'areanet.google.fonts.loader.detail', params: {id: this.font.id}});
                }).catch((exception) => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$t('areanet-google-fonts-loader.notification.errorTitle'),
                    message: exception
                });
            });
        }
    }
});
