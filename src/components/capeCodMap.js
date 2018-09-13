import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class CapeCodMap extends React.Component {
  state = {
    lat: 41.8107,
    lng: -70.2045,
    zoom: 9
  };
  render() {
    const style = {
      width: "100%",
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
          <Marker position={[41.664099, -70.066222]}>
            <Popup>
              <b>The venue!</b>
              <br />
              Wychmere Beach Club
            </Popup>
          </Marker>
          <Marker position={[41.381143, -70.645512]}>
            <Popup>Martha's Vineyard</Popup>
          </Marker>
          <Marker position={[41.844877, -69.94834]}>
            <Popup>Coast Guard Beach</Popup>
          </Marker>
          <Marker position={[41.65503, -70.15418]}>
            <Popup>Swan Inn</Popup>
          </Marker>
          <Marker position={[41.843692, -69.982739]}>
            <Popup>Arnold's</Popup>
          </Marker>
          <Marker position={[41.93513, -70.02022]}>
            <Popup>PJ's</Popup>
          </Marker>
          <Marker position={[41.66829, -70.06924]}>
            <Popup>Sundae School</Popup>
          </Marker>
          <Marker position={[41.78827, -69.99315]}>
            <Popup>Hot Chocolate Sparrow</Popup>
          </Marker>
          <Marker position={[41.99567, -70.0505]}>
            <Popup>Blackfish</Popup>
          </Marker>
          <Marker position={[41.66847, -70.12098]}>
            <Popup>Viera</Popup>
          </Marker>
          <Marker position={[42.03921, -70.19511]}>
            <Popup>Red Inn</Popup>
          </Marker>
          <Marker position={[42.05216, -70.18561]}>
            <Popup>Governor Bradford</Popup>
          </Marker>
        </Map>
      );
    } else {
      return null;
    }
  }
}
