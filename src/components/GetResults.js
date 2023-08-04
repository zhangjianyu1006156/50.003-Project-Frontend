import axios from "axios";
import { useCallback } from "react";

const GetResults = async (setResults, filterSource, filter) => {
  var res = "";
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true,
        "Access-Control-Allow-Headers": "Origin",
      },
    };
    const { data: response } = await axios.get(
      "http://188.166.191.110.nip.io:8080/products"
    );
    let results = response;
    res = results;
    console.log("mongodb data here");
    console.log(results);
    setResults(results);
  } catch (error) {
    console.error("Error fetching products:", error);
    let resultsPlaceholder = [
      {
        id: 1,
        placename: "Nankai Rapi:t Kansai Airport Express Ticket",
        bookingprice: "10.30",
        sourcewebsite: "Klook",
        images: [
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        ],
        rating: 4.5,
        bookingmode: "Pay Online",
      },
      {
        id: 2,
        placename: "FujiQ Highland Ticket",
        bookingprice: "49.19",
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
    // if (filterSource !== null){
    //   resultsPlaceholder = resultsPlaceholder.filter(item => item.id !== filterSource.id);
    // }
    // setResults(resultsPlaceholder);
  }
  if (filterSource !== null) {
    res = res.filter((item) => item.id !== filterSource.id);
  }
  if (filter !== null) {
    res = res.filter((item) => {
      if (filter.dest === "" && filter.budget === "") {
        return item;
      }
      if (
        item.placename.toLowerCase().includes(filter.dest.toLowerCase()) ||
        parseFloat(item.bookingprice) <= parseFloat(filter.budget)
      ) {
        return item;
      }
      if (
        item.placename.toLowerCase().includes(filter.dest.toLowerCase()) &&
        parseFloat(item.bookingprice) <= parseFloat(filter.budget)
      ) {
        return item;
      }
    });
  }
  setResults(res);
};

export default GetResults;
