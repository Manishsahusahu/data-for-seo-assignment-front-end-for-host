import axios from "axios";

const getSeoData = async function (targetUrl) {
  try {
    const response = await axios.post(process.env.API_URL, {
      targetUrl,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getSeoData;
