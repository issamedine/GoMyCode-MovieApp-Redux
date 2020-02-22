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
      title: "Space Opera",
      annee: "2018",
      rating: 5,
      image: "https://i2.wp.com/lageekosophe.com/wp-content/uploads/2018/01/Science-fiction-space-opera.png?fit=1200%2C600&ssl=1"
    },
    {
      id: 2,
      title: "Critique de Captive State",
      annee: "2019",
      rating: 5,
      image: "https://p2.cineserie.com/www.cineserie.com/wp-content/uploads/2019/04/captive-state-le-film-de-science-fiction-intelligent-de-la-semaine-1.png?fit=1200%2C600&quality=100&ssl=1&ver=1"
    },
    {
      id: 3,
      title: "Rogue One's Gareth Edwards",
      annee: "2019",
      rating: 2,
      image: "https://img.cinemablend.com/filter:scale/quill/c/a/3/0/1/9/ca30190074ee441223cad4977da96e32a46826e1.jpg?fw=1200"
    },
    {
      id: 4,
      title: "Timecop",
      annee: "2019",
      rating: 5,
      image: "https://cdn.sciencesensei.com/wp-content/uploads/2019/12/timecop.jpg"
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
