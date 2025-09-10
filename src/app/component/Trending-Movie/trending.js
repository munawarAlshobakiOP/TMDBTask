"use client";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import TrendingMovies from "@/app/component/Trending-Movie/DayTrending/DayTrendingMovie"
import TrendingWeekMovies from "@/app/component/Trending-Movie/weekTrendingMovie/WeekTrendingMOvie"

const ColumnWrapper = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Column = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-weight: bold;
    margin: 0;
    font-size: 1.3rem;
  }
`;

const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  border: 0.0625rem solid #000;
  border-radius: 1.5625rem;
  padding: 0.125rem;
  gap: 0;
`;

const SwitchButton = styled.button`
  padding: 0.3rem 1.2rem;
  border: none;
  border-radius: 1.5625rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: transparent;
  color: #000;
  position: relative;
  z-index: 2;
  min-width: 4.375rem;

  &.active {
    background: linear-gradient(135deg, #01b4e4, #01d4aa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &.inactive {
    color: #000;
    background: transparent;
  }
`;

const SwitchSlider = styled.div`
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: calc(50% - 0.125rem);
  height: calc(100% - 0.25rem);
  background: #032541;
  border-radius: 1.5625rem;
  transition: all 0.3s ease;
  z-index: 1;

  &.sliderLeft {
    transform: translateX(0);
  }

  &.sliderRight {
    transform: translateX(100%);
  }
`;

const TrendingScroller = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const ColumnContent = styled.div`
  width: 100%;
`;

export default function Trending(){
  const [period, setPeriod] = useState("day"); 

  return (
    <ColumnWrapper>
      <ContentWrapper>
        <Column>
          <ButtonContainer>
            <p>Trending</p>
 
            <SwitchContainer>
              <SwitchButton
                onClick={() => setPeriod("day")}
                className={period === "day" ? "active" : "inactive"}
              >
                Today
              </SwitchButton>
              <SwitchButton
                onClick={() => setPeriod("week")}
                className={period === "week" ? "active" : "inactive"}
              >
                This Week
              </SwitchButton>
              <SwitchSlider className={period === "week" ? "sliderRight" : "sliderLeft"} />
            </SwitchContainer>
          </ButtonContainer>
          
          <TrendingScroller>
            <ColumnContent>
              {period === "day" ? <TrendingMovies/> : <TrendingWeekMovies />}
            </ColumnContent>
          </TrendingScroller>
        </Column>
      </ContentWrapper>
    </ColumnWrapper>
  );
}