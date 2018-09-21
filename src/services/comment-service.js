import APIService from './API-service';

class CommentService {
  constructor() {
    this.baseUrl = process.env.API_URL;
    this.APIServiceInstance = new APIService();
    this.model = 'comments';
  }

  async getComments(idOpinion) {
    return this.APIServiceInstance.get(`${this.model}/?idOpinion=${idOpinion}`);
  }

  async postMessage(message) {
    return this.APIServiceInstance.post(message, this.model);
  }
}

export default CommentService;
