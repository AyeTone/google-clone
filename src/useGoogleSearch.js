import React, { useEffect, useState } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "e7ef969c63b7def66";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
