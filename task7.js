// 7. O'qish va O'rganish:
// Foydalanuvchidan process.argv yordamida ko'rsatilgan fayl tarkibini o'qish uchun fs.readFile dan foydalanadigan 
// Node.js skriptini yozing.
// Agar fayl mavjud bo'lsa, uning tarkibini konsolda ko'rsating.
// Agar fayl mavjud bo'lmasa yoki xato bo'lsa, foydalanuvchi uchun do'stona xato xabarini berib turadigan tuzilma yarating
import fs from "fs"
const fileName = process.argv[2]
if (!fileName) {
  console.log("Iltimos, fayl nomini ko'rsating!")
  console.log("Masalan: node script.js test.txt")
  process.exit(1)
}
fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.error(`Faylni o'qishda xato: ${err.message}`)
  } else {
    console.log("Fayl tarkibi:\n")
    console.log(data)
  }
})
