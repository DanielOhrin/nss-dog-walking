import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const walkers = getWalkers();
const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

// document.addEventListener(
//     "click",
//     e => {
//         const targetClicked = e.target;

//         if (targetClicked.id.startsWith("pet")) {
//             const [,petPrimaryKey] = targetClicked.id.split("--")

//             for (const pet of pets) {
//                 if (pet.id === parseInt(petPrimaryKey)) {
//                     window.alert(`${pet.name} barks at you`);
//                 }
//             }
//         }
//     }
// )

/*
    Create empty matchedPet variable
    Store pet object clicked into a variable
    Create empty matchedWalker variable
    Store walker object who's walker.id matches matchedPet.walkerId
*/
document.addEventListener(
    "click",
    e => {
        const targetClicked = e.target

        if (targetClicked.id.startsWith('pet')) {
            const [, petPrimaryKey] = targetClicked.id.split("--")

            let matchedPet = null
            for (const pet of pets) {
                if (pet.id === parseInt(petPrimaryKey)) {
                    matchedPet = pet
                    break
                }
            }

            let matchedWalker = null
            for (const walker of walkers) {
                if (walker.id === matchedPet.walkerId) {
                    matchedWalker = walker
                    break
                }
            }

            window.alert(`${matchedPet.name} is being walked by ${matchedWalker.name}`)
        }
    }
)
    //Pet is being walked by Walker