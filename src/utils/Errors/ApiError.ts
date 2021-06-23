
export default class ApiError extends Error {

    code: number

    constructor(code: number, message: string, name: string) {
        super(message);
        this.code = code
        this.name = name
    }


}