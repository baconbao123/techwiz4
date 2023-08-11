import HomePage from "../Components/HomePage/HomePage";
import Blog from "../Components/BlogPage/Blog";
import BlogItem from "../Components/BlogPage/BlogItem";
import ProductDetail from "../Components/Layout/Products/ProductDetails/ProductDetails";
import AllProducts from "../Components/Layout/Products/AllProducts/AllProducts";
import ServicePage from "../Components/ServicePage/ServicePage";
import ProductTool from "../Components/Layout/Products/ProductTool/ProductTool";


import Setting from "../Components/Setting/Setting";
import Login from "../Components/Authenticate/Login";

// service
import ServiceDetail from "../Components/WorkService/ServiceDetail";
import ServiceDetail2 from "../Components/GiftService/ServiceDetail2";
import ServiceDetail3 from "../Components/DercoService/ServiceDetail3";

export const AllRoutes=[
{name:'home',link:'',component:<HomePage />},
{name:'shop',link:'/shop/all',component: <AllProducts/>},
{name:'shop',link:'/shop/all/tree/:id',component: <ProductDetail/>},
{name:'shop',link:'/shop/all/tool/1',component: <ProductTool/>},
{name:'bonsai',link:'/shop/bonsai',component:''},
{name:'Flowering Shrubs',link:'/shop/floweringshrubs',component:''},
{name:'indoor',link:'/shop/indoor',component:''},
{name:'outdoor',link:'/shop/outdoor',component:''},
{name:'Succulent',link:'/shop/succulent',component:''},
{name:'Tools',link:'/shop/tool',component:''},
{name:'Fertilize',link:'/shop/fertilize',component:''},
{name:'FeedBack',link:'/feedback',component:''},

// service
{name:'Service',link:'/service',component:<ServicePage />},
{name:'Service1',link:'/service/1',component:<ServiceDetail />},
{name:'Service2',link:'/service/2',component:<ServiceDetail2 />},
{name:'Service3',link:'/service/3',component:<ServiceDetail3 />},

// end--ser

{name:'BLog',link:'/blog',component:<Blog />},
{name:'BLogItem',link:`/blog/:id`,component:<BlogItem />},
{name:"Setting",link:'/setting',component:<Setting />},

];