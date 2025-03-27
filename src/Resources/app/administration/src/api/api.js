const { ApiService } = Shopware.Classes;

class api extends ApiService {
    constructor(httpClient, loginService, apiEndpoint = '_action/areanet-google-fonts') {
        super(httpClient, loginService, apiEndpoint);
    }

    downloadFont(fonts, id) {
        const apiRoute = `${this.getApiBasePath()}/download-font`;

        return this.httpClient.post(
            apiRoute,
            {
                fonts: fonts,
                id: id
            },
            {
                headers: this.getBasicHeaders()
            }
        ).then((response) => {
            return ApiService.handleResponse(response);
        });
    }

    uploadZip(zip) {
        const apiRoute = `${this.getApiBasePath()}/upload-zip`;

        return this.httpClient.post(apiRoute, zip, {
            headers: {
                ...this.getBasicHeaders(),
                'Content-Type': 'multipart/form-data',
            },
        }).then((response) => {
            return ApiService.handleResponse(response);
        });
    }
}

export default api;
