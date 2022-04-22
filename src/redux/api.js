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
