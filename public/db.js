let db;

const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
  
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Whoops! " + event.target.errorCode);
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["Budget"], "readwrite");

  // access your Budget object store
  const store = transaction.objectStore("Budget");

  // add record to your store with add method.
  store.add(record);
}

function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["Budget"], "readwrite");
  // access your Budget object store
  const store = transaction.objectStore("Budget");
  // get all records from store and set to a variable
  const getAll = store.getAll();

  console.log("check databse")
  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
        // if successful open a transaction on your pending db
        const transaction = db.transaction(["pending"], "readwrite");

        // access your pending object store
        const store = transaction.objectStore("pending");

        
        store.clear();
      });
    }
  };
}

function checkDB() {
  // open a transaction on your pending db
  const transaction = db.transaction(["Budget"], "readwrite");
  // access your Budget object store
  const store = transaction.objectStore("Budget");
  // get all records from store and set to a variable
  const getAll = store.getAll();

  console.log("check databse")
  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "GET",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
        // if successful open a transaction on your pending db
        const transaction = db.transaction(["pending"], "readwrite");

        // access your pending object store
        const store = transaction.objectStore("pending");
      });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);