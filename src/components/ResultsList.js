import ResultsRow from "./ResultsRow";
import React from "react";

function resultsList(props) {
  console.log("propsresultshere");
  console.log(props.results);
  var result = [];
  for (var key in props.results){
    result.push(props.results[key]);
  }
  console.log(result);
  // results = Object.values(props.results);
  console.log(typeof props.results);
  if (props.results.length === 0) {
    return (
      <div>
        <h1>No more results!</h1>
      </div>
    );
  }

  const handleClick = (data) => {
    props.handleClick(data);
  };

  return (
    <div>
        {result.map((result) => {
          const lowerprice = Math.min(result.kkdays_price, result.tripcom_price);
          const source = result.kkdays_price < result.tripcom_price ? 'KKDays' : 'Trip.com';
            return (          
            <ResultsRow

                key={result.product_id}
                product_id={result.product_id}
                name={result.name} //placename
                price={lowerprice} //bookingprice
                sourcewebsite={source}
                image={result.image}
                rating={result.rating}
                description={result.description} //text
                bookingmode={result.bookingmode}
                handleClick={handleClick}
              />
            );
        })}
    </div>
  );
}

export default resultsList;