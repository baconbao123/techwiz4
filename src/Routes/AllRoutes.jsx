import HomePage from "../Components/HomePage/HomePage";
import Blog from "../Components/BlogPage/Blog";
import BlogItem from "../Components/BlogPage/BlogItem";

export const AllRoutes=[
{name:'home',link:'',component:<HomePage />},
{name:'shop',link:'/shop/all',component:''},

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
// {name:'BLogItem',link:`/blog/:id`,component:<BlogItem />},







];