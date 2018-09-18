import APIService from './API-service';

class OpinionService {
  constructor() {
    this.APIServiceInstance = new APIService();
    this.model = 'opinions';
  }

  async getOpinions() {
    return this.APIServiceInstance.get(this.model);
  }

  async getOpinion(id) {
    return this.APIServiceInstance.get(`${this.model}/${id}`);
  }

  async postOpinion(opinion) {
    return this.APIServiceInstance.post(opinion, this.model);
  }
}

export default OpinionService;
