import * as fs from "fs";

export default function readFile(file: string): string {
    return fs.readFileSync(file).toString()
}