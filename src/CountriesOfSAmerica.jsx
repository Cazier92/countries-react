import Argentina from "./Argentina";
import Brazil from "./Brazil";

const CountriesOfSAmerica = (props) => {
  return ( 
    <>
    <div>
      <Argentina languages={'Spanish'}/>
      <Brazil languages={'Portuguese'} capCity={'Sao Paolo'} />
    </div>
    </>
  );
}

export default CountriesOfSAmerica;