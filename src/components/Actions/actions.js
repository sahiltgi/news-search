export const NEWS_COUNTRY = "NEWS_COUNTRY";
export const NEWS_CATEGORIES = "NEWS_CATEGORIES";
export const UPDATE_DATA = "UPDATE_DATA";
// export const NEWS_LANGUAGES = "NEWS_LANGUAGES";

export function news_country(country) {
  return {
    type: NEWS_COUNTRY,
    country
  };
}

export function news_categories(category) {
  return {
    type: NEWS_CATEGORIES,
    category
  };
}

export function update_data(feeds) {
  return {
    type: UPDATE_DATA,
    feeds
  };
}
// export function news_languages(language) {
//   return {
//     type: NEWS_LANGUAGES,
//     language
//   };
// }
