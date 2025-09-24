// . rename.js - wrongFilename.txt nomli faylni properFilename.md deb qayta nomlang.
//  Agar wrongFilename.txt fayli topilmasa yoki properFilename.md allaqachon mavjud
// bo'lsa, "FS operation failed" xabari bilan xato tashlashingiz kerak.
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const oldFile = path.join(__dirname, "files", "wrongFilename.txt")
const newFile = path.join(__dirname, "files", "properFilename.md")
async function renameFile() {
  try {
    await fs.access(oldFile).catch(() => {
      throw new Error("FS operation failed")
    });
    const exists = await fs.access(newFile).then(() => true).catch(() => false);
    if (exists) {
      throw new Error("FS operation failed")
    }
    await fs.rename(oldFile, newFile)
    console.log("Fayl muvaffaqiyatli qayta nomlandi")
  } catch (err) {
    console.error("FS operation failed")
  }
}
renameFile()
