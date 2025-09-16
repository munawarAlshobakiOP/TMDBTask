import styled from 'styled-components';
import { shouldForwardProp } from 'styled-components';

export const TopSection = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'backdropUrl',
})`
  display: none;

  @media (max-width: 48rem) {
    display: block;
    background-size: 120%;
    background-position: right center;
    background-image: ${({ backdropUrl }) =>
      backdropUrl ? `url(${backdropUrl})` : 'none'};
    background-color: #0f1419;
    min-height: 30vh;
    position: relative;
    margin-top: 3.5rem;
  }
`;

export const BackgroundOverlay = styled.div`
  @media (max-width: 48rem) {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

export const TopContent = styled.div`
  @media (max-width: 48rem) {
    position: relative;
    z-index: 2;
    display: flex;
    height: 30vh;
    align-items: flex-end;
    padding: var(--spacing-lg) 1rem;
    width: 100%;
    max-width: var(--width-container-max);
    margin: 0 auto;
  }
`;

export const LeftPoster = styled.div`
  @media (max-width: 48rem) {
    flex-shrink: 0;
    width: 8rem;
    height: 12rem;
    position: relative;
  }
`;

export const RightBackground = styled.div`
  @media (max-width: 48rem) {
    flex: 1;
    height: 100%;
  }
`;

// Mobile details section
export const MobileDetailsSection = styled.div`
  display: none;

  @media (max-width: 48rem) {
    display: block;
    background-color: #121212;
    color: var(--color-white);
    padding: 1.5rem 1rem;
    margin-top: 0;
  }
`;

export const MobileDetailsContent = styled.div`
  @media (max-width: 48rem) {
    max-width: 100%;
    margin: 0;
    padding: 0 0.5rem;
  }
`;

// Desktop container (hidden on mobile)
export const DesktopContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'backdropUrl',
})`
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 43.75rem;
  background-image: ${({ backdropUrl }) =>
    backdropUrl ? `url(${backdropUrl})` : 'none'};
  background-color: #0f1419;
  color: var(--color-white);
  display: flex;
  margin-top: var(--spacing-xl);

  @media (max-width: 48rem) {
    display: none;
  }
`;
export const Container = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'backdropUrl',
})`
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 43.75rem;
  background-image: ${({ backdropUrl }) =>
    backdropUrl ? `url(${backdropUrl})` : 'none'};
  background-color: #0f1419;
  color: var(--color-white);
  display: flex;
  margin-top: var(--spacing-xl);

  @media (max-width: 48rem) {
    min-height: 60vh;
  }
`;

export const Udiv = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 0;
`;
export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  min-height: 37.5rem;
  padding: var(--spacing-base) var(--spacing-base);
  padding-top: var(--spacing-3xl);
  max-width: var(--aligment-size);
  margin: 0 auto;
  padding: var(--spacing-2xl) 1.25rem;
  margin-top: 3.7rem;

  @media (max-width: var(--breakpoint-lg)) {
    max-width: var(--aligment-size-mobile);
    padding: var(--spacing-xl) 1rem;
  }

  @media (max-width: var(--breakpoint-md)) {
    padding: var(--spacing-lg) 0.75rem;
    margin-top: 3rem;
  }

  @media (max-width: 48rem) {
    align-items: flex-end;
    min-height: 50vh;
    padding: var(--spacing-lg) 1rem;
    padding-bottom: var(--spacing-2xl);
    margin-top: 0;
  }

  @media (max-width: var(--breakpoint-sm)) {
    padding: var(--spacing-md) 0.5rem;
    padding-bottom: var(--spacing-lg);
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const PosterImage = styled.img`
  transition: var(--transition-base);
  width: 20rem;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: 0 0.625rem 0.9375rem -0.1875rem rgba(0, 0, 0, 0.1);
  transition: opacity var(--transition-base);

  @media (max-width: 48rem) {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-md);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
  }

  @media (max-width: var(--breakpoint-md)) {
    width: 15rem;
  }

  @media (max-width: var(--breakpoint-sm)) {
    width: 12rem;
    height: auto;
    align-self: center;
    margin-bottom: var(--spacing-lg);
  }
`;
export const LayOut = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
  width: 100%;
  max-width: var(--aligment-size);
  margin: 0 auto;
  
  @media (min-width: 30rem) {
    flex-direction: row;
    align-items: stretch;
    gap: var(--spacing-3xl);
  }

  @media (max-width: 48rem) {
    flex-direction: row;
    align-items: flex-end;
    gap: var(--spacing-md);
    width: 100%;
    max-width: none;
  }
`;
export const PosterOverlay = styled.div`
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
  transition: opacity var(--transition-slow);
`;
export const Poster = styled.div`
  position: relative;
  flex-shrink: 0;
  min-height: 24rem;
  display: flex;
  align-items: stretch;

  &:hover ${PosterImage} {
    filter: blur(0.03125rem);
    opacity: 0.4;
  }

  &:hover ${PosterOverlay} {
    opacity: 1;
  }

  @media (max-width: 48rem) {
    min-height: 12rem;
    width: 8rem;
  }
`;

export const PosterOverlayText = styled.span`
  color: var(--color-white);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-md) var(--spacing-xl);
`;
export const DetailsDiv = styled.div`
  flex: 1;

  @media (max-width: 48rem) {
    flex: 1;
    padding-left: var(--spacing-sm);
  }
`;
export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-base);

  @media (max-width: 48rem) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
    line-height: 1.2;
  }
`;
export const TitleNAme = styled.span`
  &:hover {
    color: #b5bac2;
  }
`;
export const Syear = styled.span`
  color: #b5bac2;
`;
export const INfoSection = styled.div`
  @media (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;
export const HeaderInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-base);
  font-size: var(--font-size-base);
  color: var(--color-white);
  padding: var(--spacing-xs) 0;
  margin-bottom: var(--spacing-base);
  margin-top: -0.5rem;

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin-top: 0;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;
export const Certificate = styled.span`
  background: transparent;
  color: #9ca3af;
  border-radius: var(--radius-sm);
  padding: 0.15rem 0.65rem;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin-right: var(--spacing-sm);
  border: var(--border-width-thin) solid #9ca3af;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);

  @media (max-width: 48rem) {
    background: #202020;
    color: var(--color-white);
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: var(--font-weight-normal);
    margin-right: 0;
    border: 0.0625rem solid #404040;
    display: inline-block;
    margin-bottom: 0;
  }
`;
export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);

  @media (max-width: 48rem) {
    display: inline-flex;
    align-items: center;
    margin-bottom: 0;
    white-space: nowrap;
  }
`;

export const GenresSection = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xl);
  line-height: 1.5;

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    line-height: 1.4;
    text-align: center;
  }
`;
export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);

  @media (max-width: 48rem) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;
export const UserScore = styled.div`
  transition: var(--transition-all);

  &:hover {
    transform: translateY(-0.25rem) scale(1.1);
  }

  @media (max-width: 48rem) {
    .detail-page-donut-text {
      font-size: 1rem !important;
      font-weight: var(--font-weight-bold) !important;
    }
  }
`;

export const VibeText = styled.div`
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  border-radius: 624.9375rem;
  background-color: rgb(3, 37, 65);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)
    var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  transition: var(--transition-all);
  &:hover {
    transform: translateY(-0.25rem) scale(1.1);
    z-index: 10;
    box-shadow: 0 0.5rem 1.563rem rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 48rem) {
    background-color: transparent;
    padding: var(--spacing-xs);
    white-space: nowrap;
    font-size: 0.75rem;
    
    &:hover {
      background-color: transparent;
      transform: none;
      box-shadow: none;
    }
  }
`;
export const Spanvibes = styled.span`
  text-decoration: underline #01b4e4;
  text-decoration-thickness: 0.125rem;
`;
export const LiSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-2xl);
  align-items: center;
  margin-top: 1.125rem;

  @media (max-width: 48rem) {
    margin-top: 0;
    gap: 0.5rem;
    margin-left: 0.5rem;
  }
`;
export const ActionList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xl);

  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 48rem) {
    gap: 0.5rem;
    margin: 0;
    padding: 0;
  }
`;
export const h1 = styled.h1`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-sm);

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    font-weight: var(--font-weight-normal);
    margin: 0;
    line-height: 1.2;
    color: var(--color-white);
  }
`;

export const IconCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  background: #1a2233;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.08);
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ActionIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ToolTip = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  margin-top: 0.313rem;
  background: rgb(3, 37, 65);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
  z-index: 10;
  transition:
    opacity 0.2s,
    visibility 0.2s;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 0.3125rem solid transparent;
  }
`;

export const IconHeart = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgb(3, 37, 65);
  border-radius: var(--radius-full);
  cursor: pointer;

  img {
    filter: brightness(0) saturate(100%) invert(100%);
  }

  &:hover ${ToolTip} {
    visibility: visible;
    opacity: 1;
  }
`;

export const IConPlay = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: var(--transition-all);

  &:hover {
    color: rgb(218, 218, 218);
  }

  @media (max-width: 48rem) {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const PlayIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-all);
`;
export const PlayText = styled.span`
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-base);

  &:hover {
    color: hsl(0, 100%, 98.8%);
  }

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }
`;
export const OverviewSection = styled.div`
  margin-bottom: var(--spacing-xl);
  margin-top: var(--spacing-lg);

  @media (max-width: 48rem) {
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
  }
`;
export const OverviewTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-sm);

  @media (max-width: 48rem) {
    font-size: 1.25rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: 0.75rem;
    margin-top: 0;
    color: var(--color-white);
  }
`;

export const TaglineTitle = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  font-style: italic;
  margin-bottom: var(--spacing-base);
  color: #d1d5db;
  line-height: 1.4;

  @media (max-width: 48rem) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
    color: var(--color-white);
  }
`;

export const OverviewText = styled.p`
  color: #d1d5db;
  line-height: 1.625;
  text-align: justify;

  @media (max-width: 48rem) {
    color: var(--color-white);
    line-height: 1.5;
    text-align: left;
    font-size: 0.875rem;
    margin: 0;
  }
`;

export const Detailgrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);

  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-sm) 0;
  position: relative;
`;

export const EmojiItem = styled.div`
  position: relative;
  margin-left: ${({ index }) => (index > 0 ? '-0.75rem' : '0')};
  z-index: ${({ index }) => index + 1};
  transition: var(--transition-all);

  &:hover {
    z-index: 10;
    transform: translateY(-0.25rem) scale(1.1);
  }
`;

export const EmojiButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-full);
  border: 0.125rem solid transparent;
  background: transparent;
  backdrop-filter: blur(0.625rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-all);
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 2rem;
    height: 2rem;
    transition: var(--transition-all);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const EmojiTooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--spacing-xs);
  border: 0.0625rem solid var(--color-white);
  font-size: 0.5rem;
  font-weight: var(--font-weight-normal);
  white-space: nowrap;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3);
  visibility: hidden;
  opacity: 0;
  transition: var(--transition-base);
  z-index: 20;
  margin-top: 0.375rem;

  ${EmojiButton}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0.125rem);
    transition-delay: 0.5s;
  }
`;

