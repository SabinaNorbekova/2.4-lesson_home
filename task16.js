// 16. read.js - fileToRead.txt faylining tarkibini konsolga chiqaring. Agar fileToRead.txt fayli 
// mavjud bo'lmasa, "FS operation failed" xabari bilan xato
// tashlashingiz kerak.
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, "files", "fileToRead.txt")
async function readFile() {
  try {
    await fs.access(filePath).catch(() => {
      throw new Error("FS operation failed")
    })
    const content = await fs.readFile(filePath, "utf-8")
    console.log("file tarkibi: ", content)
  } catch (err) {
    console.error("FS operation failed")
  }
}
readFile()
