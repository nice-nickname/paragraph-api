import fs from "fs"

async function createFile(data: string | object) {

}

async function readFile(storePath: string, name: string): Promise<string> {
    return ''
}

async function readFileAsJson(storePath: string, name: string) : Promise<object> {
    let file = await readFile(storePath, name)
    return JSON.parse(file)
}