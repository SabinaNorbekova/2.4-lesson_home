// 8. Yozishni Boshlaymiz! :
// "Hello World!" xabarini "message.txt" deb nomlangan yangi faylga yozadigan fs.writeFileSync 
// dan foydalanadigan skript yarating.
// Potentsial xatolarni muloyimlik bilan qo'lga olish (masalan, try-catch bloki yordamida).
// Agar fayl muvaffaqiyatli yozilgan bo'lsa, konsolda muvaffaqiyat xabarini chiqaring.
import fs from "fs"
import path from "path"
try {
    fs.writeFileSync("message.txt", "Hello World!", "utf-8")
    console.log("muvafaqiyatli yozildi")
}catch(err){
    console.error("xatolik: ", err)
}