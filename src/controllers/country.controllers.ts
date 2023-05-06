import axios from "axios";
import { Request, Response } from "express";
import { CountryData } from "../models/entities/country.entities";
import { handleResponse } from "../helpers/response.api";

class CountryController {
    static async Countries(req: Request, res: Response) {

        axios({
            method: "GET",
            url: "https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json",
        }).then((resp) => {
            const { data } = resp
            let bodyCountry: CountryData[] = []
            for (let i = 0; i < data.length; i++) {
                let newCountry: CountryData = {
                    name: data[i].name,
                    region: data[i].region,
                    timezones: data[i].timezones
                }

                bodyCountry.push(newCountry)
            }

            const status = 200
            handleResponse(res, status, status.toString(), bodyCountry, "Success")
        }).catch((err) => {
            const status = 500
            handleResponse(res, status, status.toString(), null, "Success")
        })
    }
}

export default CountryController