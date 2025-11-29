import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import BooksContainer from '../Books/BooksContainer';


const Home = () => {
    const data = useLoaderData();
    // console.log(books);
    
    return (
        <div>
           <Banner></Banner>
           <Suspense fallback={<p className="text-lg text-center">All Books are Loading.....</p>}>
            <BooksContainer data={data}></BooksContainer>
           </Suspense>
        </div>
    );
};

export default Home;