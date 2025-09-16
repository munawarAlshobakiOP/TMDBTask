import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.08);
  border: 0.0625rem solid rgba(227, 227, 227, 1);
  width: 11.25rem;
  min-width: 11.25rem;
  max-width: 11.25rem;
  flex: 0 0 11.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.5rem;
`;

export const Image = styled.img`
  width: 11.25rem;
  height: 12.875rem;
  
  object-fit: cover;
  border-radius: 0.2rem;
`;

export const Info = styled.div`
  padding: 0.5rem 0;
  text-align: center;
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: bolder;
  margin: 0.5rem 0 0.25rem 0;
  color: #1f1f1f;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Character = styled.p`
  font-size: 0.9rem;
  color: #1f1f1f;
  margin: 0;
`;

export const Scroller = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
  }
`;
export const LoadMoreCard = styled.div`
  width: 11.25rem;
  min-width: 11.25rem;
  max-width: 11.25rem;
  flex: 0 0 11.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;
export const LoadMoreA = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoadMoreSpan = styled.span`
  fontweight: bold;
  fontsize: 1rem;
  marginbottom: 0.5rem;
`;

export const LoadMoreButton = styled.button`
  margin-top: 0.625rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: bold;

  &:hover {
    background-color: #555;
  }
`;

export const CaStSectiondiv = styled.div`
  textalign: center;
  padding: 1.25rem;
  color: #666;
`;
export const Pragraph = styled.p``;

export const CastSection = styled.div`
  margin-top: 2rem;
  padding: 1rem 0;
`;
