import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com/search";



// const options = {
//   params: { query: "tiger", geo: "US", lang: "en" },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
//   },
// };

export const fetchFromAPI = async (options) => {

  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
};
