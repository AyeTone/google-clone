import { MicOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./Search.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{ term }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function search(e) {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("../search", { replace: false });
  }

  return (
    <form className="search" onSubmit={(e) => search(e)}>
      <div className="search__input">
        <SearchOutlined htmlColor="gray" />
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <MicOutlined />
      </div>

      {hideButtons && (
        <div className="search__buttons">
          <Button type="submit">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
