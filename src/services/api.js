import axios from "axios";

const API_KEY = "1RUpxiG9rvUExY98idnsBhz-ePgUuG1mauJnRalrxyE";

export const fetchImages = async (query, page, perPage = 12) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: API_KEY,
    },
  });
  return response.data;
};
