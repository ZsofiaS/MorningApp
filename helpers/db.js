import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('journal.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tr) => {
      tr.executeSql(
        'CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY NOT NULL, entry TEXT NOT NULL, date INTEGER NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}
