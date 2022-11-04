import axios from "axios";

export const getData = async (base) => {
  const { data } = await axios.get(
    `https://api.apilayer.com/exchangerates_data/latest?symbols=&base=${base}`,
    {
      headers: {
        apikey: "rA9U9Wr3Tcq4Eg0KzstPN8DSWlnoBTpW",
      },
    }
  );
  localStorage.setItem("data", JSON.stringify(data));
  return data;
};
