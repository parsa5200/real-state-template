import customAxios from "../customAxios";
const apartmentProduct = async () => {
  try {
    const res = await customAxios.get("/apartments");
    return res;
  } catch (e) {
    console.log({ e });
  }
};
export default apartmentProduct;
