import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { sliderItems } from "./CorouselApi";
import Navbar from "./Navbar";
import Home_content from "./Home_content";
import Searchbar from "./Searchbar";
import Cards from "../HomeCard/Cards.js";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import SkeletonCard from "./SkeletonCard";

function Home() {
  const [cityName, setCityName] = useState("Jaipur");
  const [hotelData, setHotelData] = useState([]);
  const [locationId, setlocationId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    searchApi();
  }, []); //useEffect og getting geoId
  useEffect(() => {
    if (locationId) {
      getHotelData();
    }
  }, [locationId]); //of getting hotel data

  const getCityName = (e) => {
    setCityName(e.target.value);
    console.log(e.target.name);
  };

  async function searchApi() {
    const city = cityName;
    const state = null;
    const locationID = `${city},India`;
    const options = {
      method: "GET",
      url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation",
      params: {
        query: { locationID },
      },
      headers: {
        "X-RapidAPI-Key": "395c3db00bmsh3211664a9204c48p1214aajsn49a6528827a6",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      const geoId = response.data.data[0].geoId;
      setlocationId(geoId);
    } catch (error) {
      console.error(error);
    }
  }
  //of getting hotelData
  async function getHotelData() {
    const options = {
      method: "GET",
      url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        geoId: locationId,
        checkIn: "2023-07-15",
        checkOut: "2023-07-15",
        pageNumber: "1",
        currencyCode: "INR",
      },
      headers: {
        "X-RapidAPI-Key": "395c3db00bmsh3211664a9204c48p1214aajsn49a6528827a6",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
    console.log(locationId);
    try {
      const response = await axios.request(options);
      const allData = response.data.data.data;
      setHotelData(allData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  const images = sliderItems.map((url) => (
    <Carousel.Item interval={3000} wrap>
      <img
        style={{ height: "100vh" }}
        className=" d-block w-full"
        src={url}
        alt="First slide"
      />
    </Carousel.Item>
  ));
  return (
    <>
      <Navbar />
      <div className="h-3/6">
        <Carousel controls={false} indicators={false}>
          {images}
        </Carousel>
      </div>
      <Home_content />
      <Searchbar
        searchCity={getCityName}
      />
      <div className="card-flex">
      {isLoading ? (
        Array.from({ length: 20 }).map((_, index) => (
          <SkeletonCard key={`skeleton-card-${index}`} />
        ))
      ) : (
        hotelData.map((el, id) => (
          <Cards key={`card-${id}`} id={id} card={el} />
        ))
      )}
    </div>
      <Footer />
    </>
  );
}
export default Home;
