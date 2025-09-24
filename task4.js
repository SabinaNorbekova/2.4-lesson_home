// 4. Operatsion Tizim Odiseyasi:
// OS modulidan foydalanib quyidagilarni bajaradigan Node.js dasturini yozing:
// Dasturni ishga tushirgan kompyuteringizning host nomini oling.
// Hozirgi foydalanuvchining foydalanuvchi nomini oling.
// BONUS
// Bu ikki ma'lumotni foydalanuvchiga do'stona formatda konsolga chiqaring 
// (masalan, "Hostname: [hostname], Username: [username]")
import os from "os"
let hostName=os.hostname()
let userName=os.userInfo().username
console.log(`Hostname: [${hostName}], Username: [${userName}]`)