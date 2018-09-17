import APIService from './API-service';

class MessageService {
  constructor() {
    this.baseUrl = process.env.API_URL;
    this.APIServiceInstance = new APIService();
    this.model = 'messages';
  }

  async postMessage(message) {
    return this.APIServiceInstance.post(message, this.model);
  }
}

export default MessageService;
