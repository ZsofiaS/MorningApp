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
};

export const insertEntry = (entry, date) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tr) => {
      tr.executeSql(
        'INSERT INTO entries (entry, date) VALUES (?, ?);',
        [entry, date],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchEntries = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tr) => {
      tr.executeSql(
        'SELECT * FROM entries;',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}

export const deleteEntry = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tr) => {
      tr.executeSql(
        'DELETE FROM entries WHERE id=?;',
        [id.toString()],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}
