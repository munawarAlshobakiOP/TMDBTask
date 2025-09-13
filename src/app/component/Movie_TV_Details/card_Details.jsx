"use client";
import Image from "next/image";
import DonutChart from "../Donut_Chart/Donut_Chart";
import Link from "next/link";
import * as styled from "./card_Details.styled";
import { actionItems, emojiReactions } from "../../data/dataG";
import { OpenWith_Icon } from "../../assests/icons";
const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;


export default function MediaDetailsContainer({ mediaData }) {
  const data = mediaData;
  const imageUrl = data.poster_path
    ? `${IMAGE_BASE}/w500${data.poster_path}`
    :`${DEFAULT_IMAGE}`;

  const backdropUrl = data.backdrop_path
    ? `${IMAGE_BASE}/original${data.backdrop_path}`
    : null;

  function formatRuntime(minutes) {
    if (!minutes) return 'Runtime not available';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  }

  function formatDate(dateString) {
    if (!dateString) return 'Release date not available';
    return new Date(dateString).toLocaleDateString('en-GB', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  }

  function formatGenres(genres) {
    if (!genres || genres.length === 0) return 'Genre not specified';
    return genres.map(genre => genre.name).join(', ');
  }

  
  return (
    <styled.Container backdropUrl={backdropUrl}>
   
      <styled.Udiv/>
     <styled.Content>
        <styled.LayOut >
          <styled.Poster>
            <styled.PosterImage
              src={imageUrl}
              alt={data.title || data.name}
            />
            <styled.PosterOverlay>
              <styled.PosterOverlayText>  <OpenWith_Icon /> Expand </styled.PosterOverlayText>
            </styled.PosterOverlay>
            
          </styled.Poster>

          <styled.DetailsDiv>
            <styled.Title>
              <styled.TitleNAme>{data.title || data.name} </styled.TitleNAme> 
              <styled.Syear>
               ( {(data.release_date || data.first_air_date)?.slice(0, 4) ??
                  "Unknown"} )
              </styled.Syear>
            </styled.Title>
        

            <styled.INfoSection>
              <styled.HeaderInfo>
                <styled.Certificate>
                  {data.certificate ?? 'N/A'}
                </styled.Certificate>

                <styled.Genres>
                {formatDate(data.release_date || data.first_air_date)}
                </styled.Genres>
                
                <styled.Genres>
                • {formatGenres(data.genres)}
                </styled.Genres>

                <styled.Genres>
                   • {formatRuntime(data.runtime)}
                </styled.Genres>

              </styled.HeaderInfo>

              <styled.RatingSection>
                <styled.UserScore >
                  <DonutChart
                    percentage={
                      data.vote_average ? Math.round(data.vote_average * 10) : 0
                    }
                    size={60}
                    textClassName="detail-page-donut-text"
                    ringThickness={4}
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
              <styled.LiSection>
                <styled.ActionList>
                  {actionItems.map((item) => {
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

              <styled.OverviewSection>
                <styled.TaglineTitle>
                  {data.tagline ?? "no tagline"}
                </styled.TaglineTitle>

                <styled.OverviewTitle>Overview</styled.OverviewTitle>
              
                <styled.OverviewText>
                  {data.overview ?? "No overview available."}
                </styled.OverviewText>
              </styled.OverviewSection>

              <styled.Detailgrid></styled.Detailgrid>
                </styled.INfoSection>
          </styled.DetailsDiv>
        </styled.LayOut>
      </styled.Content>
    </styled.Container>
  );
}
