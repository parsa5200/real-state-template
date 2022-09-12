import customAxios from "../customAxios";
const landProduct = async () => {
  try {
    const res = await customAxios.get("/lands");
    return res;
  } catch (e) {
    console.log({ e });
  }
};
export default landProduct;
