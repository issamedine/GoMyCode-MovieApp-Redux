import { ADD_MOVIE } from "./ActionType";
// import { movieList } from "../Components/DataMovies";
import {
  REMOVE_MOVIE,
  EDIT_MOVIE,
  SEARCH_INPUT,
  SEARCH_STAR
} from "./ActionType";

const initialState = {
  movieList: [
    {
      id: 1,
      title: "aa",
      annee: "2000",
      rating: 5,
      image: "https://fr.web.img2.acsta.net/pictures/19/03/13/15/49/5836891.jpg"
    },
    {
      id: 2,
      title: "bb",
      annee: "2000",
      rating: 5,
      image: "https://fr.web.img2.acsta.net/pictures/19/03/13/15/49/5836891.jpg"
    },
    {
      id: 3,
      title: "cc",
      annee: "2000",
      rating: 2,
      image: "https://fr.web.img2.acsta.net/pictures/19/03/13/15/49/5836891.jpg"
    },
    {
      id: 4,
      title: "dd",
      annee: "2000",
      rating: 5,
      image: "https://fr.web.img2.acsta.net/pictures/19/03/13/15/49/5836891.jpg"
    }
  ],
  filtredList: [],
  searchRating: 0
};
const reducers = (state = initialState, action) => {
  console.log("action", action);
  const { movieList } = state;
  switch (action.type) {
    case ADD_MOVIE: {
      const { payload } = action;
      const { movieList } = state;
      return { ...state, movieList: [...movieList, payload] };
    }
    case REMOVE_MOVIE:
      return {
        ...state,
        movieList: movieList.filter(el => el.id !== action.id)
      };

    case EDIT_MOVIE:
      return {
        ...state,
        movieList: movieList.map(el =>
          el.id === Number(action.payload.id) ? action.payload : el
        )
      };

    case SEARCH_INPUT:
      return {
        ...state,
        filtredList: state.movieList.filter(el =>
          el.title.includes(action.valueInput)
        )
      };

    case SEARCH_STAR:
      return {
        ...state,
        searchRating: action.clickStar,
        filtredList: movieList.filter(el => el.rating == action.clickStar)
      };
    default:
      return state;
  }
};

export default reducers;
