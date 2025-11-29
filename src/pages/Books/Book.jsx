import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({book}) => {
    // category,publisher,totalPages,yearOfPublishing,review
    const {bookId,bookName,author,image,rating,tags} =book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100  shadow-md my-8">
      <figure className="bg-base-300 m-6 rounded-2xl">
        <img
        className="w-36 h-56 py-6"
          src={image}
          alt="Books image not found"
        />
      </figure>
      <div className="card-body">
         <div className="flex">
            {
            tags.map((tag,index)=><button  className="btn btn-soft btn-success rounded-3xl ml-3" key={index}>{tag}</button>)
            }
         </div>
       <div className="space-y-5">
         <p className="text-2xl font-semibold">{bookName}</p>
        <h3 className="text-lg font-medium">by:{author}</h3>
         <p className="border-1 border-dashed"></p>
         <div>

         </div>
       </div>
        <div className="card-actions justify-between items-center mb-3">
          <div className="text-xl">Rating</div>
          <div className="flex items-center gap-2">
            <p className="text-lg">{rating}</p>
            <Star/>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
