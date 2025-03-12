import * as sqlite from "sqlite";
import sqilte3 from "sqlite3";
import path from "path";

export async function 
sqliteConnection() {
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "database.db"),
        driver: sqilte3.Database,
    });

    return database as sqlite.Database;
}