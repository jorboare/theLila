const baseUrl = import.meta.env.VITE_BASE_URL;

export const createService = () => {
  const petition = async (method, endpoint, body) => {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      mode: "cors",
    };
    return await fetch(baseUrl + endpoint, options);
  };

  const getFood = async () => petition("GET", "/food");
  const getDrinks = async () => petition("GET", "/drinks");

  return {
    getFood,
    getDrinks,
  };
};
