import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { I_Waifu } from "interfaces/waifu";

interface I_Data {
  type: string;
  category: string;
}

export const waifuApi = createApi({
  reducerPath: "waifuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.waifu.pics/many/" }),
  endpoints: (builder) => ({
    getWaifu: builder.query<I_Waifu, unknown>({
      query: ({ type, category }: I_Data) => ({
        url: `${type}/${category}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ exclude: [] }),
      }),
    }),
  }),
});

export const { useGetWaifuQuery } = waifuApi;
