import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers();
const walkerCities = getWalkerCities();
const cities = getCities();

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML;
}
// document.addEventListener(
//     "click",  // This is the type of event
//     (clickEvent) => {

//         const itemClicked = clickEvent.target

//         if (itemClicked.id.startsWith("walker")) {


//             const [, walkerId] = itemClicked.id.split("--")



//             for (const walker of walkers) {
//                 if (walker.city === parseInt(walkerId)) {
//                     window.alert(`${walker.name} services ${walker.city}`)
//                 }
//             }
//         }
//     }
// )

document.addEventListener(
    "click",
    e => {
        const targetClicked = e.target
        if (targetClicked.id.startsWith("walker")) {

            const [,walkerId] = targetClicked.id.split("--")
            const walker = walkers.find(walker => walker.id === parseInt(walkerId));
            const cityArr = [];
            
            for (const walkerCity of walkerCities) {
                if (walkerCity.walkerId === parseInt(walkerId)) {
                    for (const city of cities) {
                        if (city.id === walkerCity.cityId) {
                            cityArr.push(city.name)
                        }
                    }
                }
            }            
            
            let cityString
            
            if (cityArr.length > 1) {
                cityString = cityArr.join(" and ")
            } else {
                cityString = cityArr.join("")
            }
            
            window.alert(`${walker.name} services ${cityString}`)
        }
    }
)
