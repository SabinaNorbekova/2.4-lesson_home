// 12. copy.js - files papkasini va uning barcha tarkibini files_copy nomli yangi papkaga nusxalang. 
// Agar files papkasi mavjud bo'lmasa yoki files_copy
// allaqachon yaratilgan bo'lsa, "FS operation failed" xabari bilan xato tashlashingiz kerak.
import { promises as fs } from "fs"
import path from "path";
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, "files");
const targetDir = path.join(__dirname, "files_copy")
async function copyDir() {
  try {
    await fs.access(sourceDir).catch(() => {
      throw new Error("FS operation failed")
    });
    const exists = await fs.access(targetDir).then(() => true).catch(() => false)
    if (exists) {
      throw new Error("FS operation failed")
    }
    await fs.cp(sourceDir, targetDir, { recursive: true })
    console.log("Papka muvaffaqiyatl9=i nusxalandi")
  } catch (err) {
    console.error("FS operation failed")
  }
}
copyDir()
