import BaseController from "../BaseController";
import BaseService from "../../services/BaseService";
import {RequestHandler} from "express";
import ApiErrors from "../../../utils/Errors/ApiErrors";


export default class TextController extends BaseController{

    constructor(service: BaseService<any>) {
        super(service);
    }

    getAll: RequestHandler = async (req, res, next) => {
        let data = await this._service.findAll()
        res.json(data)
    }

    getById: RequestHandler = async (req, res, next) => {
        let id = Number(req.params.id)
        if (id || isNaN(id)) {
            throw ApiErrors.BadRequest(`Id is null | undefined | NaN at request. id = ${id}`)
        }

        let data = await this._service.findOne(id)
        res.json(data)
    }

    post: RequestHandler = async (req, res, next) => {
        let {data} = req.body
        if (data) {
            throw ApiErrors.BadRequest(`Data to create text exercise is undefined`)
        }
        let created = await this._service.create(data)
        res.json({created})
    }

    delete: RequestHandler = async (req, res, next) => {
        let id = Number(req.params.id)
        if (!id || isNaN(id)) {
            throw ApiErrors.BadRequest(`Id is null | undefined | NaN at request. id = ${id}`)
        }
        return await this._service.delete(id)
    }
}