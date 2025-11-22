import Database from "better-sqlite3";

const db = new Database("./db/quotedb.db");

try {
    db.prepare(
        "CREATE TABLE IF NOT EXISTS quotes (quoteId INTEGER PRIMARY KEY AUTOINCREMENT, quote TEXT UNIQUE NOT NULL, funVal INTEGER NOT NULL)"
    ).run();

    // const quote = "Don't worry about the loss guys. Yall did a great job pressing buttons!"

    // db.prepare(
    //     "INSERT INTO quotes (quote, funVal) VALUES (?,?)"
    // ).run(quote,1);

    // db.prepare(
    //     "UPDATE quotes SET quote = ? WHERE quoteId = ?"
    // ).run(quote, 3);

} catch (error) {
    console.error("Error creating quotes table:", error);
}

export default db;