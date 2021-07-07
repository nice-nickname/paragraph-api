import BaseService from "../services/BaseService";

export default class BaseController {

    public _service: BaseService<any>

    constructor(service: BaseService<any>) {
        this._service = service
    }

}