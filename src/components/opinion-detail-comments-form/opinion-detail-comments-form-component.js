import { reportValidity, getFormData  } from 'utils/utils';
import CommentService from 'services/comment-service';
import PubSub from 'pubsub-js';

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

export default {
  updateCommentForm
}
