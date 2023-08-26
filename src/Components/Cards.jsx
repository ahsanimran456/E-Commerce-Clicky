import { FiHeart } from "react-icons/fi";
import { imgdata } from "./Categories";
import { Topbrands } from "./Products";
import { SliderData } from "./Products";
import React from 'react';
import { Skeleton } from 'antd';



function Cards({ items }) {
    console.log(items);
    return (
        <div className="container">
            <div className=" row cards-view">
                {items ? items.map((item, index) => {
                    const isOverlayVisible = (index % 2) === 0; // Toggle overlay class
                    return (
                        <div className="col-md-3 col-sm-3 p-2 cardeach" key={index}>
                            <div style={{ border: "1px solid #e2e2e2 " }}>
                                <img src={item?.imgurl} alt="Avatar" className="image" />
                                <div className="card-heart">
                                    <FiHeart />
                                </div>

                                {/* <div className={isOverlayVisible ? "overlay" : "overlay2"}>
                                <div className="text">Hello World</div>
                            </div> */}
                                <div className="card-description">
                                    <div>
                                        <h5 >
                                            {item.description}
                                        </h5>
                                    </div>
                                    <div>
                                        <p className="m-0">
                                            west line-women chiffon button down crop shirt
                                        </p>
                                    </div>
                                    <div>
                                        <del class="viewiteme-dleteprice">{item.actualPrice}</del>
                                        <span class="viewnitem-disprice">{item.discountPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) :
                    <div className="row">
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4">
                            <Skeleton active />
                        </div>
                    </div>
                    // SliderData.map((item, index) => {
                    //     const isOverlayVisible = (index % 2) === 0; // Toggle overlay class
                    //     return (
                    //         <div className="col-md-3 col-sm-3 p-2 cardeach" key={index}>
                    //             <div style={{ border: "1px solid #e2e2e2 " }}>
                    //                 <img src={item.imgurl} alt="Avatar" className="image" />
                    //                 <div className="card-heart">
                    //                     <FiHeart />
                    //                 </div>

                    //                 {/* <div className={isOverlayVisible ? "overlay" : "overlay2"}>
                    //             <div className="text">Hello World</div>
                    //         </div> */}
                    //                 <div className="card-description">
                    //                     <div>
                    //                         <h5 >
                    //                             {item.description}
                    //                         </h5>
                    //                     </div>
                    //                     <div>
                    //                         <p className="m-0">
                    //                             west line-women chiffon button down crop shirt
                    //                         </p>
                    //                     </div>
                    //                     <div>
                    //                         <del class="viewiteme-dleteprice">RS 5000</del>
                    //                         <span class="viewnitem-disprice">RS 4300</span>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     )
                    // })
                }
            </div>
        </div>
    );
}

export default Cards;