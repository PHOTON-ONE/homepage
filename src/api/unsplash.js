import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
            'Client-ID 60abf3ef4111358e2b7b04cb91f9d72aed2e7b22d7006ffda0057299661d4eae'
    }
});