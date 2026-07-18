import axios from "axios";

const ApiService = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4444",
    headers: {
        "Content-Type": "application/json"
    }
});

export { ApiService };
