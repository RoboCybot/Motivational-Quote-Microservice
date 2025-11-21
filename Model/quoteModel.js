import db from "../db/quotedb.db";

export const getQuote = () => {
    return db.prepare("SELECT * FROM quotes WHERE funVal = 0 ORDER BY RANDOM() LIMIT 1").get();
};

export const getFunQuote = () => {
    return db.prepare("SELECT * FROM quotes WHERE funVal = 1 ORDER BY RANDOM() LIMIT 1").get();
};