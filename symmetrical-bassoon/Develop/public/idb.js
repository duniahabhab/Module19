
let db;

const request = indexedDB.open('symmetrical_bassoon', 1);


request.onupgradeneeded = function(event) {
 
    const db = event.target.result;
     
    db.createObjectStore('symmetrical_bassoon', { autoIncrement: true });
  };

  
request.onsuccess = function(event) {
   
    db = event.target.result;
  
    if (navigator.onLine) {
     
    }
  };
  
  request.onerror = function(event) {
    
    console.log(event.target.errorCode);
  };

 
function saveRecord(record) {
    
    const transaction = db.transaction(['symmetrical_bassoon'], 'readwrite');
  
   
    const bassoonObjectStore = transaction.objectStore('symmetrical_bassoon');
  
    
    bassoonObjectStore.add(record);
  }