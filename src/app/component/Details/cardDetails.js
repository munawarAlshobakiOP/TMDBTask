"use client";
import Image from "next/image";
import DonutChart from "../DonutChart/DonutChart";
import Link from "next/link";
import styled from "styled-components";
import { shouldForwardProp } from 'styled-components';

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backdropUrl',
})`
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 70vh;
  background-image: ${({ backdropUrl }) =>
    backdropUrl ? `url(${backdropUrl})` : 'none'};
  background-color: #111827;
  color: white;
  display: flex;
  margin-top: 1.5rem;
`;

const Udiv= styled.div`
     position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          zIndex: 0;
`;
const Content = styled.div`
 position: relative;
          zIndex: 1;
          display: flex;
          alignItems: flex-start;
          minHeight: 60vh;
          padding: 1rem 1rem;
          paddingTop: 3rem;
            max-width: 75rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`;
   const PosterImage = styled.img`
    transition: filter 0.3s, opacity 0.3s;
    width: 16rem;
  height: 24rem;
  object-fit: cover;
  border-radius: .5rem;
  box-shadow: 0 .625rem .9375rem -0.1875rem rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s;


    `;
const LayOut= styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  @media (min-width: 48rem) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
    `;
 const PosterOverlay = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;

    `;
  const Poster = styled.div`
  position: relative;
  flex-shrink: 0;

  &:hover ${PosterImage} {
    filter: blur(0.03125rem);
    opacity: 0.4;
  }

  &:hover ${PosterOverlay} {
    opacity: 1;
  }
`;
 
   
    const PosterOverlayText = styled.span`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: .75rem 1.5rem;
    `;
    const DetailsDiv = styled.div`
  flex: 1;
    `;  
    const Title = styled.h1`
   font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
    `;
    const TitleNAme= styled.span`
   
   &:hover {
  color:#b5bac2;
}
    `;
    const Syear= styled.span`
color:#b5bac2;
    `;
    const INfoSection = styled.div`
    `;
    const HeaderInfo = styled.div`
      display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #fff;
  padding: .25rem 0;
  margin-bottom: 1rem;
  margin-top: -0.5rem;
    
    `;
    const Certificate = styled.span`
    background: transparent;
  color: #9ca3af;
  border-radius: .375rem;
  padding: .15rem .65rem;
  font-size: .75rem;
  font-weight: 600;
  margin-right: .5rem;
  border: .0625rem solid #9ca3af;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin-bottom: 1.5rem;
  `;
   const Genres = styled.div`
     display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin-bottom: 1.5rem;
   `;
   const RatingSection = styled.div`
    display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
   `;
const UserScore = styled.div`

&:hover{
  transform: translateX(.125rem);
}

`;
const VibeText = styled.div`
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  border-radius: 624.9375rem;
  background-color: rgb(3, 37, 65);
  color: #fff;
  padding: .5rem .5rem .5rem .75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 400;
  &:hover{
    transform: translateX(0.125rem) scale(1.00);
  z-index: 10;
  box-shadow: 0 .5rem 1.563rem rgba(0, 0, 0, 0.3);
  }
  `;
  const Spanvibes = styled.span`
   text-decoration: underline  #01b4e4;
    text-decoration-thickness: 0.125rem;

  `;
  const LiSection= styled.div`
   display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  margin-top: 1.125rem;

  
  `;
  const ActionList= styled.ul`
    display: flex;
  flex-direction: row;
  gap: 1.5rem;

  list-style: none;
  li { display: flex;
  align-items: center;
  justify-content: center;
}
   `;
   const IconCircle= styled.span`
     display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #1a2233;
  box-shadow: 0 .125rem .5rem rgba(0,0,0,0.08);
 img {
  width: 1.5rem;
  height: 1.5rem;}
   `;
    const ToolTip = styled.div`
    visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  margin-top: .313rem;
  background:  rgb(3, 37, 65);
  color: #fff;
  padding: .25rem .5rem;
  border-radius: .375rem;
  font-size:.75rem ;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 .125rem .5rem rgba(0, 0, 0, 0.2);
  z-index: 10;
  transition: opacity 0.2s, visibility 0.2s;`;
  
 const IconHeart = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgb(3, 37, 65);
  border-radius: 50%;
  cursor: pointer;

  img {
    filter: brightness(0) saturate(100%) invert(100%);
  }

  &:hover ${ToolTip} {
    visibility: visible;
    opacity: 1;
  }
`;
   
const IConPlay= styled.span`

display: flex;
  align-items: center;
  gap: .5rem;
  transition: all 0.3s ease;
  &:hover {
  color: #01b4e4;
  transform: scale(1.05);
  transition: all 0.3s ease;
}
  
  `;
const PlayText = styled.span`
font-size: 1rem;
  color: #fff;
  font-weight: 500;`;
  const OverviewSection = styled.div`
    margin-bottom: 1.5rem;
  margin-top: 2.5rem;
  
  `;
  const OverviewTitle = styled.h3`
   font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: .5rem;
  `;
    const OverviewText = styled.p` color: #d1d5db;
  line-height: 1.625;
  text-align: justify;`;
const Detailgrid= styled.div`
 display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 48rem) {
  .detailsGrid {
    grid-template-columns: 1fr 1fr;
  }
}
  
  
  
  `;
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
    <Container backdropUrl={backdropUrl}>
   
      <Udiv/>
     <Content>
        <LayOut >
          <Poster>
            <PosterImage
              src={imageUrl}
              alt={data.title || data.name}
            
            />
            <PosterOverlay>
              <PosterOverlayText>Expand </PosterOverlayText>
            </PosterOverlay>
          </Poster>

          <DetailsDiv>
            <Title>
              <TitleNAme>{data.title || data.name} </TitleNAme> 
              <Syear>
               ( {(data.release_date || data.first_air_date)?.slice(0, 4) ??
                  "Unknown"} )
              </Syear>
              
            </Title>

            <INfoSection>
              <HeaderInfo>
                <Certificate>
                  {data.certificate ?? "N/A"}
                </Certificate>

                <Genres>
                  {(data.release_date || data.first_air_date) &&
                    new Date(
                      data.release_date || data.first_air_date
                    ).toLocaleDateString("en-GB", {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })}
                </Genres>

                <Genres>•</Genres>

                <span>
                  {data.genres?.length > 0 && (
                    <Genres>
                      <span>
                        {data.genres.map((genre) => genre.name).join(", ")}
                      </span>
                    </Genres>
                  )}
                </span>

                <Genres>•</Genres>

                <Genres>
                  {data.runtime && <p>{formatRuntime(data.runtime)}</p>}
                </Genres>
              </HeaderInfo>

              <RatingSection>
                <UserScore >
                  <DonutChart
                    percentage={
                      data.vote_average ? Math.round(data.vote_average * 10) : 0
                    }
                    size={68}
                  />
                </UserScore>
                <h4>
                  User <br /> Score
                </h4>
                <VibeText>
                  what's your &nbsp;
                  <Spanvibes> Vibe </Spanvibes> ?
                </VibeText>
              </RatingSection>
              <LiSection>
                <ActionList>
                  <li title="Login to create and edit custom lists">
                    <IconCircle>
                      <IconHeart
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
                        <ToolTip>Login to create and edit custom lists</ToolTip>
                      </IconHeart>
                    </IconCircle>
                  </li>
                  <li title="Add to favourites">
                    <IconCircle>
                      <IconHeart>
                        <Link href="#">
                          <Image
                            src="/assests/icon/heart.png"
                            alt="Heart"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <ToolTip>Add to favourites</ToolTip>
                      </IconHeart>
                    </IconCircle>
                  </li>
                  <li title="Add to watchlist">
                    <IconCircle>
                      <IconHeart>
                        <Link href="#">
                          <Image
                            src="/assests/icon/bookmark.png"
                            alt="Bookmark"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <ToolTip>Add to watchlist</ToolTip>
                      </IconHeart>
                    </IconCircle>
                  </li>

                  <li title="Play Trailer">
                    <IConPlay>
                      <Image
                        src="/assests/icon/play.png"
                        alt="Play"
                        width={24}
                        height={24}
                      />
                      <PlayText>Play Trailer</PlayText>
                    </IConPlay>
                  </li>
                </ActionList>
              </LiSection>

              <OverviewSection>
                <h3>
                  <i>{data.tagline ?? "no tagline"}</i>
                </h3>
                <OverviewTitle>Overview</OverviewTitle>
                <OverviewText>
                  {data.overview ?? "No overview available."}
                </OverviewText>
              </OverviewSection>

              <Detailgrid></Detailgrid>
            </INfoSection>
          </DetailsDiv>
        </LayOut>
      </Content>
    </Container>
  );
}
