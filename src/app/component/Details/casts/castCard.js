import styled from 'styled-components';

const Card = styled.div`
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

const Image = styled.img`
  width: 11.25rem;
  height: 16.875rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Info = styled.div`
  padding: 0.5rem 0;
  text-align: center;
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: bolder;
  margin: 0.5rem 0 0.25rem 0;
  color: #1f1f1f;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Character = styled.p`
  font-size: 0.9rem;
  color: #1f1f1f;
  margin: 0;
`;

const CastCard = ({ name, character, image }) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Character>{character}</Character>
      </Info>
    </Card>
  );
};

export default CastCard;
