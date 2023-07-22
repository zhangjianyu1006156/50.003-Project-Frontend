import ResultsRow from "./ResultsRow";

function resultsList(props) {
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
        {props.results.map((result) => {
            return (          
            <ResultsRow
                id={result.id}
                placename={result.placename}
                bookingprice={result.bookingprice}
                sourcewebsite={result.sourcewebsite}
                images={result.images}
                rating={result.rating}
                bookingmode={result.bookingmode}
                handleClick={handleClick}
              />
            );
        })}
    </div>
  );
}

export default resultsList;