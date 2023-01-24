import Canada from "./Canada";
import UnitedStates from "./UnitedStates";
import Mexico from "./Mexico";

const CountriesOfNAmerica = (props) => {
  return ( 
    <>
    <Canada languages={'English, French'}/>
    <UnitedStates />
    <Mexico languages={'Spanish'}/>
    </>
  );
}

export default CountriesOfNAmerica;