import React, { useState, useEffect } from "react";

const SelectButtons = () => {
  const showNumOfImages = 20;

  const [selectedRandom, setSelectedRandom] = useState(0);

  useEffect(() => {
    startGettingJson();
  }, []);

  // get the country list from the server and populate the dropdown select
  async function startGettingJson() {
    const artistResult = await getJsonData("/server/data/artists.json");
    const periodResult = await getJsonData("/server/data/periods.json");

    populateSelect(artistResult, "Artists");
    populateSelect(periodResult, "Periods");
  }

  function getJsonData(jsonPath) {
    // fetch data from server/server.js using promises and return the data
    return new Promise((resolve) => {
      fetch(jsonPath).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else return resolve(response.json());
      });
    });
  }

  function populateSelect(list, selectId) {
    const select = document.getElementById("dropdown" + selectId);
    const option = document.createElement("option");
    option.textContent = selectId;
    select.appendChild(option);
    list.forEach((subject) => {
      const option = document.createElement("option");
      option.textContent = subject[selectId.toLowerCase()];
      select.appendChild(option);
    });
  }
  // handle the submit for the search
  async function handleSubmit(e) {
    e.preventDefault();
    const search = document.getElementById("search").value;
    removeAllChildNodes();
    const searchQuerry = "hasImages=true&q=" + search
    const artObj = await getArtObject(searchQuerry);
    for (let i = 0; i < showNumOfImages; i++) {
      await getPaintings(artObj.objectIDs[i]).then((data) => {
        displayPaintings(data);
      });
    }
  }
  async function handleRandomChange(e) {
    const artObj = { total: showNumOfImages, objectIDs: [] };
    //fill artObj.objectIDs with random numbers
    for (let i = 0; i < showNumOfImages; i++) {
      let ranNum = Math.random() * 10000;
      ranNum = Math.floor(ranNum);
      artObj.objectIDs.push(ranNum);
    }
    
    // setSelectedRandom(ranNum);
    removeAllChildNodes();
    // getPaintings(ranNum);
    const paintings = await Promise.all(artObj.objectIDs.map(getPaintings));
    paintings.forEach((data) => {
      displayPaintings(data);
    });
  }

  async function handleChange(e) {
    const dropdownID = e.target.id;
    const targetName = e.target.value;
    removeAllChildNodes();

    if (dropdownID === "dropdownArtists") {
      const artObj = await getArtObject("hasImages=true&q=" + targetName);
      const objectIDs = artObj.objectIDs.slice(0, showNumOfImages);
      const paintings = await Promise.all(objectIDs.map(getPaintings));
      paintings.forEach((data) => {
        displayPaintings(data);
      });
    }
    if (dropdownID === "dropdownPeriods") {
      const openPar = targetName.indexOf("(");
      const date = targetName.slice(openPar + 1);
      const beginDate = date.substring(0, 4);
      const hyphen = date.indexOf("-");
      const endDate = date.substring(hyphen + 1, hyphen + 5);
      const some =
        "dateBegin=" + beginDate + "&dateEnd=" + endDate + "&q=European";
      const artObj = await getArtObject(some);
      const objectIDs = artObj.objectIDs.slice(0, showNumOfImages);
      const paintings = await Promise.all(objectIDs.map(getPaintings));
      paintings.forEach((data) => {
        displayPaintings(data);
      });
    }
  }

  async function getArtObject(artObject) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?${artObject}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getPaintings(artIdNum) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artIdNum}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function displayPaintings(data) {
    const imgContainer = document.getElementById("pri-art-container");
    const div = document.createElement("div");
    div.className = "lg:flex lg:flex-col sm:flex-row sm:items-center mb-10";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "left";
    div.style.alignItems = "center";
    // div.style.margin = "0 auto";
    div.style.width = "45%";

    const img = document.createElement("img");
    const title = document.createElement("p");
    const artist = document.createElement("p");
    const date = document.createElement("p");
    const medium = document.createElement("p");
    const culture = document.createElement("p");
    const period = document.createElement("p");
    const description = document.createElement("p");
    const empty = document.createElement("div");

    artist.textContent = data.artistDisplayName;
    date.textContent = data.objectDate;
    medium.textContent = data.medium;
    culture.textContent = data.culture;
    period.textContent = data.period;
    description.textContent = data.description;
    empty.style.height = "10rem";

    img.src = data.primaryImageSmall;
    img.loading = "lazy";
    img.alt = data.title;
    title.textContent = data.title;

    title.style.marginTop = "1rem";
    title.style.marginBottom = "1rem";
    title.style.fontWeight = "bold";
    img.className =
      "h-full object-cover hover:opacity-75 transition ease-in-out duration-250";

    title.innerHTML = data.title;

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(artist);
    div.appendChild(date);
    div.appendChild(medium);
    div.appendChild(culture);
    div.appendChild(period);
    div.appendChild(description);
    div.appendChild(empty);

    imgContainer.appendChild(div);
    img.addEventListener("click", () => {
      window.open(data.primaryImage);
    });
  }
  // if the image is empty, get another random painting
  // if (
  //   data.primaryImageSmall === "" ||
  //   data.primaryImageSmall === null
  // ) {
  //   handleRandomChange();
  // } else {

  function removeAllChildNodes() {
    const imgContainer = document.getElementById("pri-art-container");
    while (imgContainer.firstChild) {
      imgContainer.removeChild(imgContainer.firstChild);
    }
  }

  return (
    <>
      <div className="mt-20 grid lg:grid-cols-2 gap-20 mb-20">
        <div className="">
          <select
            id="dropdownArtists"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5 dark:bg-white-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-100 dark:focus:border-blue-100"
          ></select>
        </div>
        <div className="">
          <select
            id="dropdownPeriods"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5 dark:bg-white-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-200 dark:focus:border-blue-200"
          ></select>
        </div>

        <div className="flex-row">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Object in Art"
            className="bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 p-2.5 dark:bg-white-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-200 dark:focus:border-blue-200"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 p-2.5 dark:bg-white-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-200 dark:focus:border-blue-200"
          >
            Search
          </button>
        </div>

        <div className="">
          <button
            onClick={handleRandomChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5 dark:bg-white-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-200 dark:focus:border-blue-200"
          >
            Random
          </button>
        </div>
      </div>

      <div
        id="pri-art-container"
        className="flex flex-row flex-wrap justify-between"
      ></div>
    </>
  );
};

export default SelectButtons;

