import Argentina from "./Argentina";
import Bolivia from "./Bolivia";
import Brazil from "./Brazil";
import Chile from "./Chile";

const CountriesOfSAmerica = (props) => {
  return ( 
    <>
    <div>
      <Argentina languages={'Spanish'} capCity={'Buenos Aires'}/>
      <Brazil languages={'Portuguese'} capCity={'Sao Paolo'} />
      <Bolivia languages={'Spanish'} capCity={'La Paz/Sucre'} />
      <Chile languages={'Spanish'} capCity={'Santiago'} />
    </div>
    </>
  );
}

export default CountriesOfSAmerica;