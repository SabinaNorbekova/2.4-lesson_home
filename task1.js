// 1. 100ta tasodifiy sonni generatsiya qilib sonlar.txt fayliga yozadigan writeNumbers funksiyasini yozing. 
// Bunda har bir son yangi qatorga yozilishi kerak.
// So’ngra, ushbu fayldan kiritilgan sonlarni o’qib olib massivga yozuvchi readNumbers funksiyasi yozing.
import fs from "fs"
import path from "path"
function writeNumbers(){
    let newNums=""
    for(let i=0; i<100; i++){
        let num=Math.floor(Math.random()*1000)
        newNums+=num+"\n"
    }
    fs.writeFileSync("sonlar.txt", newNums, "utf-8")
    console.log("sonlar.txt fayliga 100ta son yozildi")
    return
}
function readNumbers(){
    try{
        let date=fs.readFileSync("sonlar.txt", "utf-8")
        let newArr=date.split("\n").filter(x=> x!=="").map(Number)
        console.log("Massiv: ", newArr)
        return newArr
    }catch(err){
        console.error("xatolik:", err)
    }
}
// writeNumbers()
readNumbers()