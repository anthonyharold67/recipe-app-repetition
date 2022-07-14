import HeaderStyle, { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './Header.style';

const Header = ({setQuery,setSelectedMeal,mealType,getData}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }
  return (
    <HeaderContainer>
      <MainHeader>
        Recipe App
      </MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput type="text" placeholder="Search for a recipe" onChange={(e)=>setQuery(e.target.value)}/>
        <Button type="submit">Search</Button>
        <Select name="mealType" id="mealType" onChange={(e)=>setSelectedMeal(e.target.value) }>
          {mealType.map((meal,index)=>{
            return <option key={index} value={meal.toLowerCase()}>{meal}</option>
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
