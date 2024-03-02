const env = import.meta.env;

export class Request {
    constructor(initApi = false) {
        this.baseUrl = initApi ? 
            env.VITE_APP_API_URL :
            env.VITE_APP_BASE_URL;
    }

    setHeaders(params = {}) {
        return {
            "Content-type": "application/json",
            ...params,
        }
    }

    Get(url) {
        return fetch(this.baseUrl + url, {
            headers: this.setHeaders(),
            method: "GET"
        })
    }

    Post(url, data) {
        return fetch(this.baseUrl + url, {
            headers: this.setHeaders(),
            method: "POST",
            body: JSON.stringify(data)
        })
    }
}