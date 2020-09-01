import axios from 'axios';

const config = {
  headers: {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json', 
  },
};

/**
 * fetches list of anime from a specific category
 * returns array of anime object
 * 
 * @param {string} category category of anime to be fetched
 * @param {int} page api uses pagination, this is used to fetch next page
 */
export const fetchCategory = async (category, page = 0) => {
  const uri = `https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${category}&page%5Blimit%5D=20&page%5Boffset%5D=${page}`;
  try {
    const res = await axios.get(uri, config);
    return {success: true, data: res.data.data};
  } catch (_ignore) {
    return {success: false};
  };
}

/**
 * fetches list of trending anime to be displayed
 * on the discover page
 * 
 */
export const fetchTrending = async () => {
  const uri = `https://kitsu.io/api/edge/trending/anime`;
  try {
    const res = await axios.get(uri, config);
    return {success: true, data: res.data.data};
  } catch (_ignore) {
    return {success: false};
  }
}