import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name:'tuyen',
            email:'tuyenvo@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,  
        },
        {
            name:'Duongthihienvi',
            email:'vichodai@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        },
    ],
    
    
    products: [
        {
            
            name: 'Xiaomi 11T 5G',
            category:'Dien thoai',
            image: '/images/1.jpg',
            price: 309,
            countInStock: 10,
            brand: 'teeworld',
            rating:4.8,
            numReviews:10,
            description:'Màn hình: AMOLED6.67"Full HD+ / Hệ điều hành: Android 11 / Camera sau: Chính 108 MP & Phụ 8 MP, 5 M/ Camera trước: 16 MP/ Chip: MediaTek Dimensity 1200/ RAM: 8 GB/ Bộ nhớ trong: 128 GB/ SIM: 2 Nano SIMHỗ trợ 5G/ Pin, Sạc: 5000 mAh67 W',

        },
        {
            name: 'Xiaomi Redmi Note 5 Pro 4GB',
            category:'Dien thoai',
            image: '/images/2.jpg',
            price: 115,
            countInStock: 20,
            brand: 'teeworld',
            rating:4.0,
            numReviews:14,
            description:'chat luong cao',

        },
        {
        
            name: 'Xiaomi Redmi 9A 2GB/32GB',
            category:'Shirts',
            image: '/images/3.jpg',
            price: 175,
            countInStock: 0,
            brand: 'teeworld',
            rating:3.0,
            numReviews:12,
            description:'chat luong cao',

        },
        {
           
            name: ' Teddy Bear',
            category:'Shirts',
            image: '/images/4.jpg',
            price: 275,
            countInStock: 15,
            brand: 'teeworld',
            rating:3.5,
            numReviews:16,
            description:'chat luong cao',

        },
        {
            
            name: 'Coffin Dance',
            category:'Shirts',
            image: '/images/5.jpg',
            price: 250,
            countInStock: 5,
            brand: 'teeworld',
            rating:4.5,
            numReviews:13,
            description:'chat luong cao',

        },
        {
           
            name: 'Lion Dance',
            category:'Shirts',
            image: '/images/6.jpg',
            price: 200,
            countInStock: 12,
            brand: 'teeworld',
            rating:5,
            numReviews:17,
            description:'chat luong cao',

        },
        {
           
            name: 'Cerberus',
            category:'Shirts',
            image: '/images/7.jpg',
            price: 305,
            countInStock: 10,
            brand: 'teeworld',
            rating:4.5,
            numReviews:20,
            description:'chat luong cao',

        },
        {
            
            name: 'Apollo',
            category:'Shirts',
            image: '/images/8.jpg',
            price: 350,
            countInStock: 0,
            brand: 'teeworld',
            rating:4.5,
            numReviews:34,
            description:'chat luong cao',

        },
      
   
     
    ]
}
export default data;