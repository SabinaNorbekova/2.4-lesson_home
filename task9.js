// 9. Qo'shish! :
// Endi bir oz ziravor qo'shamiz! " This is appended content." qo'shimcha xabarini "message.txt" 
// fayliga qo'shadigan fs.appendFile dan foydalaning.
// Yana xatolarni muloyimlik bilan qo'lga olish kerak. Qo'shimcha muvaffaqiyatli bo'lganida 
// muvaffaqiyat xabarini chiqaring.
import fs from "fs"
try{
    fs.appendFileSync("message.txt", " This is appended content.", "utf-8")
    console.log("Muvafaqiyatli appended")
}catch(err){
    console.error("Xatolik: ", err)
}