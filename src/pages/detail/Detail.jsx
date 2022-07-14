import React from 'react';
import { useLocation } from 'react-router-dom';
import {DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngContainer, OtherPart} from './Detail.style'
import dietSvg from '../../assets/diet.svg';
import defaultImg from '../../assets/default-image.jpg';

const Detail = () => {
  // const location=useLocation()
  // const recipe = location.state
  const {state:recipe}=useLocation()

  console.log(recipe)
  return <DetailContainer>
    <HeaderContainer>
      <h1>{recipe.label}</h1>
      <img src={dietSvg} alt="diet" />
    </HeaderContainer>
    <DetailPart wrap="wrap">
      <OtherPart>
        {/* <h4>NUTRIENTS</h4>
        {Object.values(recipe.totalNutrients).map((nutrient,index)=>{
          return <p key={index}>{nutrient.label} : {nutrient.quantity} {nutrient.unit}</p>

        })} */}
        <h4>NUTRIENTS</h4>
          <p>
            {recipe.totalNutrients.CA.label} :{' '}
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :{' '}
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{' '}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{' '}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight}</p>
          <p>Calories: {Math.round(recipe.calories)}</p>
          {recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
      </OtherPart>
      <ImgContainer>
        <img src={recipe.image || defaultImg} alt={recipe.label} />
      </ImgContainer>
      <IngContainer>
        <h4>INGREDIENTS</h4>
        <div>
          {recipe.ingredientLines.map((ingredient,index)=>{
            return (<><p key={index}>{index+1}-{ingredient}</p>
            <br /></>)

          })}
          
        </div>
      </IngContainer>
    </DetailPart>
  </DetailContainer>;
};

export default Detail;
