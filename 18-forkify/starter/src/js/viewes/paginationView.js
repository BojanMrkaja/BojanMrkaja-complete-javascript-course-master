import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //Pge 1, and there are other pages
    if (this._data.page === 1 && numPage > 1) {
      return `
          <button class="btn--inline pagination__btn--next" data-page = "${
            this._data.page + 1
          }">
            <span>${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    //Other page
    if (this._data.page < numPage) {
      return `
        <button class="btn--inline pagination__btn--prev" data-page = "${
          this._data.page - 1
        } ">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${this._data.page - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next" data-page = "${
          this._data.page + 1
        }">
            <span>${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button> 
      `;
    }

    //Last page
    if (this._data.page === numPage && numPage > 1) {
      return `
          <button class="btn--inline pagination__btn--prev" data-page = "${
            this._data.page - 1
          }">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${this._data.page - 1}</span>
          </button>
      `;
    }

    return '';
  }

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const page = +btn.dataset.page;
      handler(page);
    });
  }
}

export default new PaginationView();
