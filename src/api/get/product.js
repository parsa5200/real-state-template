import customAxios from "../customAxios";
const products = async () => {
  try {
    const resVillas = await customAxios.get("/villas");
    return resVillas;
  } catch (e) {
    console.log({ e });
  }
};
export default products;
