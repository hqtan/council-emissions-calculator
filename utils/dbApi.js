// const url = 'http://icanhazip.com';
const url = 'http://localhost:8080';

const sendFormResponse = async (resp) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resp),
  };
  const apiResponse = await fetch(url, params);
  const text = await apiResponse.text();
  console.log(`sendFormResponse : (status: ${apiResponse.status}) ${JSON.stringify(text, null, '\t')}`);
};

export default sendFormResponse;