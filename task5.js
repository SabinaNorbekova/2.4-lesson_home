// 5. Yo'l Topuvchi Pro:
// PATH modulidan foydalanib quyidagilarni bajaradigan Node.js dasturini yozing:
// Joriy ishchi katalogning absolyut yo'lini oling.
// "docs" deb nomlangan ichki katalog ichida "readme.md" deb nomlangan yangi faylga nisbatan nisbiy yo'lni yarating. 
// (Masalan, "./docs/readme.md")
// Bonus: "docs" katalogi mavjudligini tekshiring. Agar mavjud bo'lmasa, "readme.md" yaratishdan oldin uni yarating.
import fs from "fs"
import path from "path"
let currentPath = process.cwd()
console.log("Joriy ishchi katalog:", currentPath)

let docsDir = path.join(currentPath, "docs")
let filePath = path.join(docsDir, "readme.md")

console.log("readme.md yuli:", filePath)

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
  console.log("docs katalogi yaratildi")
}

fs.writeFileSync(filePath, "Hello from readme.md!\n", "utf-8")
console.log("readme.md fayli yaratildi")
