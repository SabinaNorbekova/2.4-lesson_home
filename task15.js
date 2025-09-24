// 15. list.js - files papkasidagi barcha fayl nomlarini konsolga chiqaring. Agar files papkasi mavjud 
// bo'lmasa, "FS operation failed" xabari bilan xato
// tashlashingiz kerak.
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const folderPath = path.join(__dirname, "files")
async function listFiles() {
  try {
    await fs.access(folderPath).catch(() => {
      throw new Error("FS operation failed")
    })
    const files = await fs.readdir(folderPath)
    for (const file of files) {
      console.log(file)
    }
  } catch (err) {
    console.error("FS operation failed")
  }
}
listFiles()
