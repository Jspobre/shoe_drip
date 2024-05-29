import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, whiteLogo, blackLogo  } from "../assets/images";

 
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        id: 1,
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$300.20",
        rating: 4.5,
        description: "The Nike Air Jordan 10 is a pinnacle of athletic performance and enduring style. Inspired by Michael Jordan's iconic career, this sneaker combines premium materials with innovative design elements for optimal comfort and support. With its distinctive silhouette and timeless appeal, the Air Jordan 10 is a symbol of greatness both on and off the court, captivating sneaker enthusiasts worldwide."
    },
    {
        id: 2,
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$320.20",
        rating: 4.2,
        description: "The Nike Air Jordan 10, originally released in 1994, is a significant milestone in the storied history of the Air Jordan line. Designed by Tinker Hatfield, this model was notable for its minimalist aesthetic and the absence of the visible Air-Sole unit. The Air Jordan 10 features a clean, streamlined upper crafted from premium leather, with a distinctive speed-lacing system and a padded collar for enhanced comfort. One of its most memorable design elements is the outsole, which lists Michael Jordan's early career achievements, serving as a tribute to his legacy in the sport of basketball. Despite Michael Jordan's first retirement from basketball, the Air Jordan 10 solidified its place in sneaker culture, admired by both athletes and collectors for its timeless style and historical significance."
    },
    {
        id: 3,
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating: 4.1,
        description: "The Nike Air Jordan 100 represents a visionary leap into the future of basketball footwear, merging cutting-edge technology with the iconic legacy of the Air Jordan brand. This innovative model boasts a sleek, modern design featuring advanced materials such as ultra-lightweight Flyknit and responsive React cushioning for superior performance on the court. The Air Jordan 100 showcases a dynamic fit system that adapts to the wearer's foot for unparalleled support and comfort. Its aesthetics pay homage to the storied history of the Air Jordan line, with subtle nods to classic models in its design elements. As a symbol of the brand's relentless pursuit of excellence, the Air Jordan 100 stands as a testament to the evolution of basketball sneakers, pushing the boundaries of style, technology, and athletic performance."
    },
    {
        id: 4,
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating: 4.7,
        description: "The Nike Air Jordan 001 symbolizes the genesis of the legendary Air Jordan lineage, blending heritage and innovation. As a conceptual design, it harkens back to the origins of the brand, capturing the essence of the very first Air Jordan that debuted in 1985. The Air Jordan 001 combines retro aesthetics with modern performance technology, featuring premium leather uppers and a robust sole with advanced cushioning for maximum comfort and support. Its design pays tribute to the original Air Jordan 1 with classic colorways and iconic branding, while incorporating contemporary elements such as breathable mesh panels and enhanced ankle support. The Air Jordan 001 stands as a tribute to the enduring legacy of Michael Jordan and the groundbreaking impact his signature line has had on the world of sports and fashion."
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];