import baseURL from "../Api/baseURL";
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
const postData = async (url, data) => {
  const token = await getCookie("token");
  let res;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
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
