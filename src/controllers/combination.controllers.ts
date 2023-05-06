import { Request, Response } from "express";
import { combSchema, combination } from "../helpers/combination";
import { handleResponse } from "../helpers/response.api";

class CombinationController {
    static CreateCombine(req: Request, res: Response) {
        const { n, r } = req.body
        const validate = combSchema.validate({ n, r })

        if (validate.error) {
            const status = 400
            handleResponse(res, status, status.toString(), null, validate.error.details[0].message)
        }
        const status = 200
        handleResponse(res, status, status.toString(), combination(n, r), "Success Combination")
    }
}

export default CombinationController