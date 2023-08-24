import baseURL from "../Api/baseURL";

const postData = async (url, data) => {
  let res;
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    res = await baseURL.post(url, data, config);
  } catch (err) {
    res = err;
  }

  return res;
};

export default postData;
