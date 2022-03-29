import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch`data.json`
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div className='container my-5'>
            <h1>Services</h1>
           <div className='row '>
           {
                service.map(product => <Service
                key={product.id}
                product={product}
                ></Service>)
            }
           </div>
           

        </div>
    );
};

export default Services;

// const array =[
//     {
//         "id": 1,
//         "name": "IELTS Course",
//         "detail": "This is a academic course",
//         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab voluptates quisquam, ratione alias repudiandae. Aperiam quidem at maiores earum.",
//         "img": "https://i.ibb.co/FBnHry6/New-Project-12.jpg",
//         "price": "15000"
//       },
//     {
//         "id": 2,
//         "name": "GRE Course",
//         "detail": "This is a supper crazy GRE course for beginners",
//         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab voluptates quisquam, ratione alias repudiandae. Aperiam quidem at maiores earum..",
//         "img": "https://i.ibb.co/my9j493/New-Project-11.jpg",
//         "price": "22000"
//       },
//     {
//         "id": 3,
//         "name": "Listing Course",
//         "detail": "special listing course for everyone",
//         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab voluptates quisquam, ratione alias repudiandae. Aperiam quidem at maiores earum.",
//         "img": "https://i.ibb.co/m0QL5b1/New-Project-9.jpg",
//         "price": "8000"
//       },
//     {
//         "id": 4,
//         "name": "Speaking Course",
//         "detail": "It is created for intermediate student's",
//         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab voluptates quisquam, ratione alias repudiandae. Aperiam quidem at maiores earum..",
//         "img": "https://i.ibb.co/1dcpJm6/New-Project-8.jpg",
//         "price": "12000"
//       },
//     {
//         "id": 5,
//         "name": "Special Writing Course",
//         "detail": "It is organized for report writer",
//         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab voluptates quisquam, ratione alias repudiandae. Aperiam quidem at maiores earum.",
//         "img": "https://i.ibb.co/02WVHrf/New-Project-7.jpg",
//         "price": "18000"
//       },
//     {
//         "id": 5,
//         "name": "Reading Corse",
//         "detail": "It is organized for everyone to develop reading skills",
//         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab voluptates quisquam, ratione alias repudiandae. Aperiam quidem at maiores earum.",
//         "img": "https://i.ibb.co/n3gdHXs/New-Project-10.jpg",
//         "price": "18000"
//       }
// ];






