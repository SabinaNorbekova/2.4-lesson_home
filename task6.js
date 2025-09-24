// 6. Eventful Evening :
// Bu biroz murakkabroq! EVENTS modulidan foydalanib sodda hodisa yuboruvchini yaratadigan Node.js dasturini yozing.
// Hodisa yuboruvchi foydalanuvchidan yangi qator kirganda "dataReceived" hodisasini chiqarishi kerak.
// Kiritilgan ma'lumotlarni konsolga yozib chiqaradigan tinglovchi funksiyani yarating.
import { EventEmitter } from "events"
const emitter = new EventEmitter()
emitter.on("dataReceived", (data) => {
  console.log(`Yangi ma'lumot kiritildi: ${data}`)
})
process.stdin.on("data", (input) => {
  const text = input.toString().trim()
  emitter.emit("dataReceived", text)
})
