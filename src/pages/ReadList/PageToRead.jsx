import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from 'recharts';

const PyramidBar = (props) => {
    const { x, y, width, height, fill } = props;

    const path = `
        M ${x + width / 2} ${y} 
        L ${x} ${y + height} 
        L ${x + width} ${y + height} 
        Z
    `;

    return <path d={path} fill={fill} />;
};


const PageToRead = () => {
    
    const data = useLoaderData();
    // console.log(data);
    const colors = [
        "#FF5733",
        "#33B5FF",
        "#6DFF33",
        "#FF33A8",
        "#FFC733",
        "#8E44AD",
        "#00C49F",
        "#FF8042"
    ];

    
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold my-5">page To Read :{data.length}</h1>
            <BarChart width={1200} height={600} data={data}>
                <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
                <XAxis dataKey={"bookName"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={"totalPages"}  fill="#8884d8" shape={<PyramidBar></PyramidBar>}>
                 {data.map((_, index) => (
                        <Cell key={index} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PageToRead;