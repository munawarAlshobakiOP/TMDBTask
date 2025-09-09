"use client";
import styles from "./cardDetails.module.css";
import Image from "next/image";
import DonutChart from "../DonutChart/DonutChart";
import Link from "next/link";
export default function MediaDetailsContainer({ mediaData }) {
 const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;
  const data = mediaData;

  const imageUrl = data.poster_path
    ? `${IMAGE_BASE}/w500${data.poster_path}`
    :`${DEFAULT_IMAGE}`;

  const backdropUrl = data.backdrop_path
    ? `${IMAGE_BASE}/original${data.backdrop_path}`
    : null;

  function formatRuntime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: backdropUrl ? `url(${backdropUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        minHeight: "70vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 0,
        }}
      />
      <div
        className={styles.content}
        style={{ 
          position: "relative", 
          zIndex: 1,
          display: "flex",
          alignItems: "flex-start",
          minHeight: "60vh",
          padding: "1rem 1rem",
          paddingTop: "3rem",
        }}
      >
        <div className={styles.layout}>
          <div className={styles.poster}>
            <img
              src={imageUrl}
              alt={data.title || data.name}
              className={styles.posterImage}
            />
            <div className={styles.posterOverlay}>
              <span className={styles.posterOverlayText}>Expand </span>
            </div>
          </div>

          <div className={styles.details}>
            <h1 className={styles.title}>
              <span className={styles.titleName}>{data.title || data.name} </span> 
              <span className={styles.year}>
               ( {(data.release_date || data.first_air_date)?.slice(0, 4) ??
                  "Unknown"} )
              </span>
              
            </h1>

            <div className={styles.INfoSection}>
              <div className={styles.headerInfo}>
                <span className={styles.certificate}>
                  {data.certificate ?? "N/A"}
                </span>

                <span className={styles.genres}>
                  {(data.release_date || data.first_air_date) &&
                    new Date(
                      data.release_date || data.first_air_date
                    ).toLocaleDateString("en-GB", {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })}
                </span>

                <span className={styles.genres}>•</span>

                <span>
                  {data.genres?.length > 0 && (
                    <div className={styles.genres}>
                      <span>
                        {data.genres.map((genre) => genre.name).join(", ")}
                      </span>
                    </div>
                  )}
                </span>

                <span className={styles.genres}>•</span>

                <span className={styles.genres}>
                  {data.runtime && <p>{formatRuntime(data.runtime)}</p>}
                </span>
              </div>

              <div className={styles.ratingSection}>
                <div className={styles.userScore}>
                  <DonutChart
                    percentage={
                      data.vote_average ? Math.round(data.vote_average * 10) : 0
                    }
                    size={68}
                  />
                </div>
                <h4 className={styles.detailLabel}>
                  User <br /> Score
                </h4>
                <div className={styles.vibeText}>
                  what's your &nbsp;
                  <span className={styles.Spanvibes}> Vibe </span> ?
                </div>
              </div>
              <div className={styles.LiSection}>
                <ul className={styles.actionList}>
                  <li title="Login to create and edit custom lists">
                    <span className="iconCircle">
                      <span
                        className={styles.iconHeart}
                        title="Login to create and edit custom lists"
                      >
                        <Link href="#">
                          <Image
                            src="/assests/icon/lists.png"
                            alt="List"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <div className={styles.tooltip}>Login to create and edit custom lists</div>
                      </span>
                    </span>
                  </li>
                  <li title="Add to favourites">
                    <span className="iconCircle">
                      <span className={styles.iconHeart}>
                        <Link href="#">
                          <Image
                            src="/assests/icon/heart.png"
                            alt="Heart"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <div className={styles.tooltip}>Add to favourites</div>
                      </span>
                    </span>
                  </li>
                  <li title="Add to watchlist">
                    <span className="iconCircle">
                      <span className={styles.iconHeart}>
                        <Link href="#">
                          <Image
                            src="/assests/icon/bookmark.png"
                            alt="Bookmark"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <div className={styles.tooltip}>Add to watchlist</div>
                      </span>
                    </span>
                  </li>

                  <li title="Play Trailer">
                    <span className={styles.iconPlay}>
                      <Image
                        src="/assests/icon/play.png"
                        alt="Play"
                        width={24}
                        height={24}
                      />
                      <span className={styles.playText}>Play Trailer</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className={styles.overviewSection}>
                <h3>
                  <i>{data.tagline ?? "no tagline"}</i>
                </h3>
                <h3 className={styles.overviewTitle}>Overview</h3>
                <p className={styles.overviewText}>
                  {data.overview ?? "No overview available."}
                </p>
              </div>

              <div className={styles.detailsGrid}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
