const getBookDB =()=>{
    const bookDataDB = localStorage.getItem('readList');
    if(bookDataDB){
        const bookStoredData = JSON.parse(bookDataDB);
        return bookStoredData;
    }else{
        return [];
    }
}

const addToData =(id)=>{
    const storedBookData = getBookDB();

    if(storedBookData.includes(id)){
        
    }
}