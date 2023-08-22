import React from 'react';
import Left from './MainBody/Left';
import Mid from './MainBody/Mid';
import Right from './MainBody/Right';

const Middle = () => {
    const handleContentClick = (contentId) => {
        // Handle content click logic here
    };

    return (
        <div id="ja-container2" className="clearfix">
            <div id="ja-mainbody" className="clearfix">
                <div id="ja-contentwrap">
                    <div id="ja-content">
                        <div id="cmscontent">
                            <div className="blog_listing row-fluid">
                                <div className="blog-box-1">
                                    <div className="block">
                                        <div id="kcmscontent">
                                            <style
                                                type="text/css"
                                                dangerouslySetInnerHTML={{
                                                    __html: `
                            .style2 {
                              color: #FFFFFF;
                              font-weight: bold;
                            }
                            .style4 {
                              font-size: 14px;
                            }
                            .style7 {
                              color: #FFCC00;
                              font-weight: bold;
                              font-size: 24px;
                            }
                          `,
                                                }}
                                            />

                                            <div className="container">
                                                <div className="main-content">
                                                    <div className="page_content row-fluid">
                                                       <Left/>
                                                        <br />
                                                        <div id="block_content_first" className="span6">
                                                            <div>
                                                               <Mid/>
                                                            </div>
                                                        </div>
                                                        <Right/>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ... Other content */}

            </div>

        </div>
    );
};

export default Middle;
