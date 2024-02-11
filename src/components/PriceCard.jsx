import React from 'react';
import './style/priceCard.css'

const PriceCard = ({ dataObj }) => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-12">
                {dataObj.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div class="col" >
                                    <div class="card h-200" id="card-w">
                                        {/* <img src="..." class="card-img-top" alt="..."> */}
                                        <div class="card-body">
                                            <h6 class="card-title text-muted text-uppercase text-center" id ="text-title">{item.title}</h6>
                                            <h1 class="card-price text-center">{item.price}<span class="period">/month</span></h1>
                                            <hr></hr>
                                            <ul class = "fa-ul">
                                                <li><span class ="fa-li"><i class="fa-solid fa-check"></i></span>{item.user}</li>
                                                <li><span class ="fa-li"><i class="fa-solid fa-check"></i></span>{item.storage}</li>
                                                <li><span class ="fa-li"><i class="fa-solid fa-check"></i></span>Unlimited Public Projects</li>
                                                <li><span class ="fa-li"><i class="fa-solid fa-check"></i></span>Community Access</li>
                                                <li class ={item.project}><span class ="fa-li"><i class={item.projectIcon}></i></span>Unlimited Private Projects</li>
                                                <li class ={item.phone}><span class ="fa-li"><i class={item.phoneIcon}></i></span>Dedicated Phone Support</li>
                                                <li class ={item.subdomain}><span class ="fa-li"><i class={item.projectIcon}></i></span>{item.domain}</li>
                                                <li class ={item.monthly}><span class ="fa-li"><i class={item.monthlyicon}></i></span>Monthly Status Reports</li>
                                              
                                            </ul>
                                        </div>
                                        <div class ="d-flex" id="btn-div">
                                        <button class="btn btn-primary" id="btn">BUTTON</button>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    );
};

export default PriceCard;