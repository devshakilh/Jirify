import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  reducerPath: "api",
  endpoints: () => ({}),
});

export default apiSlice;
