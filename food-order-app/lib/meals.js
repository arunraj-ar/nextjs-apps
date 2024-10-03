import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //simulated delay
  //   throw new Error("Error fetching meals data"); //simulated error
  return db.prepare("SELECT * FROM meals").all();
}


export async function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}