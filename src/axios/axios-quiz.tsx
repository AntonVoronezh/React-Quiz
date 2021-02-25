import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-87fb3.firebaseio.com/'
})