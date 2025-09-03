"use client";
import { useState } from "react";
import styles from "./trending.module.css";
import TrendingMovies from "@/app/component/Trending-Movie/DayTrending/DayTrendingMovie"
import TrendingWeekMovies from "@/app/component/Trending-Movie/weekTrendingMovie/WeekTrendingMOvie"

export default function Trending(){
  const [period, setPeriod] = useState("day"); 

  return (
    <div className={styles.column_wrapper}>
      <div className={styles.content_wrapper + ' wrap no_bottom_pad'}>
        <div className={styles.column}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => setPeriod("day")}
              className={`${styles.periodButton} ${period === "day" ? styles.active : styles.inactive}`}
            >
              Today
            </button>
            <button
              onClick={() => setPeriod("week")}
              className={`${styles.periodButton} ${period === "week" ? styles.active : styles.inactive}`}
            >
              This Week
            </button>
          </div>
          <div id="trending_scroller" className="media discover scroller_wrap should_fade is_fading">
            <div className={styles.column_content + ' flex scroller loaded'}>
              {period === "day" ? <TrendingMovies/> : <TrendingWeekMovies />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}