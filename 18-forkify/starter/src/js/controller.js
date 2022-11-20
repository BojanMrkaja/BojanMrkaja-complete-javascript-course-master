import * as model from './model.js';
import recipeView from './viewes/recipeView.js';
import searchView from './viewes/searchView.js';
import searchResults from './viewes/searchResults.js';
import bookmarksView from './viewes/bookmarksView.js';
import paginationView from './viewes/paginationView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { state } from './model.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //1)Loading recipe
    await model.loadRecipe(id);

    //2)Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    searchResults.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  searchResults.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //update recipe servings(in state)
  model.updateServings(newServings);

  //update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
    recipeView.update(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
    recipeView.update(model.state.recipe);
  }
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPagination(controlPagination);
};

init();
