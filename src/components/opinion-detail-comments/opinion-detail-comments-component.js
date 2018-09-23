import { appendComponent } from 'utils/utils';
import CommentService from 'services/comment-service';
import PubSub from 'pubsub-js';

export const createOpinionDetailComments = (idOpinion) => {
  const commentServiceInstance = new CommentService();
  const comments = document.getElementById('opinion-detail-comments');
  comments.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

  commentServiceInstance.getComments(idOpinion).then((commentsJson) => {
    comments.innerHTML = '';
    loadComments(commentsJson, comments);
  }).catch(() => {
    comments.innerHTML = '<p class="important">Uppsssss, errorr!!!!</p>';
  });
};

const loadComments = (commentsJson, comments) => {
  if (commentsJson.length === 0) {
    comments.innerHTML = '<p class="important">No hay comentarios</p>';
  } else {   
    appendComponent(comments,
      commentsJson.map(commentsData => updateOpinionDetailComments(commentsData)));
  }
};

const updateOpinionDetailComments = ({
  name, lastName, email, comment, id
}) => {

  const comments = document.createElement('article');
  comments.classList.add('card-comments');    
  comments.innerHTML = `<div class="flex-center">
                            <img src="https://picsum.photos/100/100?image=1074" 
                                class="avatar-image">				
                            <div class="name-comment">
                              ${ name } ${ lastName }
                              <div class="email-comment">								
                                ${ email }
                              </div>
                            </div>
                          </div>							
                          <div class="section-comment">
                            <div> ${ comment }</div>
                          </div>`;
  return comments;
}

export default {
  createOpinionDetailComments
}