import axios from "axios";
import { useCallback, useState } from "react";

// const GetResults = () => {

//     const results = [
//         {
//           id: 1,
//           placename: "Fuji-Q Highland",
//           bookingprice: "60.00",
//           sourcewebsite: "Klook",
//           images: ["https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"],
//           rating: 4.5,
//           bookingmode: "Pay Online"
//         },
//         {
//           id: 2,
//           placename: "Fuji-Q Highland",
//           bookingprice: "55.00",
//           sourcewebsite: "Trip.com",
//           images: ["https://images.unsplash.com/photo-1678033595277-c64ac5565e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80","https://images.unsplash.com/photo-1636010732804-56457b880ba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
//           rating: 3.8,
//           bookingmode: "Pay on Arrival"
//         },
//       ];

//       // unit test of
//       console.log(Array.isArray(results));

//     return results;
// };

// export default GetResults;

const GetResults = async (setResults, filterSource, filter) => {
  var res = "";
  try {
    const data = await axios.get("/products");
    let results = data.response;
    res = results;
  } catch (error) {
    console.log(filterSource);
    console.error("Error fetching products:", error);
    let resultsPlaceholder = [
      {
        id: 1,
        placename: "If you're seeing this",
        bookingprice: "60.00",
        sourcewebsite: "Klook",
        images: [
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        ],
        rating: 4.5,
        bookingmode: "Pay Online",
      },
      {
        id: 2,
        placename: "Means GetResults failed",
        bookingprice: "55.00",
        sourcewebsite: "Trip.com",
        images: [
          "https://images.unsplash.com/photo-1678033595277-c64ac5565e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
          "https://images.unsplash.com/photo-1636010732804-56457b880ba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        rating: 3.8,
        bookingmode: "Pay on Arrival",
      },
    ];
    res = resultsPlaceholder;

    // if (filterSource !== null) {
    //   resultsPlaceholder = resultsPlaceholder.filter(
    //     (item) => item.id !== filterSource.id
    //   );
  }
  if (filterSource !== null) {
    res = res.filter((item) => item.id !== filterSource.id);
  }
  res = res.filter((item) => {
    if (filter === "") {
      return item; //if empty return full array
    } else if (
      item.placename.toLowerCase().includes(filter.dest.toLowerCase()) &&
      parseFloat(item.bookingprice) <= parseFloat(filter.budget)
    ) {
      return item;
    }
  });
  setResults(res);
};

export default GetResults;
