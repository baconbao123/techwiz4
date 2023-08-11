import React, {useState} from 'react'
import './BlogDetail.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import blogDetail from '../../assets/Layout_img/BlogDetail.png'
import { BreadCrumb } from 'primereact/breadcrumb';
import { Rating } from "primereact/rating";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
export default function BlogDetail({ item }) {
  const items = [{ label: 'Blog', url: '/blog' }, { label: item.name, url: `/blog/${item.id}` }];
  const home = { icon: <AiOutlineHome />, url: '/' }
  const [ratingOrtherUser, setRatingOrtherUser] = useState(null);
  const [ratingUser, setRatingUser] = useState(null);
  const [commentValue, setCommentValue] = useState('');
  const [nameComment, setNameComment] = useState('')
  const [checked, setChecked] = useState(false);
  return (
    <Container fluid className='blog-detail'>
   


        <img src={blogDetail} alt="" className='logo-baner' />

     

      <Container className='mt-5 mb-5'>
        <BreadCrumb model={items} home={home} className='mt-3' />
        <Row className='mt-5 mb-5 text-center'>
          <div className='item-name mb-2 fs-1'>
            {item.name}
          </div>
          <div className='item-time text-center'>{item.time}</div>
        </Row>
        <Row className='content'>
          {item.content}
        </Row>
        <Row>
          <div className="your-review-div">
            <Row style={{ padding: '0px 40px' }}>
              <Col lg={4} md={4} sm={4} xs={4}>
                <div className="d-flex">
                  <span className="your-review-label" >Your review</span>
                  <span>
                    <Rating value={ratingUser} onChange={(e) => setRatingUser(e.value)} cancel={false} style={{ paddingLeft: '20px' }} />
                  </span>
                </div>
              </Col>
            </Row>
            <Row style={{ padding: '0px 40px' }}>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="your-comment-label">Your Comment</div>
                <div style={{ marginTop: '10px' }}>
                  <InputTextarea autoResize value={commentValue} onChange={(e) => setCommentValue(e.target.value)} style={{ width: '100%', borderRadius: '40px' }} />
                </div>
              </Col>
            </Row>
            <Row style={{ padding: '0px 40px' }}>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="your-name-lable">Your name</div>
                <div>
                  <InputText value={nameComment} onChange={(e) => setNameComment(e.target.value)} style={{ width: '100%', borderRadius: '40px' }} />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="your-name-lable">Your Email</div>
                <div>
                  <InputText value={nameComment} onChange={(e) => setNameComment(e.target.value)} style={{ width: '100%', borderRadius: '40px' }} />
                </div>
              </Col>
            </Row>
            <Row style={{ padding: '0px 40px', marginTop: '10px' }}>
              <Col>
                <div className="d-flex align-items-center">
                  <Checkbox onChange={e => setChecked(e.checked)} checked={checked} />
                  <label htmlFor="ingredient4" className="ml-2" style={{ fontSize: '20px', marginLeft: '10px' }}>Save my information for the next comment</label>
                </div>
              </Col>
            </Row>
            <Row style={{ padding: '0px 40px', marginTop: '10px' }}>
              <Col lg={3} md={3} sm={3} xs={3}>
                <Button variant="primary">Send</Button>
              </Col>
            </Row>

          </div>
        </Row>
      </Container>
    </Container>
  );
}
