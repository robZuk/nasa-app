import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { StoreContext } from "../store";

import {
  WILDFIRE_SRC,
  VOLCANO_SRC,
  ICE_SRC,
  STORM_SRC,
} from "../constans/constans";
import { WILDFIRES, VOLCANOES, ICES, STORMS } from "../constans/constans";

export default function Search() {
  const {
    searchedData,
    setSearchedData,
    data,
    setSearchedEventPosition,
    mapRef,
    setLocationInfo,
  } = useContext(StoreContext);

  const searchEvents = (inputValue) => {
    const regex = new RegExp(`${inputValue}`, "ig");
    setSearchedData([...data.filter((ev) => regex.test(ev.title))]);
  };

  const [inputValue, setInputValue] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    searchEvents(inputValue);
    setInputValue("");
    e.preventDefault();
  };

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {searchedData.map((event) => (
          <ListItem
            button
            key={event.id}
            onClick={() => (
              toggleDrawer(false),
              mapRef.current.panTo({
                lat: event.geometry[event.geometry.length - 1].coordinates[1],
                lng: event.geometry[event.geometry.length - 1].coordinates[0],
              }),
              mapRef.current.setZoom(9),
              setSearchedData([]),
              setSearchedEventPosition([
                ...event.geometry[event.geometry.length - 1].coordinates,
              ])
            )}
          >
            <ListItemIcon>
              {event.categories[0].title === WILDFIRES && (
                <Avatar sx={{ bgcolor: grey[300] }}>
                  <img
                    src={process.env.PUBLIC_URL + WILDFIRE_SRC}
                    alt={WILDFIRES}
                    className="event-list-img"
                  />
                </Avatar>
              )}
              {event.categories[0].title === VOLCANOES && (
                <Avatar sx={{ bgcolor: grey[300] }}>
                  <img
                    src={process.env.PUBLIC_URL + VOLCANO_SRC}
                    alt={VOLCANOES}
                    className="event-list-img"
                  />
                </Avatar>
              )}
              {event.categories[0].title === ICES && (
                <Avatar sx={{ bgcolor: grey[300] }}>
                  <img
                    src={process.env.PUBLIC_URL + ICE_SRC}
                    alt={ICES}
                    className="event-list-img"
                  />
                </Avatar>
              )}
              {event.categories[0].title === STORMS && (
                <Avatar sx={{ bgcolor: grey[300] }}>
                  <img
                    src={process.env.PUBLIC_URL + STORM_SRC}
                    alt={STORMS}
                    className="event-list-img"
                  />
                </Avatar>
              )}
            </ListItemIcon>
            <ListItemText primary={event.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={(() => setLocationInfo(null), toggleDrawer(true))}>
          <SearchIcon fontSize="medium" sx={{ m: 1, color: grey[500] }} />
        </Button>
        <Drawer open={state} onClose={toggleDrawer(false)}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "37ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="standard-basic"
              label="Search ..."
              variant="standard"
              InputProps={{
                type: "search",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" type="submit">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={inputValue}
              onChange={handleChange}
            />
          </Box>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
