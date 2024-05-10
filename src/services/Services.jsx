import { createClient } from "contentful";
const space = import.meta.env.VITE_SPACE;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export const getFood = async () => {
  return await client.getEntries({
    content_type: "comida",
  });
};
export const getDrinks = async () => {
  return await client.getEntries({
    content_type: "bebida",
  });
};
