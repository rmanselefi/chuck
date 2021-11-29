import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Jumbotron from "../layouts/jumbotron/jumbotron";
import "./chuckDetail.css";
import "../chuck/chuckList.css";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import down from "../../assets/assets_Homework_Front-End_02/path-copy-3.png";
import left from "../../assets/assets_Homework_Front-End_02/arrow-left-copy-2.png";
import Footer from "../layouts/footer/footer";
import axios from "axios";

function ChuckDetail(props) {
  const location = useLocation();
  let joke = location.state.data;
  const [jokesList, setJokesList] = useState([]);
  const getJokes = async () => {
    try {
      const res = await axios.get(
        "https://api.chucknorris.io/jokes/search?query=all"
      );

      setJokesList(res.data.result);
    } catch (e) {}
  };
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div>
      <Jumbotron jokes={jokesList} />
      <div className="detail">
        <div className="grid row">
          <div className="col det">
            <div className="card detaill">
              <div className="selected">
                {joke.categories[0]?.toUpperCase()} JOKES
              </div>
              <div className="joke-value">{joke.value}</div>
            </div>

            <br />

            <div className="paginate">
              <div className="like">
                <FaRegThumbsUp className="thumbs-up" />
                <FaRegThumbsDown className="thumbs-down" />
              </div>
              <div className="paginate-btn">
                <button className="cat-loadmore prev">
                  <img
                    alt="show more"
                    className="prev-img"
                    src={left}
                    width="15"
                    height="15"
                  />
                  PREV JOKE{" "}
                </button>

                <button className="cat-loadmore">
                  NEXT JOKE{" "}
                  <img
                    alt="show more"
                    className="load-more-img"
                    src={down}
                    width="15"
                    height="15"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col">
            <div className="card top">
              <h4>The Top ten jokes this week</h4>
              <ul className="top-list">
                <li className="top-li">
                  <a className="top-link" href="!#">
                    Smoking Joke
                  </a>
                </li>
                <li className="top-li">
                  <a className="top-link" href="!#">
                    My Boss Joke
                  </a>
                </li>
                <li className="top-li">
                  <a className="top-link" href="!#">
                    Dirty Millionaire Joke
                  </a>
                </li>
                <li className="top-li">
                  <a className="top-link" href="!#">
                    The Annoying Neighbor
                  </a>
                </li>
                <li className="top-li">
                  <a className="top-link" href="!#">
                    Knock Knock
                  </a>
                </li>
                <li className="top-li">
                  <a className="top-link" href="!#">
                    Why Tyson Lisps
                  </a>
                </li>
                <li className="top-li">
                  <a className="top-link" href="!#">
                    The Drunk Police Officer
                  </a>
                </li>
                <li className="top-li">
                  <a className="top-link" href="!#">
                    My Hip Dad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChuckDetail;
