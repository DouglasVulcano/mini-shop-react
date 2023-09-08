import baseUrls from "./urls";
import ApiService from "./ApiService";

class ProductService extends ApiService {
  constructor() {
    super(baseUrls.baseUrl, "/products");
  }
}

const productService = new ProductService();

export default productService;
