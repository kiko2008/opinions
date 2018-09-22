import PubSub from 'pubsub-js';

const isLiked = id => localStorage.getItem(`opinion-${id}`);
console.log("isLiked = " + isLiked);


const toggleLike = (id) => {
  const likeValue = isLiked(id) === 'true' ? 'false' : 'true';
  localStorage.setItem(`opinion-${id}`, likeValue);
};

const setInitialLikeValue = (likeButton, liked) => {
  if (liked === 'true') likeButton.children[0].classList.add('fas');
};

export const updateOpinionDetail = ({
  title, author, photoAuthor, photoUrl, videoUrl, articleText, category, id
} = { title: 'No title', author: 'No author' }) => {

  const categoriesTag = document.getElementsByClassName('header-categories');
  categoriesTag[0].classList.add('hide');
  const opinion = document.getElementById('opinion-detail');
  const descriptionDiv = articleText ? (
    `<div class="opinion-detail-description">
      ${articleText}
    </div>`
  ) : '';
  
  var media = '';
  if(videoUrl != "") {
    media = `<div class="video-container">${videoUrl}</div>`;
  } else {
    media = `<img src="${photoUrl}/320" 
    srcset="${photoUrl}/320 320w,
            ${photoUrl}/480 480w,
            ${photoUrl}/800 800w,
            ${photoUrl}/1200 1200w,
            ${photoUrl}/1800 1800w"
    class="opinion-image" alt="${title}"></img>`;
  }

  opinion.innerHTML = `
    ${ media }   
    <div class="title-container">
      <p title="opinion category" class="title-category">${category}</p>
      <h2 title="opinion title" class="opinion-title">
        ${title}
        <button id="like-button" class="like-button">
          <i class="far fa-heart"></i>
        </button> 
      </h2>
    
    </div>
    <div class="description-detail-container">
      ${descriptionDiv}
    </div>
    
    <p title="Author" class="opinion-author">
      <img src="${photoAuthor}" class="opinion-image-author" ></img>
      <span>${author}</span>
    </p>
    <input type="hidden" id="idOpinion" value=${id} />`;

  const likeButton = document.getElementById('like-button');

  setInitialLikeValue(likeButton, isLiked(id));

  likeButton.addEventListener('click', () => {
    likeButton.children[0].classList.toggle('fas');
    toggleLike(id);
  });
  PubSub.publish('reload');
};

export default {
  updateOpinionDetail
};
