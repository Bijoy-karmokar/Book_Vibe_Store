import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getBookDB } from "../../Utility/AddToDB";
import Book from "../Books/Book";

const ReadList = () => {
  const data = useLoaderData();
  const [readListed, setReadListed] = useState([]);
  const [sort, setSort] = useState("");
  // console.log(data);

  useEffect(() => {
    const storedBookData = getBookDB();
    // console.log(storedBookData);
    const convertedBook = storedBookData.map((id) => parseInt(id));
    // console.log(convertedBook);

    const myReadList = data.filter((book) =>
      convertedBook.includes(book.bookId)
    );
    setReadListed(myReadList);
    // console.log(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if(type === "pages"){
      const sortedData = [...readListed].sort((a,b)=>a.totalPages - b.totalPages);
      setReadListed(sortedData)
    }if(type === "ratings"){
      const sortedData = [...readListed].sort((a,b)=>a.rating - b.rating);
      setReadListed(sortedData);
    }
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Mark as Read</Tab>
        <Tab>Add to wishList</Tab>
      </TabList>
      <details className="dropdown">
        <summary className="btn m-1">{sort ? sort : ''}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleSort("pages")}>sorted Pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort("ratings")}>sroted rattings</a>
          </li>
        </ul>
      </details>
      <TabPanel>
        <h2>Total ReadList : {readListed.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {readListed.map((read) => (
            <Book key={read.bookId} book={read}></Book>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ReadList;
