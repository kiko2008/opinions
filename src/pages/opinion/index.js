import { updateHeader } from 'components/header/header-component';
import { updateOpinionDetail } from 'components/opinion-detail/opinion-detail-component';
import { createOpinionDetailComments, updateCommentForm } from 'components/opinion-detail-comments/opinion-detail-comments-component';
import queryString from 'query-string';
import OpinionService from 'services/opinion-service';
import 'styles/main.scss';

const OpinionServiceInstance = new OpinionService();
const query = queryString.parse(window.location.search);
const opinionId = query && query.id;

if (opinionId) {
  OpinionServiceInstance.getOpinion(opinionId).then((opinionJSON) => {
    updateOpinionDetail(opinionJSON);
    PubSub.subscribe('reload', () => {
      createOpinionDetailComments(opinionId);   
    });    
  });
}
updateCommentForm();