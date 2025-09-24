// 11. create.js - files papkasida fresh.txt nomli yangi fayl yarating, ichiga "I am fresh and young" 
// matnini yozing. Agar fayl allaqachon mavjud bo'lsa, "FS
// operation failed" xabari bilan xato tashlashingiz kerak.
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fresh.txt");
async function createFile() {
  try {
    try {
      await fs.access(filePath); 
      throw new Error("FS operation failed");
    } catch {
    }
    await fs.writeFile(filePath, "I am fresh and young", "utf-8");
    console.log("File created successfully");
  } catch (err) {
    console.error("FS operation failed");
  }
}
createFile();
