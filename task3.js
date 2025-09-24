// 3. Fayl Tizimi Bilan O'yin:
// FS modulidan foydalanib quyidagilarni bajaradigan Node.js dasturini yozing:
// "my_nodejs_files" deb nomlangan yangi katalog yarating.
// "my_nodejs_files" ichida "hello_world.txt" deb nomlangan matnli fayl yarating, ichida 
// "Hello, world!" deb yozilgan bo'lsin.
// "hello_world.txt" faylining tarkibini o'qib, uni konsolga chiqaring.
// Bonus: "hello_world.txt" fayliga hozirgi sana va vaqtni yangi qator sifatida qo'shing.
import fsPromises from "fs/promises";
import path from "path";
async function main() {
  try {
    const dirPath = path.join(process.cwd(), "my_nodejs_files");
    const filePath = path.join(dirPath, "hello_world.txt");

    await fsPromises.mkdir(dirPath, { recursive: true });
    await fsPromises.writeFile(filePath, "Hello, world!\n", "utf-8");

    let content = await fsPromises.readFile(filePath, "utf-8");
    console.log("Fayl tarkibi:\n", content);

    const now = new Date().toLocaleString();
    await fsPromises.appendFile(filePath, now + "\n", "utf-8");

    let updated = await fsPromises.readFile(filePath, "utf-8");
    console.log("Yangilangan fayl:\n", updated);
  } catch (err) {
    console.error("Xato:", err);
  }
}

main();
