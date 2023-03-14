import { quote_api } from "../constants";


export const GetQuote = async () => {
    try {
        const response = await fetch(quote_api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


