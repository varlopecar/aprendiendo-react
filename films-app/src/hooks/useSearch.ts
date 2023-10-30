import { useState, useEffect, useRef } from "react";

const useSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("Input is empty");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Input cannot be a number");
      return;
    }

    if (search.length < 3) {
      setError("Input must be at least 3 characters");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
};

export default useSearch;
