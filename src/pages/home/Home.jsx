import axios from 'axios';
import { useState } from 'react';
import Header from '../../components/header/Header';
import HomeStyle, { HeaderText, HomeImg, ImgDiv } from './Home.style';
import HomeSvg from "../../assets/home.svg";
import Cards from '../../components/cards/Cards';

const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack','Brunch','TeaTime'];
  const [query,setQuery] = useState('Breakfast');
  const [selectedMeal,setSelectedMeal] = useState("");
  const [recipes,setRecipes] = useState();

  const APP_ID =process.env.REACT_APP_API_ID;
  const APP_KEY =process.env.REACT_APP_API_KEY;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData= async () => {
    if(query === ''){
      alert("Please enter a valid query");
      return;
    }
    try {
      const {data:{hits}} = await axios.get(url);
      if(hits){
        setRecipes(hits);
        console.log(hits);
        console.log(recipes);
      }
    } catch (error) {
      console.log(error);
    }
      
    }


  return (
    <div>
      <Header setQuery={setQuery} setSelectedMeal={setSelectedMeal} mealType={mealType} getData={getData} />
      {recipes?.length>0 ? <Cards recipes={recipes} /> : recipes?.length===0 ? <HeaderText>No recipes found</HeaderText>: <ImgDiv><HomeImg src={HomeSvg} /> </ImgDiv>}

    </div>
  );
};

export default Home;
