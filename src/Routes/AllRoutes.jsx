import HomePage from "../Components/HomePage/HomePage";
import Blog from "../Components/BlogPage/Blog";
import BlogItem from "../Components/BlogPage/BlogItem";
import ProductDetail from "../Components/Layout/Products/ProductDetails/ProductDetails";
import AllProducts from "../Components/Layout/Products/AllProducts/AllProducts";
import ProductTool from "../Components/Layout/Products/ProductTool/ProductTool";





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
{name:'Services',link:'/service',component:''},
{name:'FeedBack',link:'/feedback',component:''},

{name:'BLog',link:'/blog',component:<Blog />},
{name:'BLogItem',link:`/blog/:id`,component:<BlogItem />},

];