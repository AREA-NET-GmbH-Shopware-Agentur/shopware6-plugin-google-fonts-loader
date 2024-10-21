import api from "./api";

const { Application } = Shopware;

Application.addServiceProvider('customApiService', (container) => {
    const initContainer = Application.getContainer('init');

    return new api(initContainer.httpClient, container.loginService);
});