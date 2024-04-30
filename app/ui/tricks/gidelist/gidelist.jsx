"use client";
import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { fetchVideos } from "../../../api/youtube";
import styles from "./gidelist.module.css";
import Loader from "../../client-loader/client-loader";

export default function GideList({ title, playlistID }) {
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);

  const getVideos = async (token) => {
    try {
      setError(false);
      setIsLoading(true);

      const results = await fetchVideos(playlistID, token);

      setSearchedVideos(results.items);
      setNextPageToken(results.nextPageToken);
      setPrevPageToken(results.prevPageToken);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handleClick = (type) => {
    if ((type = "next")) {
      getVideos(nextPageToken);
    }
    if ((type = "prev")) {
      getVideos(prevPageToken);
    }
  };

  return (
    <section className={`content-wrap ${styles.gide}`}>
      <h1 className={styles.title}>{title}</h1>

      {error ? <p>An error occurred, please try again later...</p> : null}

      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.list}>
          {searchedVideos.map((element) => (
            <li key={element.id} className={styles.card}>
              <div className={styles.videoWrap}>
                <iframe
                  width="400"
                  height="250"
                  src={`https://www.youtube.com/embed/${element.snippet.resourceId.videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className={styles.video}
                ></iframe>
              </div>
              <div className={styles.description}>
                <h2 className={styles.cardTitle}>{element.snippet.title}</h2>
                <p>Автор відео: {element.snippet.channelTitle}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {searchedVideos.length ? (
        <div className={styles.buttonWrap}>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleClick("prev")}
            disabled={!prevPageToken}
          >
            <GrPrevious />
          </button>
          <GoDotFill />
          <GoDotFill />
          <GoDotFill />
          <button
            className={styles.button}
            type="button"
            onClick={() => handleClick("next")}
            disabled={!nextPageToken}
          >
            <GrNext />
          </button>
        </div>
      ) : null}
    </section>
  );
}
