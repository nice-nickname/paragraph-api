import { Request, Response, NextFunction } from "express"
import ApiError from "../utils/Errors/ApiError";

export default
function (e: Error, req: Request, res: Response, next: NextFunction) {
    if (e instanceof ApiError) {

        let stackTrace: string | string[] = 'stack is undefined'
        if (e.stack) {
            stackTrace = e.stack.split('\n')
        }

        res.status(e.code).json({
            error: e.name,
            message: e.message,
            code: e.code,
            stack: stackTrace
        })
    }
    else {
        res.status(500).json({
            error: 'Unknown error',
            message: e.message,
            stack: e.stack
        })
    }
}