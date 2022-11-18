import View from './View.js';
import icons from '../../img/icons.svg';

class SearchResults extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'We could not find results for that query.Please try another one';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(preview => {
        return `
        <li class="preview">
            <a class="preview__link preview__link--active" href="#${preview.id}">
              <figure class="preview__fig">
                <img src="${preview.image}" alt="${preview.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${preview.title}</h4>
                <p class="preview__publisher">${preview.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
        </li>
       `;
      })
      .join('');
  }
}

export default new SearchResults();
