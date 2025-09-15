'use client';
import DonutChart from '../Donut_Chart/Donut_Chart';
import Link from 'next/link';
import * as styled from './card_Details.styled';
import { actionItems, emojiReactions } from '../../data/dataG';

export const MediaTitle = ({ data }) => (
  <styled.Title>
    <styled.TitleNAme>{data.title || data.name}</styled.TitleNAme>
    <styled.Syear>
      ({' '}
      {(data.release_date || data.first_air_date)?.slice(0, 4) ?? 'Unknown'}{' '}
      )
    </styled.Syear>
  </styled.Title>
);

export const UserScore = ({ data, emojiReactions, size = 50, ringThickness = 3 }) => (
  <styled.RatingSection>
    <styled.UserScore>
      <DonutChart
        percentage={data.vote_average ? Math.round(data.vote_average * 10) : 0}
        size={size}
        textClassName='detail-page-donut-text'
        ringThickness={ringThickness}
      />
    </styled.UserScore>
    <styled.h1>
      User <br /> Score
    </styled.h1>
    <styled.EmojiContainer>
      {emojiReactions.map((emoji, index) => (
        <styled.EmojiItem key={emoji.id} index={index}>
          <styled.EmojiButton>
            <img
              src={emoji.image}
              alt={emoji.alt}
              width={24}
              height={24}
            />
            <styled.EmojiTooltip>
              {emoji.description}
            </styled.EmojiTooltip>
          </styled.EmojiButton>
        </styled.EmojiItem>
      ))}
    </styled.EmojiContainer>
    <styled.VibeText>
      what's your &nbsp;
      <styled.Spanvibes> Vibe </styled.Spanvibes> ?
    </styled.VibeText>
  </styled.RatingSection>
);

export const MediaInfo = ({ data, formatDate, formatRuntime, formatGenres, showGenres = false }) => (
  <styled.HeaderInfo>
    <styled.Certificate>
      {data.certificate ?? 'N/A'}
    </styled.Certificate>
    <styled.Genres>
      {formatDate(data.release_date || data.first_air_date)}
    </styled.Genres>
    {showGenres && (
      <styled.Genres>• {formatGenres(data.genres)}</styled.Genres>
    )}
    <styled.Genres>• {formatRuntime(data.runtime)}</styled.Genres>
  </styled.HeaderInfo>
);

export const OverviewSection = ({ data }) => (
  <styled.OverviewSection>
    <styled.TaglineTitle>
      {data.tagline ?? 'no tagline'}
    </styled.TaglineTitle>
    <styled.OverviewTitle>Overview</styled.OverviewTitle>
    <styled.OverviewText>
      {data.overview ?? 'No overview available.'}
    </styled.OverviewText>
  </styled.OverviewSection>
);

export const ActionButtons = ({ actionItems }) => (
  <styled.LiSection>
    <styled.ActionList>
      {actionItems.map(item => {
        const IconComponent = item.icon;
        return (
          <li key={item.id} title={item.title}>
            {item.isPlayButton ? (
              <styled.IConPlay>
                <styled.PlayIcon>
                  <IconComponent />
                </styled.PlayIcon>
                <styled.PlayText>{item.title}</styled.PlayText>
              </styled.IConPlay>
            ) : (
              <styled.IconCircle>
                <styled.IconHeart>
                  <Link href={item.href}>
                    <styled.ActionIcon>
                      <IconComponent />
                    </styled.ActionIcon>
                  </Link>
                  <styled.ToolTip>{item.tooltip}</styled.ToolTip>
                </styled.IconHeart>
              </styled.IconCircle>
            )}
          </li>
        );
      })}
    </styled.ActionList>
  </styled.LiSection>
);
