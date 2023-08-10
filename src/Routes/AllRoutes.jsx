import HomePage from "../Components/HomePage/HomePage";
import ProductDetail from "../Components/Layout/Products/ProductDetails/ProductDetails";
import AllProducts from "../Components/Layout/Products/AllProducts/AllProducts";



export const AllRoutes=[
{name:'home',link:'',component:<HomePage />},
{name:'shop',link:'/shop/all',component: <AllProducts/>},
{name:'shop',link:'/shop/all/category/:id',component: <ProductDetail/>},
{name:'bonsai',link:'/shop/bonsai',component:''},
{name:'Flowering Shrubs',link:'/shop/floweringshrubs',component:''},
{name:'indoor',link:'/shop/indoor',component:''},
{name:'outdoor',link:'/shop/outdoor',component:''},
{name:'Succulent',link:'/shop/succulent',component:''},
{name:'Tools',link:'/shop/tool',component:''},
{name:'Fertilize',link:'/shop/fertilize',component:''},
{name:'Services',link:'/service',component:''},
{name:'FeedBack',link:'/feedback',component:''},








];