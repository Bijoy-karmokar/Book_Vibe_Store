import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';


const Home = () => {
    const books = useLoaderData();
    // console.log(books);
    
    return (
        <div>
           <Banner></Banner>
           <Suspense fallback={<p className="text-lg text-center">All Books are Loading.....</p>}>
            <Books books={books}></Books>
           </Suspense>
        </div>
    );
};

export default Home;