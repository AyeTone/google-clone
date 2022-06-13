import React from "react";
import { Link } from "react-router-dom";
import { Response } from "../reponse";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import Search from "../components/Search";
import {
  Description,
  LocalOffer,
  MoreVert,
  Room,
  SearchOutlined,
} from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  // Mock Data
  //   const data = Response;

  const results = data?.items.map((item) => {
    return (
      <div className="search-page__result">
        <a className="search-page__result--link" href={item.link}>
          {item.pagemap?.cse_image?.length > 0 &&
            item.pagemap?.cse_image[0]?.src && (
              <img
                className="search-page__result--img"
                src={item.pagemap?.cse_image[0]?.src}
                alt=""
              />
            )}
          {item.displayLink}
        </a>

        <a className="search-page__result--title" href={item.link}>
          <h2>{item.title}</h2>
        </a>
        <p className="search-page__result--para">{item.snippet}</p>
      </div>
    );
  });

  return (
    <div className="search-page">
      <div className="search-page__header">
        <Link to="/">
          <figure>
            <img
              className="search-page__logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
            />
          </figure>
        </Link>
        <div className="search-page__header--body">
          <Search hideButtons={false} />

          <div className="search-page__options">
            <div className="search-page__options--left">
              <div className="search-page__option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>
              <div className="search-page__option">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="search-page__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="search-page__option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search-page__option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="search-page__option">
                <MoreVert />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="search-page__options--right">
              <div className="search-page__option">
                <Link to="/settings">Setting</Link>
              </div>
              <div className="search-page__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="search-page__results">
          <p className="search-page__results--count">
            About {data?.searchInformation.formattedTotalResults} restuls (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {results}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
