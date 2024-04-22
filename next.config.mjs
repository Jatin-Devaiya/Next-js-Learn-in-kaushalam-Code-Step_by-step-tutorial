/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["cdn.dummyjson.com",]
    },
   redirects:async()=>{
    return [
        {
            source:"/user",
            destination:"/",
            permanent:false,
        },
        {
            source:"/user/:userId",
            destination:"/",
            permanent:false,
        }
    ]
   } 
};

export default nextConfig;
