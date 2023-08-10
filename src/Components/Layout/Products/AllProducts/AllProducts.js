import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form, Dropdown } from 'react-bootstrap'
import bannerallpro from '../../../../assets/Layout_img/banner-allpro.png'
import './AllProducts.scss'
import { AllProduct } from "../../../../Data/AllProduct";
import { InputText } from "primereact/inputtext";
import { CardProduct } from "../ProductDetails/CardProduct/CardProduct";


const productList = AllProduct
console.log(productList);


const AllProducts = () => {
    const [categoryName, setCategoryName] = useState('All Product')
    const [searchValue, setSearchValue] = useState('')
    const [option, setOption] = useState(0)
    const AllProduct=productList;
    const [product,setProduct] = useState(productList)
    const [bonsai,setBonsai]=useState([]);
    const [flower,setFlower]=useState([]);
    const [indoor,setIndoor] = useState([]);
    const [outdoor,setOutdoor]=useState([]);
    const [succulent,setScculent]=useState([]);
    console.log("Check indoor",indoor);
   
    console.log("Check flower",flower);
    console.log("Check outdoor",outdoor);
    console.log("Check succulent",succulent);
    console.log("Check bonsai",bonsai);
    useEffect(()=> {
        let indoorArr=[];
        let outdoorArr=[];
        let flowerArr=[];
        let bonSaiArr=[];
        let succulentArr=[];
        productList.filter( (item)=>{
            if(item.category==='indoor'){
              indoorArr.push(item);
              
            }
            else if (item.category==='outdoor') {
                outdoorArr.push(item);
              
            }
            else if (item.category==='floweringshrubs') {
                flowerArr.push(item);
              
            }
            else if (item.category==='bonsai') {
                bonSaiArr.push(item);
               
            }
            else if (item.category==='succulents') {
                succulentArr.push(item);
            }
        })
    
    setIndoor(indoorArr)
    setOutdoor(outdoorArr)
    setFlower(flowerArr)
    setBonsai(bonSaiArr)
    setScculent(succulentArr)

    },[])
    const [currentDisplayProduct, setCurrentDisplayProduct] = useState(8);
    const handelChange=(e)=> {
     
        if(e.target.value==='1') {
            console.log("BONSAI");
            setProduct(bonsai)
        }
        else  if(e.target.value==='2') {
            setProduct(flower)
        }
        else  if(e.target.value==='3') {
            setProduct(indoor)
        }
        else  if(e.target.value==='4') {
            setProduct(outdoor)
        }
        else  if(e.target.value==='5') {
            setProduct(succulent)
        }
        else  if(e.target.value==='Category') {
            setProduct(AllProduct)
        }
    }



    return (

        <div className="allproduct-master">
            <div className="allproduct-div">
                <div className="container">
                    <Row className="filter-div">
                        <Col lg={2}>
                            <Form.Select className="form-select-catalog" aria-label="Category" onChange={e=>handelChange(e)} >
                                <option checked>Category</option>
                                <option value={1}>Bonsai</option>
                                <option value={2}>Flowering Shrubs</option>
                                <option value={3}>Indoor</option>
                                <option value={4}>Outdoor</option>
                                <option value={5}>Succulents</option>
                            </Form.Select>
                        </Col>
                        <Col lg={2}>
                            <Form.Select className="form-select-catalog">
                                <option checked>Price</option>
                                <option>20</option>
                                <option>30</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6}></Col>
                        <Col lg={2}>
                            <InputText value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="input-filter" />
                        </Col>
                    </Row>
                    <div className="plant-div">
                        <span className="label-catelogy">Plants</span>

                        <div className="card-of-cate">
                            <Row>
                                {product.map((item, index) => (
                                    <Col lg={3} key={index} className="mt-4">
                                        <CardProduct item={item} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts

