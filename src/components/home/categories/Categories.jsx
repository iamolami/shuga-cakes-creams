import React from 'react'
import Trial from './Trial'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="categories__grid">
        <div className="categories__grid-custom">
            <div className="categories__grid-col-9">
                <div className="categories__grid-col-9-inner">
                    <div className="categories__grid-holder">
                        <div className="categories__grid-holder-img">
                            <div className="categories__grid-holder-img-front">
                                <img src="	https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/m-h-single-img-6.png" alt="Breakfast" />
                            </div>
                            <div className="categories__grid-holder-img-back" style={{ left: '17%', top: '25%'}}>
                                <img src="https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/h-3-single-img-7.png" alt="Back" />
                            </div>
                        </div>
                        <div className='categories__grid-holder-text'>
                            <div className="categories__grid-holder-text-outer">
                                <div className="categories__grid-holder-text-inner">
                                    <h3>Breakfast</h3>
                                    <p>Lorem ipsum dolor sit amet, his convenire similique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories__grid-col-9">
                <div className="categories__grid-col-9-inner">
                    <div className="categories__grid-holder">
                        <div className="categories__grid-holder-img">
                            <div className="categories__grid-holder-img-front">
                                <img src="https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/m-h-single-img-10.png" alt="Breakfast" />
                            </div>
                            <div className="categories__grid-holder-img-back" style={{ left: '73%', top: '32%'}}>
                                <img src="	https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/h-3-single-img-5.jpg" alt="Back" />
                            </div>
                        </div>
                        <div className='categories__grid-holder-text'>
                            <div className="categories__grid-holder-text-outer">
                                <div className="categories__grid-holder-text-inner">
                                    <h3>Pastry</h3>
                                    <p>Lorem ipsum dolor sit amet, his convenire similique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories__grid-col-9">
                <div className="categories__grid-col-9-inner">
                    <div className="categories__grid-holder">
                        <div className="categories__grid-holder-img">
                            <div className="categories__grid-holder-img-front">
                                <img src="	https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/m-h-single-img-8-1.png" alt="Breakfast" />
                            </div>
                            <div className="categories__grid-holder-img-back" style={{ left: '55%', top: '29%'}}>
                                <img src="https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/h-3-single-img-8.png" alt="Back" />
                            </div>
                        </div>
                        <div className='categories__grid-holder-text'>
                            <div className="categories__grid-holder-text-outer">
                                <div className="categories__grid-holder-text-inner">
                                    <h3>Sandwiches</h3>
                                    <p>Lorem ipsum dolor sit amet, his convenire similique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories__grid-col-9">
                <div className="categories__grid-col-9-inner">
                    <div className="categories__grid-holder">
                        <div className="categories__grid-holder-img">
                            <div className="categories__grid-holder-img-front">
                                <img src="https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/h-3-single-img-15.png" alt="Breakfast" />
                            </div>
                            <div className="categories__grid-holder-img-back" style={{ left: '55%', top: '29%'}}>
                                <img src="	https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/h-3-single-img-6.jpg" alt="Back" />
                            </div>
                        </div>
                        <div className='categories__grid-holder-text'>
                            <div className="categories__grid-holder-text-outer">
                                <div className="categories__grid-holder-text-inner">
                                    <h3>Coffee</h3>
                                    <p>Lorem ipsum dolor sit amet, his convenire similique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Trial />
    </div>
  )
}

export default Categories
