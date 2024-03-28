import axios from "axios";
const url = `${process.env.REACT_APP_BACKEND_URL}/api/get-patterns`;

const getPatterns = async()=>{
    try {
        const response = await axios.get(url);
        return response;
    } catch (err) {
        console.log('Couldnt get patterns')
    }
}
export default getPatterns;