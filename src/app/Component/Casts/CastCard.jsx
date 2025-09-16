import * as styled from './Cast.style';
const CastCard = ({ name, character, image }) => (
  <styled.Card>
    <styled.Image src={image} alt={name} />
    <styled.Info>
      <styled.Name>{name}</styled.Name>
      <styled.Character>{character}</styled.Character>
    </styled.Info>
  </styled.Card>
);

export default CastCard;
