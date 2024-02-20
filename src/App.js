// import logo from "./logo.svg";
import "./App.css";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import top100Films from "./data/top100";
import RoundedSearchBox from "./components/searchBox";
import MyMoviesList from "./components/MyMoviesList";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <h3 className="title">
        Welcome to Film-Stack! - A place to see your movies collections.
      </h3> */}
      {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
      {/* </header> */}
      {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{
          width: 900,
          "background-color": "white",
          "border-radius": "30px",
          position: "relative",
          border: "1px",
        }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      /> */}
      <header className="title">
        <h1>FILMSTACK</h1>
      </header>
      <RoundedSearchBox />
      {/* <Row
        // title="Film Stack"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      /> */}
      <MyMoviesList />
    </div>
  );
}

export default App;
