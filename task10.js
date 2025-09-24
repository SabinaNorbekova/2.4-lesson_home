// 10. Katalogni Qazib Olish :
// Kataloglarni o'rganaylik! Joriy ishchi katalog tarkibini (fayl nomlari) o'qish uchun fs.readdir dan foydalaning.
// Qaytgan ro'yxat orqali aylanib, har bir fayl nomini konsolda chiqaring.
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const directoryPath = __dirname
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error("Xatolik:", err)
        return
    }
    console.log("Katalogdagi fayllar:")
    files.forEach(file => console.log(file))
})
