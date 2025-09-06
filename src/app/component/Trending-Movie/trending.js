"use client";
import { useState } from "react";
import Link from "next/link";
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
           <p>Trending</p>
 
              <div className={styles.switchContainer}>
                <button
                  onClick={() => setPeriod("day")}
                  className={`${styles.switchButton} ${period === "day" ? styles.switchActive : styles.switchInactive}`}
                >
                  Today
                </button>
                <button
                  onClick={() => setPeriod("week")}
                  className={`${styles.switchButton} ${period === "week" ? styles.switchActive : styles.switchInactive}`}
                >
                  This Week
                </button>
                <div className={`${styles.switchSlider} ${period === "week" ? styles.sliderRight : styles.sliderLeft}`}></div>
              </div>
           
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