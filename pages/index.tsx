import Head from "next/head";
import styles from "@/styles/Home.module.css";
import fetchData from "@/lib/fetchData";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "@/types";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse>();

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetchData("weather", {
        lon: 50,
        lat: 14,
        units: "metric",
        lang: "en",
      });

      if (response.ok) {
        const data: CurrentWeatherResponse = await response.json();
        setCurrentWeather(data);
      } else {
        setCurrentWeather(undefined);
      }
    }

    fetchWeatherData();
  }, []);

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Weather App</h1>
        {currentWeather && (
          <ul>
            <li>{currentWeather.temp}</li>
            <li>{currentWeather.tempFeelsLike}</li>
          </ul>
        )}
      </main>
    </>
  );
}
