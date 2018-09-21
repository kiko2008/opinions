import meeseeksUrl from 'assets/nature-500.jpg';

const isLiked = id => localStorage.getItem(`opinion-${id}`);
console.log("isLiked = " + isLiked);


const toggleLike = (id) => {
  const likeValue = isLiked(id) === 'true' ? 'false' : 'true';
  console.log("isLiked toggle = " + likeValue);
  console.log("id toggle = " + id);
  localStorage.setItem(`opinion-${id}`, likeValue);
};

const setInitialLikeValue = (likeButton, liked) => {
  if (liked === 'true') likeButton.children[0].classList.add('fas');
};

export const updateOpinionDetail = ({
  title, author, photoAuthor, mediaUrl, articleText, category, id
} = { title: 'No title', author: 'No author' }) => {

  const categoriesTag = document.getElementsByClassName('header-categories');
  categoriesTag[0].classList.add('hide');
  const opinion = document.getElementById('opinion-detail');
  const descriptionDiv = articleText ? (
    `<div class="opinion-detail-description">
      ${articleText}
    </div>`
  ) : '';
  
  const image = mediaUrl !== '' ? mediaUrl : meeseeksUrl;
  opinion.innerHTML = `
    <img src="${mediaUrl}" class="opinion-image" ></img>
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
};

export default {
  updateOpinionDetail
};
