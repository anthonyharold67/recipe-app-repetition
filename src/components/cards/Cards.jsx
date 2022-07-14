import CardsStyle, { Button, Card, Header, Image, MainContainer } from './Cards.style';
import defaultImg from '../../assets/default-image.jpg';
import { useNavigate } from 'react-router-dom';


const Cards = ({recipes}) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {/* {recipes.map((recipe,index)=>{
        return <Card key={index}>
          <Header>{recipe.recipe.label}</Header>
          <Image src={recipe.recipe.image} alt={recipe.recipe.label} />
        </Card>
      } )} */}
      {recipes.map(({recipe},index)=>{
        return <Card key={index}>
          <Header>{recipe.label}</Header>
          <Image src={recipe.image || defaultImg} alt={recipe.label} />
          <Button onClick={()=>navigate("detail",{state:recipe})} >View Recipe</Button>
        </Card>
      } )}
    </MainContainer>
  );
};

export default Cards;
