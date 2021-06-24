import fs from "fs"
import path from "path"

function createFile(storePath: string, name: string, data: string | object) {
    let fileData = JSON.stringify(data)
    let filePath = path.join(storePath, name)

    if (fs.existsSync(filePath)) {
        throw new Error(`File ${filePath} is already existing`)
    }
    fs.appendFileSync(filePath, fileData)
}

function readFile(storePath: string, name: string): string {
    let file = path.join(storePath, name)
    let data = fs.readFileSync(file).toString()
    return data
}

function readFileAsJson(storePath: string, name: string) : object {
    let file = readFile(storePath, name)
    return JSON.parse(file)
}

export default {
    createFile,
    readFile,
    readFileAsJson
}