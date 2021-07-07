
export default interface BaseService<T> {

    findAll: () => Promise<T[]>
    findOne: (id: number) => Promise<T | undefined>
    findQuery: (query: any, params: any) => Promise<T[]>
    create: (data: any) => Promise<boolean>
    delete: (id: number) => Promise<boolean>

}