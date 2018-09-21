import { appendComponent, reportValidity, getFormData  } from 'utils/utils';
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
    comments.innerHTML = 'Uppsssss, errorr!!!!';
  });
};

const loadComments = (commentsJson, comments) => {
  if (commentsJson.length === 0) {
    comments.innerHTML = 'No hay comentarios';
  } else {
   
    appendComponent(comments,
      commentsJson.map(commentsData => updateOpinionDetailComments(commentsData)));
  }
};

const updateOpinionDetailComments = ({
  name, lastName, email, comment, id
}) => {

  const comments = document.createElement('div');
  comments.classList.add('card-comments');
    
  comments.innerHTML = `<div class="flex-center">
                            <img src="https://cdn-images-1.medium.com/fit/c/45/45/1*SOZiX-rlw1aj5Sgd_gFnUA.jpeg" 
                                class="avatar-image">				
                            <div class="name-comment">
                              ${ name } ${ lastName }
                              <div class="email-comment">								
                                ${ email }
                              </div>
                            </div>
                          </div>
                              
                          <section>												
                            <div class="section-comment">
                              <p> ${ comment }</p>
                            </div>							
                          </section>`;
  return comments;
}

const labelCreateComment = document.getElementById('label-create-comments');
const commentWrapper = document.getElementById('comment-wrapper');
const cancelButton = document.getElementById('comment-form-cancel');


labelCreateComment.addEventListener('click', () => {
  commentWrapper.classList.remove('hide');
  labelCreateComment.classList.add('hide');
});

cancelButton.addEventListener('click', () => {
  commentWrapper.classList.add('hide');
  labelCreateComment.classList.remove('hide');
});

export const updateCommentForm = () => {
  const commentForm = document.getElementById('comment-form');
  const submitFormButton = document.getElementById('comment-form-submit');
  const formInputs = commentForm.getElementsByClassName('comment-input');
  const notice = document.getElementById('notice');

  const createComment = document.getElementById('create-comment');

  handleValidation(formInputs);

  submitFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitFormButton.disable = true;
    reportValidity(commentForm);
    if (commentForm.checkValidity()) {
      const commentServiceInstance = new CommentService();
      commentServiceInstance.postMessage(getFormData(formInputs)).then(
        (response) => {
          if (response === true) {
            PubSub.publish('reload');
            notice.innerHTML = 'El comentario se ha grabado correctamente!!!';
            commentWrapper.classList.add('hide');
            labelCreateComment.classList.remove('hide');
          }
        }
      );
      submitFormButton.disable = false;
    }
  });
};

const addCustomValidation = (input) => {
  if (input.value === input.value.toUpperCase()) {
    input.setCustomValidity('No introduzcas todo el texto en mayúsculas');
  } else {
    input.setCustomValidity('');
  }
};

const addErrorClass = (input) => {
  if (!input.checkValidity()) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
};

const handleValidation = (formInputs) => {
  for (let i = 0; i < formInputs.length; i += 1) {
    const input = formInputs[i];

    input.addEventListener('focus', () => {
      input.classList.add('focus');
    });

    input.addEventListener('blur', () => {
      input.classList.remove('focus');
      addCustomValidation(input);
      addErrorClass(input);
    });
  }
};

export default {
  createOpinionDetailComments,
  updateCommentForm
}
