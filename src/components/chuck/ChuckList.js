import React, { useEffect, useState } from "react";
import axios from "axios";
import "./chuckList.css";
import down from "../../assets/assets_Homework_Front-End_01/path-copy-7@2x.png";
import right from "../../assets/assets_Homework_Front-End_01/path-copy-3@2x.png";
import Jumbotron from "../layouts/jumbotron/jumbotron";
import { Navigate, Link } from "react-router-dom";

function ChuckList() {
  const [jokes, setJokes] = useState([]);
  const [jokesList, setJokesList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(12);
  const [catLimit, setCatLimit] = useState(10);
  const [category, setCategory] = useState("explicit");
  const getJokes = async () => {
    try {
      const res = await axios.get(
        "https://api.chucknorris.io/jokes/search?query=all"
      );
      const filteres = res.data.result.filter(
        (filt) => filt.categories[0] === category
      );
      setJokes(filteres);
      setJokesList(res.data.result)
    } catch (e) {}
  };

  const getCategories = async () => {
    try {
      const res = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      setCategories(res.data);
    } catch (e) {}
  };
  useEffect(() => {
    getCategories();
    getJokes();
  }, []);

  const onLoadMore = () => {
    setCatLimit(catLimit + 100);
  };

  const onLoadMoreValue = () => {
    setLimit(limit + 12);
  };

  const onCategoryClick = async (e, cat) => {
    const res = await axios.get(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    const filteres = res.data.result.filter(
      (filt) => filt.categories[0] === cat
    );
    setCategory(cat);
    setJokes(filteres);
  };

  return (
    <div className="wrapper">
      {jokes.length > 0 && <Jumbotron jokes={jokesList} />}
      <div className="section-body">
        <div className="category">
          {categories.slice(0, catLimit).map((cat, key) => {
            return (
              <button
                align="center"
                className={"categories " + cat}
                onClick={(e) => onCategoryClick(e, cat)}
                key={key}
              >
                {cat.toUpperCase() + " JOKES"}
              </button>
            );
          })}
        </div>
        <button className="cat-loadmore" onClick={onLoadMore}>
          VIEW All{" "}
          <img
            alt="show more"
            className="load-more-img"
            src={down}
            width="15"
            height="15"
          />
        </button>
        <br />

        <div className="selected">{category.toUpperCase()} JOKES</div>
        <br />
        <div className="grid">
          {jokes.slice(0, limit).map((joke, key) => {
            return (
              <div className="col" key={key}>
                <div className="card">
                  <div className="joke-title">
                    {joke.categories[0]?.toUpperCase()} JOKES
                  </div>
                  <div className="joke-value">{joke.value}</div>
                  <div className="joke-link">
                    <Link
                      to={{
                        pathname: "/detail",
                      }}
                      state={{
                        data: joke,
                      }}
                    >
                      <button
                        className="btn"
                        //   onClick={(e) => detailClick(e, joke)}
                      >
                        SEE STATS{" "}
                        <img
                          alt="show more"
                          className="load-more-img"
                          src={right}
                          width="15"
                          height="15"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br/>
        <div className="grid">
          <div className="col"></div>
          <div className="load-more-button col">
            {jokes.length > 10 ? (
              <button className="cat-loadmore" onClick={onLoadMoreValue}>
                VIEW All{" "}
                <img
                  alt="show more"
                  className="load-more-img"
                  src={down}
                  width="15"
                  height="15"
                />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default ChuckList;
