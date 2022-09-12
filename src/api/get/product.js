import customAxios from "../customAxios";
const products = async () => {
  try {
    const res = await customAxios.get("/villas");
    return res;
  } catch (e) {
    console.log({ e });
  }
};
export default products;
