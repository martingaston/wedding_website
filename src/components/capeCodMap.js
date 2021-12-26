import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class CapeCodMap extends React.Component {
  state = {
    lat: 39.0997,
    lng: -94.5786,
    zoom: 10
  };
  render() {
    const style = {
      width: "calc(100% - 1rem)",
      height: "27.5rem"
    };
    const position = [this.state.lat, this.state.lng];
    if (typeof window !== "undefined") {
      return (
        <Map
          style={style}
          preferCanvas={true}
          center={position}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom="18"
            minZoom="8"
          />
          <Marker position={[39.04482, -94.57306]}>
            <Popup>
              <b>The venue!</b>
              <br />
              Fire House KC
            </Popup>
          </Marker>
          <Marker position={[39.30377, -94.70923]}>
            <Popup>MCI Airport</Popup>
          </Marker>
          <Marker position={[39.08809, -94.58744]}>
            <Popup>Crossroads Hotel</Popup>
          </Marker>
          <Marker position={[39.04670, -94.58648]}>
            <Popup>Kansas City Marriott Country Club Plaza</Popup>
          </Marker>
          <Marker position={[39.04353, -94.58459]}>
            <Popup>Southmoreland on the Plaza</Popup>
          </Marker>
          <Marker position={[39.03993, -94.59224]}>
            <Popup>InterContinental Kansas City at the Plaza</Popup>
          </Marker>
          <Marker position={[39.04886, -94.58228]}>
            <Popup>The Truitt</Popup>
          </Marker>
          <Marker position={[39.04643, -94.59739]}>
            <Popup>SpringHill Suites by Marriott Kansas City Plaza</Popup>
          </Marker>
          <Marker position={[39.04396, -94.59117]}>
            <Popup>Residence Inn by Marriott Kansas City Country Club Plaza</Popup>
          </Marker>
          <Marker position={[39.04859, -94.58134]}>
            <Popup>Oak Street Mansion</Popup>
          </Marker>
          <Marker position={[39.04463, -94.59657]}>
            <Popup>Hampton Inn & Suites Kansas City-Country Club Plaza</Popup>
          </Marker>
        </Map>
      );
    } else {
      return null;
    }
  }
}
