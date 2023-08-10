import React, { useState, useEffect } from 'react';

import './Review.scss'
function Review() {
    
  return (
      <div className="fui-testimonial-1">
        <div className="testimonialWrap">
          <ul className="testimonialBodyList" style={{listStyle:'none'}}>
            <li className="testimonialBodyItem active" data-tab="0">
              <div className="testimonialRate">
                <span>3.0</span>
                <div className="testimonialRateIconList">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7327 17.5574L11.5 17.4351L11.2673 17.5574L5.11064 20.7942L6.28647 13.9386L6.3309 13.6795L6.14267 13.4961L1.1618 8.64092L8.04519 7.6407L8.30532 7.6029L8.42166 7.36718L11.5 1.12978L14.5783 7.36718L14.6947 7.6029L14.9548 7.6407L21.8382 8.64092L16.8573 13.4961L16.6691 13.6795L16.7135 13.9386L17.8894 20.7942L11.7327 17.5574Z"
                      stroke="#1E1B16"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7327 17.5574L11.5 17.4351L11.2673 17.5574L5.11064 20.7942L6.28647 13.9386L6.3309 13.6795L6.14267 13.4961L1.1618 8.64092L8.04519 7.6407L8.30532 7.6029L8.42166 7.36718L11.5 1.12978L14.5783 7.36718L14.6947 7.6029L14.9548 7.6407L21.8382 8.64092L16.8573 13.4961L16.6691 13.6795L16.7135 13.9386L17.8894 20.7942L11.7327 17.5574Z"
                      stroke="#1E1B16"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="testimonialContent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum
                delectus quibusdam nisi enim facere, libero temporibus nihil
                recusandae odit, ipsam quas!
              </p>
              <div className="testimonialBodyPersonal">
                <div className="testimonialBodyPersonalImg">
                  <img
                    src="https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                    alt="Mathieu Johet"
                  />
                </div>
                <h4 className="testimonialBodyPersonalName">Mathieu Johet</h4>
              </div>
            </li>
            <li className="testimonialBodyItem" data-tab="1">
              <div className="testimonialRate">
                <span>4.0</span>
                <div className="testimonialRateIconList">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7327 17.5574L11.5 17.4351L11.2673 17.5574L5.11064 20.7942L6.28647 13.9386L6.3309 13.6795L6.14267 13.4961L1.1618 8.64092L8.04519 7.6407L8.30532 7.6029L8.42166 7.36718L11.5 1.12978L14.5783 7.36718L14.6947 7.6029L14.9548 7.6407L21.8382 8.64092L16.8573 13.4961L16.6691 13.6795L16.7135 13.9386L17.8894 20.7942L11.7327 17.5574Z"
                      stroke="#1E1B16"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="testimonialContent">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt magnam molestiae saepe minima quas unde repellendus,
                tenetur, quisquam aperiam assumenda aspernatur harum beatae,
                error doloribus similique perferendis molestias aut maxime?
              </p>
              <div className="testimonialBodyPersonal">
                <div className="testimonialBodyPersonalImg">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                    alt="James"
                  />
                </div>
                <h4 className="testimonialBodyPersonalName">James</h4>
              </div>
            </li>
            <li className="testimonialBodyItem" data-tab="2">
              <div className="testimonialRate">
                <span>5.0</span>
                <div className="testimonialRateIconList">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="testimonialContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                beatae aliquid quasi? Facere, molestiae? Consequatur ratione
                harum reiciendis, nostrum veniam, tempore adipisci illo qui
                deleniti iure maxime quod repellendus at.
              </p>
              <div className="testimonialBodyPersonal">
                <div className="testimonialBodyPersonalImg">
                  <img
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                    alt="Robert"
                  />
                </div>
                <h4 className="testimonialBodyPersonalName">Robert</h4>
              </div>
            </li>
            <li className="testimonialBodyItem" data-tab="3">
              <div className="testimonialRate">
                <span>4.0</span>
                <div className="testimonialRateIconList">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7327 17.5574L11.5 17.4351L11.2673 17.5574L5.11064 20.7942L6.28647 13.9386L6.3309 13.6795L6.14267 13.4961L1.1618 8.64092L8.04519 7.6407L8.30532 7.6029L8.42166 7.36718L11.5 1.12978L14.5783 7.36718L14.6947 7.6029L14.9548 7.6407L21.8382 8.64092L16.8573 13.4961L16.6691 13.6795L16.7135 13.9386L17.8894 20.7942L11.7327 17.5574Z"
                      stroke="#1E1B16"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="testimonialContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda vel necessitatibus culpa, cum est minus quos voluptas
                tempore eaque architecto error quo unde incidunt qui consectetur
                temporibus ducimus. Qui, debitis?
              </p>
              <div className="testimonialBodyPersonal">
                <div className="testimonialBodyPersonalImg">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                    alt="John"
                  />
                </div>
                <h4 className="testimonialBodyPersonalName">John</h4>
              </div>
            </li>
            <li className="testimonialBodyItem" data-tab="4">
              <div className="testimonialRate">
                <span>5.0</span>
                <div className="testimonialRateIconList">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="testimonialContent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus ducimus ab, consequuntur autem id vero hic, quos
                beatae rem ipsa unde sit, dolores ipsam. Adipisci illo cum
                doloribus inventore id?
              </p>
              <div className="testimonialBodyPersonal">
                <div className="testimonialBodyPersonalImg">
                  <img
                    src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=396&amp;q=80"
                    alt="Michael"
                  />
                </div>
                <h4 className="testimonialBodyPersonalName">Michael</h4>
              </div>
            </li>
            <li className="testimonialBodyItem" data-tab="5">
              <div className="testimonialRate">
                <span>3.0</span>
                <div className="testimonialRateIconList">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7327 17.5574L11.5 17.4351L11.2673 17.5574L5.11064 20.7942L6.28647 13.9386L6.3309 13.6795L6.14267 13.4961L1.1618 8.64092L8.04519 7.6407L8.30532 7.6029L8.42166 7.36718L11.5 1.12978L14.5783 7.36718L14.6947 7.6029L14.9548 7.6407L21.8382 8.64092L16.8573 13.4961L16.6691 13.6795L16.7135 13.9386L17.8894 20.7942L11.7327 17.5574Z"
                      stroke="#1E1B16"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7327 17.5574L11.5 17.4351L11.2673 17.5574L5.11064 20.7942L6.28647 13.9386L6.3309 13.6795L6.14267 13.4961L1.1618 8.64092L8.04519 7.6407L8.30532 7.6029L8.42166 7.36718L11.5 1.12978L14.5783 7.36718L14.6947 7.6029L14.9548 7.6407L21.8382 8.64092L16.8573 13.4961L16.6691 13.6795L16.7135 13.9386L17.8894 20.7942L11.7327 17.5574Z"
                      stroke="#1E1B16"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="testimonialContent">
                Attentive, enthusiastic staff. Beautiful view, the evening
                overlooking the Nha Trang sea is very shimmering. Clean,
                comfortable, warm room. Around the hotel there are many places
                of entertainment, entertainment and dining. It takes about 10
                minutes if you want to walk to the sea. Thank you very much
                hotel!
              </p>
              <div className="testimonialBodyPersonal">
                <div className="testimonialBodyPersonalImg">
                  <img
                    src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                    alt="David"
                  />
                </div>
                <h4 className="testimonialBodyPersonalName">David</h4>
              </div>
            </li>
            <li className="testimonialBodyItem" data-tab="6">
              <div className="testimonialRate">
                <span>5.0</span>
                <div className="testimonialRateIconList">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="testimonialContent">
                Attentive, enthusiastic staff. Beautiful view, the evening
                overlooking the Nha Trang sea is very shimmering. Clean,
                comfortable, warm room. Around the hotel there are many places
                of entertainment, entertainment and dining. It takes about 10
                minutes if you want to walk to the sea. Thank you very much
                hotel!
              </p>
              <div className="testimonialBodyPersonal">
                <div className="testimonialBodyPersonalImg">
                  <img
                    src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                    alt="William"
                  />
                </div>
                <h4 className="testimonialBodyPersonalName">William</h4>
              </div>
            </li>
            <li className="testimonialBodyItem" data-tab="7">
              <div className="testimonialRate">
                <span>5.0</span>
                <div className="testimonialRateIconList">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>

                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5 18L4.44658 21.7082L5.79366 13.8541L0.0873218 8.2918L7.97329 7.1459L11.5 0L15.0267 7.1459L22.9127 8.2918L17.2063 13.8541L18.5534 21.7082L11.5 18Z"
                      fill="#EAC248"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="testimonialContent">
                Attentive, enthusiastic staff. Beautiful view, the evening
                overlooking the Nha Trang sea is very shimmering. Clean,
                comfortable, warm room. Around the hotel there are many places
                of entertainment, entertainment and dining. It takes about 10
                minutes if you want to walk to the sea. Thank you very much
                hotel!
              </p>
              <div className="testimonialBodyPersonal">
                <div className="testimonialBodyPersonalImg">
                  <img
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1171&amp;q=80"
                    alt="Richard"
                  />
                </div>
                <h4 className="testimonialBodyPersonalName">Richard</h4>
              </div>
            </li>
          </ul>
          <ul className="testimoniaPersonalList" style={{listStyle:'none'}}>
            <li className="testimoniaPersonalItem active" data-tab="0">
              <div className="testimoniaPersonalImage">
                <img
                  src="https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                  alt="Mathieu Johet"
                />
              </div>
            </li>
            <li className="testimoniaPersonalItem" data-tab="1">
              <div className="testimoniaPersonalImage">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                  alt="James"
                />
              </div>
            </li>
            <li className="testimoniaPersonalItem" data-tab="2">
              <div className="testimoniaPersonalImage">
                <img
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                  alt="Robert"
                />
              </div>
            </li>
            <li className="testimoniaPersonalItem" data-tab="3">
              <div className="testimoniaPersonalImage">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                  alt="John"
                />
              </div>
            </li>
            <li className="testimoniaPersonalItem" data-tab="4">
              <div className="testimoniaPersonalImage">
                <img
                  src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=396&amp;q=80"
                  alt="Michael"
                />
              </div>
            </li>
            <li className="testimoniaPersonalItem" data-tab="5">
              <div className="testimoniaPersonalImage">
                <img
                  src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                  alt="David"
                />
              </div>
            </li>
            <li className="testimoniaPersonalItem" data-tab="6">
              <div className="testimoniaPersonalImage">
                <img
                  src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                  alt="William"
                />
              </div>
            </li>
            <li className="testimoniaPersonalItem" data-tab="7">
              <div className="testimoniaPersonalImage">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1171&amp;q=80"
                  alt="Richard"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Review;
