import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { database } from "./components/Data/register";
import { Dropdown } from "./components/Dropdown";
import { getData, getDataByAxios } from "./services";
import { APIcall } from "./components/pages/APIcalls";

function App() {
  const NameOfTheCompany = "Medtronic";
  const [profile, setProfile] = useState({ FirstName: "", LastName: "" });
  const handleChange = (name, value) => {
    let content = profile;
    content[name] = value;
    setProfile({ ...content });
  };

  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    const getCountryList = async () => {
      try {
        let result = await getDataByAxios("https://restcountries.com/v2/all");
        let convertedResult = result.map((x) => {
          return { text: x.name, value: x.alpha2Code };
        });
        setCountryList(convertedResult);
      } catch (ex) {
        console.log(ex);
      }
    };
    getCountryList();
  },[]);
  // Below code was part of the featch and axios
  // getData("https://restcountries.com/v3.1/all")
  // getDataByAxios("https://restcountries.com/v3.1/all") // if featch API is confusing we can use axios which will simplify
  // const countryList = [{
  //   value: "IN",
  //   text: "India"
  // },{
  //   value:"USA",
  //   text:"United States"
  // },{
  //   value:"UK",
  //   text:"United Kingdom"
  // }]

  return (
    <div>
      <Header companyName={NameOfTheCompany} />
      <APIcall />
      <div className="container mt-5">
        <div className="row">
          <Textbox
            textboxConfig={database.FirstName}
            handleChange={handleChange}
          />
          <Textbox
            textboxConfig={database.LastName}
            handleChange={handleChange}
          />
          <Dropdown
            dropdownConfig={database.Country}
            handleChange={handleChange}
            collection={countryList}
          />
          <button
            className="btn btn-primary col-md-3"
            onClick={(e) => {
              console.log(profile);
            }}
          >
            Resgister
          </button>
          <label>{JSON.stringify(profile)}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
