class TokenService {
    constructor() {
        this.token = null;
    }

    setToken(newToken) {
        this.token = newToken;
    }

    getToken() {
        console.log(this.token)
        return this.token;
    }

    interceptRequest(requestConfig) {
        const token = this.getToken();

        if (token) {
            // If a token exists, add it to the Authorization header
            requestConfig.headers = {
                ...requestConfig.headers,
                Authorization: `Bearer ${token}`,
            };
        }

        return requestConfig;
    }
}

export default new TokenService();