import React from "react"
import "./App.css"
import { WorldMap } from "react-svg-worldmap"
import { geoData } from "react-svg-worldmap"

interface Feature
{
  N: string;
  I: string;
  C: dataPoints[];
}

interface dataPoints
{
  V: dataPoints2[]
}

interface dataPoints2
{
  W: dataPoints3[]
}

interface dataPoints3
{
  0: number;
  1: number;
}

function App() {
  const data =
    [
      { "country": "cn", value: 5 }, // china
      { "country": "us", value: 10 },  // united states
      { "country": "ru", value: 7 },  // russia
    ]

  const dataT = 'Kingdom of Belgium';
  geoData.features.map((el: Feature) => el.N = dataT);
  
  const stylingFunction = (context : any) => {
    const opacityLevel = 0.1 + (1.5 * (context.countryValue - context.minValue) / (context.maxValue - context.minValue))
    return { fill: context.country === "US" ? "blue" : context.color, fillOpacity: opacityLevel, stroke: "green", strokeWidth: 1, strokeOpacity: 0.2, cursor: "pointer" }
  }

  return (
    < div className="App" >
      < div className="Main">
        <table>
          <tbody>
            <tr>
              <td>
                <WorldMap color={"red"} type={"marker"} tooltipBgColor={"#D3D3D3"} title="Custom Style Test" valueSuffix="points" size="lg" data={data} frame={true} styleFunction={stylingFunction}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
