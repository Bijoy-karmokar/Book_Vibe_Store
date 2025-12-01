import React from "react";
import { useLoaderData, useParams } from "react-router";
import {addToData} from "../../Utility/AddToDB"

const BookDetails = () => {
  const { bookId } = useParams();
  const convertedId = parseInt(bookId);
  const data = useLoaderData();
  //   console.log(bookId,data);

  const singleBook = data.find((book) => book.bookId === convertedId);
  // console.log(singleBook);

  const {
    bookName,
    author,
    image,
    rating,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    review,
  } = singleBook;

  const handleRead =(id)=>{
      addToData(id);
  }

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="bg-base-300 p-16 rounded-2xl flex-1">
          <img
            src={image}
            className="w-[450px] h-[500px] rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl mb-3 font-bold">{bookName}</h1>
          <div className="space-y-2">
            <p>by : {author}</p>
            <p className="border-1 border-gray-300"></p>
            <p>Fiction</p>
            <p className="border-1 border-gray-300"></p>
          </div>
          <p className="py-6">Review:{review}</p>
          <div className="flex items-center">
            <p>tags</p>
            {tags.map((tag, index) => (
              <button
                className="btn btn-soft btn-success rounded-3xl ml-3"
                key={index}
              >
                {tag}
              </button>
            ))}
          </div>
          <p className="border-1 border-gray-300"></p>

          <div className="text-lg space-y-1">
            <h3>Number of Pages:{totalPages}</h3>
            <h3>Publisher:{publisher}</h3>
            <p>Year of Publising:{yearOfPublishing}</p>
            <p>Rating:{rating}</p>
          </div>
          <button
          onClick={()=>handleRead(bookId)}
            className=" cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative  hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Mark as Read</span>
          </button>
          <button
            className="rounded ml-3 cursor-pointer px-5 py-2.5 overflow-hidden group bg-green-500 relative  hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Add to WishList</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
