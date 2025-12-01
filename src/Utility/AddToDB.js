// import { ToastContainer, toast } from 'react-toastify';

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
        alert("Book Data already Exist");
        // <ToastContainer />
    }else{
        storedBookData.push(id);
        // console.log(storedBookData);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data);
    }
}

export {addToData,getBookDB};