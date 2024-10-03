import React from "react";
import "./Services.css";
import { useState } from "react";
import wedding from "./wedding.jpg"
import candid from "./candid2.webp"
import black from "./black.webp"
import outdoor from "./outdoor.webp"
import commercial from "./commercial.jpg"
const Services = () => {


    const photographyServices = [
        {
            id: 1,
            title: "Wedding Shoot",
            description: "Capture the essence of your special day with our professional wedding photography.",
            imageUrl: wedding
        },
        {
            id: 2,
            title: "Candid Shoot",
            description: "Natural and spontaneous moments captured beautifully.",
            imageUrl: candid
        },
        {
            id: 3,
            title: "Outdoor Wedding Shoot",
            description: "Beautiful outdoor settings for stunning wedding albums.",
            imageUrl: outdoor
        },
        {
            id: 4,
            title: "Baby Shoot",
            description: "Special moments captured for your little ones.",
            imageUrl: black
        },
        {
            id: 5,
            title: "Commercial Shoot",
            description: "Professional photography services for commercial purposes.",
            imageUrl: commercial
        }
    ];

    const designservices = [
        {

        }
    ]
    
    const [category,setCategory] = useState("")

    const selectCategory =(categoryName)=>{
        setCategory(categoryName)

    }

    console.log(category)

    


    
    return (
        <>
            <div className="services-container">
                <p className="services-heading">Services We Offer</p>
            </div>
            <div className="services-text">
                <ul className="services-ul">
                    <li className="services-li" onClick={()=>selectCategory("photo")}>Photography and Videography</li>
                    
                    
                    <li className="services-li"  onClick={()=>selectCategory("Design Studio")}>Design Studio</li>
                    <li className = "services-li"  onClick={()=>selectCategory("Social media")}>Social Media Marketing</li>
                    <li className="services-li"  onClick={()=>selectCategory("printing")}>Printing</li>
                </ul>
                
            </div>
            {category === "photo" || category === "" ? (
                <div className="photography-details">
                    <ul className="photography-list">
                        {photographyServices.map((service) => (
                            <li key={service.id} className="photography-item">
                                <h3 className="service-title">{service.title}</h3>
                                <img src={service.imageUrl} alt={service.title} className="service-image" />
                                <p className="service-description">{service.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

            {category == "design" && <div className = "design-container">
                <ul className="photography-list">
                {designservices.map((design)=>{
                    <li key={design.id} className="photography-item">
                                <h3 className="service-title">{design.title}</h3>
                                <img src={design.imageUrl} alt={design.title} className="service-image" />
                                
                    </li>

                })}
                </ul>
                </div>}

        </>

    );
};

export default Services;