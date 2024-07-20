import axios from "axios";

export class Hero {
    static async getAll(url) {
        let response = await axios.get(url)
        return response
    }
}