import HomePage from "../Components/HomePage/HomePage";
import Blog from "../Components/BlogPage/Blog";
import BlogItem from "../Components/BlogPage/BlogItem";
import ProductDetail from "../Components/Layout/Products/ProductDetails/ProductDetails";
import AllProducts from "../Components/Layout/Products/AllProducts/AllProducts";
import ServicePage from "../Components/ServicePage/ServicePage";
import ProductTool from "../Components/Layout/Products/ProductTool/ProductTool";
import ProductFertilizer from "../Components/Layout/Products/ProductFertilizer/ProductFertilizer";

import Bonsai from "../Components/Layout/Products/AllCategory/Bonsai/Bonsai";
import FloweringShrubs from "../Components/Layout/Products/AllCategory/FloweringShrubs/FloweringShrubs";
import Indoor from "../Components/Layout/Products/AllCategory/Indoor/Indoor";
import Outdoor from "../Components/Layout/Products/AllCategory/Outdoor/Outdoor";
import Succulent from "../Components/Layout/Products/AllCategory/Succulent/Succulent";
import Tool from "../Components/Layout/Products/AllCategory/Tool/Tool";
import Fertilizer from "../Components/Layout/Products/AllCategory/Fertilizer/Fertilizer";


import Setting from "../Components/Setting/Setting";
import Login from "../Components/Authenticate/Login";
// Feedback
import FeedBack from "../Components/FeedBack/FeedBack";
// service
import ServiceDetail from "../Components/WorkService/ServiceDetail";
import ServiceDetail2 from "../Components/GiftService/ServiceDetail2";
import ServiceDetail3 from "../Components/DercoService/ServiceDetail3";
import Cart from "../Components/Cart/Cart";

export const AllRoutes=[
    
{name:'home',link:'',component:<HomePage />},
{name:'shop',link:'/shop/all',component: <AllProducts/>},
{name:'tree',link:'/shop/all/tree/:id',component: <ProductDetail/>},
{name:'tool',link:'/shop/all/tool/:id',component: <ProductTool/>},
{name:'fertilizer',link:'/shop/all/fertilizer/:id',component: <ProductFertilizer/>},
{name:'bonsai',link:'/shop/all/tree/bonsai',component: <Bonsai />},
{name:'Flowering Shrubs',link:'/shop/all/tree/floweringshrubs',component: <FloweringShrubs />},
{name:'indoor',link:'/shop/all/tree/indoor',component: <Indoor />},
{name:'outdoor',link:'/shop/all/tree/outdoor',component:<Outdoor />},
{name:'Succulent',link:'/shop/all/tree/succulent',component: <Succulent />},
{name:'Tools',link:'/shop/tool',component: <Tool/>},
{name:'Fertilize',link:'/shop/fertilizer',component:<Fertilizer />},
{name:'Services',link:'/service',component:<ServicePage/>},
{name:'FeedBack',link:'/feedback',component:<FeedBack/>},

// service
{name:'Service',link:'/service',component:<ServicePage />},
{name:'Service1',link:'/service/1',component:<ServiceDetail />},
{name:'Service2',link:'/service/2',component:<ServiceDetail2 />},
{name:'Service3',link:'/service/3',component:<ServiceDetail3 />},

// end--ser
// feedBack
{name:'Feedback',link:'/feedback',component:<FeedBack/>},
//end--feedback
{name:'BLog',link:'/blog',component:<Blog />},
{name:'BLogItem',link:`/blog/:id`,component:<BlogItem />},
{name:'Card',link:`/cart`,component:<Cart />},
{name:'Setting',link:`/setting`,component:<Setting />},

];