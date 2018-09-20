export const createOpinion = ({
  title, author, photoAuthor, mediaUrl, description, publicDate, numComments, id
} = { title: 'No title', author: 'No author' }) => {
  const opinion = document.createElement('div');
  opinion.classList.add('opinion');
  opinion.innerHTML =`
                        <div class="opinion-image-container">
                          <a class="opinion-title" href="/opinion?id=${id}">
                            <img src="${mediaUrl}" class="opinion-image" ></img>
                          </a>
                          <p class="opinion-date">${publicDate}</p>
                        </div>
                        <div class="opinion-title-container">
                          <div>
                            <a class="opinion-title" href="/opinion/?id=${id}">${title}</a>
                          </div>
                          <p class="opinion-description">${description}</p>                          
                          <p class="opinion-comments">${numComments} comentarios</p>
                          <div class="opinion-author">${author}</div>  
                        </div>
                                               
                      `;
  return opinion;
};

export default {
  createOpinion
};
