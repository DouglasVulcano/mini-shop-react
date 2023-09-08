import axios from "axios";

class ApiService {
  constructor(baseUrl, endpoint) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl + endpoint,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  get() {
    return this.axiosInstance.get("");
  }

  getById(id) {
    return this.axiosInstance.get(`/${id}`);
  }

  // Configuração personalizada de cabeçalhos
  setHeaders(headers) {
    this.axiosInstance.defaults.headers = headers;
  }

  // Configuração personalizada de parâmetros de consulta
  setQueryParams(params) {
    this.axiosInstance.defaults.params = params;
  }
}

export default ApiService;
