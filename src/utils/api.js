export const getSerialNumber = async (url = '', data = {}) => {
  const response = await fetch(url, data);
  return response.json();
}