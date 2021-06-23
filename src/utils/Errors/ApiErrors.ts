import ApiError from "./ApiError";

export default class ApiErrors {

    static BadRequest(m: string): ApiError {
        return new ApiError(400, m, 'Bad Request')
    }

    static Internal(m: string): ApiError {
        return new ApiError(500, m, 'Internal Server Error')
    }

    static Forbidden(m: string): ApiError {
        return new ApiError(403, m, 'Forbidden')
    }

    static NotFound(m: string): ApiError {
        return new ApiError(404, m, 'Not Found')
    }


}