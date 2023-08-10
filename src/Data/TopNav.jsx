
import { BiHomeAlt,BiShoppingBag ,BiDollarCircle} from "react-icons/bi";
import { VscFeedback } from 'react-icons/vsc';
import { FiPhoneCall } from 'react-icons/fi'
export const TopNav=[
    {id:'1',name:'Home',link:'/',icon:< BiHomeAlt />},
    {id:'2',name:'Shop',icon:<BiShoppingBag/>,child:[
        {id:'child1',nameChild1:'All',linkChild:'/shop/all',child:[]},
        { id:'child2',nameChild1: 'Plants',child:[
            { id:'plant0',nameChild2:'All plants',link:'/shop/plant'},
            { id:'plant1',nameChild2:'Bonsai',link:'/shop/bonsai'},
            { id:'plant2',nameChild2:'Flowering Shrubs',link:'/shop/floweringshrubs'},
            { id:'plant3',nameChild2:'Indoor',link:'/shop/indoor'},
            { id:'plant4',nameChild2:'Outdoor',link:'/shop/outdoor'},
            { id:'plant5',nameChild2:'Succulent',link:'/shop/succulent'},

        ]},
        {id:'child3',nameChild1:'Tools',linkChild:'/shop/tool',child:[]},
        {id:'child4',nameChild1:'Fertilize',linkChild:'/shop/fertilize',child:[]},
    ]},
    {id:'3',name:'Services',link:'/service',icon:<BiDollarCircle/>,child:[
       
    ]},
    {id:'4',name:"FeedBack",link:'/feedback',icon:<VscFeedback/>},
    // {id:'5',name:"Contact Us",link:'/contactUs',icon:<FiPhoneCall/>}
]
