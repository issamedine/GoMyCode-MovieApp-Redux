import {
  ADD_MOVIE,
  EDIT_MOVIE,
  REMOVE_MOVIE,
  SEARCH_INPUT,
  SEARCH_STAR
} from "./ActionType";

export const add = payload => {
  return {
    type: ADD_MOVIE,
    payload
  };
};

export const remove = id => {
  return {
    type: REMOVE_MOVIE,
    id
  };
};

export const edit = payload => {
  return {
    type: EDIT_MOVIE,
    payload
  };
};

export const searchInput = valueInput => {
  return {
    type: SEARCH_INPUT,
    valueInput
  };
};

export const searchStar = clickStar => {
  return {
    type: SEARCH_STAR,
    clickStar
  };
};
