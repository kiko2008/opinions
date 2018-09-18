export const createOpinion = ({
  title, author, imageUrl, id
} = { title: 'No title', author: 'No author' }) => {
  const opinion = document.createElement('div');
  opinion.classList.add('opinion');
  opinion.innerHTML =`<div class="opinion-image-container">
                        <a class="opinion-title" href="/opinion/?id=${id}">
                          <img src="${imageUrl}" class="opinion-image" ></img>
                        </a>
                      </div>
                      <div class="opinion-title-container">
                        <div>
                          <a class="opinion-title" href="/opinion/?id=${id}">${title}</a>
                        </div>
                        <p class="opinion-author">${author}</p>
                      </div>`;
  return opinion;
};

export default {
  createOpinion
};
