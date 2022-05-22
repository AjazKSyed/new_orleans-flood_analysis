mapboxgl.accessToken =
             'pk.eyJ1IjoiYWphemtzeWVkIiwiYSI6ImNrd3plcWVsaTA0azkybm1wZ3c5MnB1OGcifQ.91la4ZENVFAgHfVaXoKjOw';
const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/light-v10",
projection: 'albers',
zoom: 4, // starting zoom
center: [-100, 35], // starting center
});



// // map.on("load", () => {
// // map.addSource("census-data", {
// //   type: "geojson",
// //   data: "assets/---.geojson",
// // });

// map.addLayer(
//   {
//     id: "population",
//     type: "fill",
//     source: "----",
//     paint: {
//         'fill-color': [
//             'step',
//             ['get', 'rates'],
//             '#f7f4f9',   // use color #f7f4f9
//             10,          // if rates < 10
//             '#e7e1ef',   // use color #e7e1ef
//             25,          // if 10 <= rates < 25
//             '#d4b9da',   // use color #d4b9da
//             50,          // if 25 <= rates < 50
//             '#c994c7',   // use color #c994c7
//             75,         // if 50 <= rates < 75
//             '#df65b0',   // use color #df65b0
//             100,         // if 75 <= rates < 100
//             '#e7298a',   // use color #e7298a
//             125,         // if 100 <= rates < 125
//             '#ce1256',   // use color #ce1256
//             150,        // if 125 <= rates < 150
//             "#91003f"    // use color #91003f if 150 <= rates
//         ],
//         'fill-outline-color': '#BBBBBB',
//         'fill-opacity': 0.7,
//     },
//   });
// });

// // create legend
// const legend = document.getElementById("legend");


// layers.forEach((layer, i) => {
//   const color = colors[i];
//   const item = document.createElement('div');
//   const key = document.createElement('span');
//   key.className = 'legend-key';
//   key.style.backgroundColor = color;

//   const value = document.createElement('span');
//   value.innerHTML = `${layer}`;
//   item.appendChild(key);
//   item.appendChild(value);
//   legend.appendChild(item);
// });
// // add the data source
// const source =
// // combine all the html codes.
// legend.innerHTML += source;


