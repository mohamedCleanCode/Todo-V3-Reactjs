import baseURL from "../Api/baseURL";

const postData = async (url, data) => {
  const res = await baseURL.post(url, data);
  return res;
};

export default postData;
