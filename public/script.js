const fetchData = async () => {
  const API_URL = localStorage.getItem("apiUrl");

  if (API_URL) {
    const response = await fetchData(`${API_URL}/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

fetchData();
