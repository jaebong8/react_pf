import axios from "axios";
const path = process.env.PUBLIC_URL;

export const getMember = async () => {
  const url = path + `/DB/member.json`;
  return await axios.get(url);
};

export const getYoutube = async () => {
  const key = "AIzaSyCIiUbJj1mOlyiNDy8QONEEYimF4Ta1qP4";
  const id = "PLCCz4evGBSLXFehGpZ1OxnWiMM-jrsddP";
  const num = 6;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;
  return await axios.get(url);
};

export const getFlickr = async (opt) => {
  const key = "28e7d1179792950a30beae3c69e7d9dd";
  const method1 = "flickr.interestingness.getList";
  const method2 = "flickr.photos.search";
  const num = 30;
  let url = "";
  if (opt.type === "interest") {
    url = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
  }
  if (opt.type === "search") {
    url = `https://www.flickr.com/services/rest/?method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
  }

  return await axios.get(url);
};

export const getGallery = async () => {
  const key = "28e7d1179792950a30beae3c69e7d9dd";
  const method2 = "flickr.people.getPhotos";
  const id = "195088691@N07";
  const num = 20;
  const url = `https://www.flickr.com/services/rest/?method=${method2}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${id}`;
  return await axios.get(url);
};
