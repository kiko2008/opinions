import { distanceInWords } from 'date-fns/distance_in_words';

export const createOpinion = ({
  title, author, photoUrl, videoUrl, description, publicDate, numComments, id
} = { title: 'No title', author: 'No author' }) => {
  const opinion = document.createElement('article');
  opinion.classList.add('opinion');
  var media = '';
  if(videoUrl != "") {
    media = `<div class="video-container">${videoUrl}</div>`;
  } else {
    media = `<img  src="${photoUrl}/320?image=${id*2}" 
    srcset="${photoUrl}/320?image=${id*2} 320w,
      ${photoUrl}/480?image=${id*2} 480w,
      ${photoUrl}/800?image=${id*2} 800w"
    class="opinion-image" alt="${title}"></img>`;
  }
  const distanceInWords = require('date-fns/distance_in_words');
  const es = require('date-fns/locale/es');
  const publishDate = distanceInWords(new Date(), new Date(publicDate), { locale: es });
  opinion.innerHTML =`  <div class="opinion-image-container">
                          <a class="opinion-title" href="/opinion?id=${id}">
                          ${media}
                          </a>
                          <p class="opinion-date">${ publishDate }</p>
                        </div>
                        <div class="opinion-title-container">
                          <div>
                            <a class="opinion-title" href="/opinion/?id=${id}">${title}</a>
                          </div>
                          <p class="opinion-description">${description}</p>                          
                          <p class="opinion-comments">
                            <a class="opinion-title" href="/opinion?id=${id}#opinion-detail-comments">${numComments} comentarios</a>
                          </p>
                          <div class="opinion-author">${author}</div>  
                        </div>                        
                      `;
  return opinion;
};

export default {
  createOpinion
};
