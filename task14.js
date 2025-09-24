// 14. delete.js - fileToRemove.txt nomli faylni o'chiring. Agar fileToRemove.txt fayli topilmasa, 
// "FS operation failed" xabari bilan xato tashlashingiz kerak.
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToRemove.txt")
async function deleteFile() {
  try {
    await fs.access(filePath).catch(() => {
      throw new Error("FS operation failed")
    });
    await fs.unlink(filePath);
    console.log("Fayl muvaffaqiyatli uchirildi")
  } catch (err) {
    console.error("FS operation failed")
  }
}
deleteFile()
