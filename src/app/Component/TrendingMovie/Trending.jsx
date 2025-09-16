'use client';
import { useState } from 'react';
import TrendingMovies from './DayTrending/DayTrendingMovie';
import * as TrendingStyled from './Trending.style';
import TrendingWeekMovies from './WeekTrendingMovie/WeekTrendingMovie';
export default function Trending() {
  const [period, setPeriod] = useState('day');

  return (
    <TrendingStyled.ColumnWrapper>
      <TrendingStyled.ContentWrapper>
        <TrendingStyled.Column>
          <TrendingStyled.ButtonContainer>
            <p>Trending</p>

            <TrendingStyled.SwitchContainer>
              <TrendingStyled.SwitchButton
                onClick={() => setPeriod('day')}
                className={period === 'day' ? 'active' : 'inactive'}
              >
                Today
              </TrendingStyled.SwitchButton>
              <TrendingStyled.SwitchButton
                onClick={() => setPeriod('week')}
                className={period === 'week' ? 'active' : 'inactive'}
              >
                This Week
              </TrendingStyled.SwitchButton>
            </TrendingStyled.SwitchContainer>
          </TrendingStyled.ButtonContainer>

          <TrendingStyled.TrendingScroller>
            <TrendingStyled.ColumnContent>
              {period === 'day' ? <TrendingMovies /> : <TrendingWeekMovies />}
            </TrendingStyled.ColumnContent>
          </TrendingStyled.TrendingScroller>
        </TrendingStyled.Column>
      </TrendingStyled.ContentWrapper>
    </TrendingStyled.ColumnWrapper>
  );
}
