import axios from "axios"



export const getWatches = async() => {
    const getURL = "https://6888a536adf0e59551bacee1.mockapi.io/getWatches";
    const result = await axios.get(`${getURL}/3`)

    return result
}