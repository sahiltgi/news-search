import { NEWS_COUNTRY, NEWS_CATEGORIES, UPDATE_DATA } from "../Actions/action";

const initialState = {
  category: "business",
  country: "in",
  feeds: []
};

function newsApp(state = initialState, action) {
  switch (action.type) {
    case NEWS_CATEGORIES:
      return Object.assign({}, state, {
        category: action.category
      });
    case NEWS_COUNTRY:
      return Object.assign({}, state, {
        country: action.country
      });
    case UPDATE_DATA:
      return Object.assign({}, state, {
        feeds: action.feeds
      });
    default:
      return state;
  }
}

export default newsApp;
