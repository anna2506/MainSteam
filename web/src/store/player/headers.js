function getHeaders() {
  const token = localStorage.getItem('token');
  return {
    headers: { Authorization: token },
  };
}

export default getHeaders;
