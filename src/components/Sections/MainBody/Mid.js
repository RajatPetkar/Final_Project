import React from 'react'

const Mid = () => {
  return (
    <article className="span12 mbtm first">

    <div className="blog-content" id="content">
        <div className="blog_listing row-fluid">
            <div className="frame">
                {/* ... Other content */}
                <marquee direction="left" scrollamount={4}>
                    <span className="style5">
                        <a
                            href="#"
                            onClick={() => handleContentClick(256)}
                        >
                            * CSR Initiative
                        </a>
                    </span>
                </marquee>
            </div>
            <div className="frame">
                <div className="caption">
                    <div className="widget sidebar_section2 sidebar-recent-post2 widget_categories">
                        <span className="style4">
                            <a href="https://www.youtube.com/watch?v=1_tDxCWKrBE" target="_blank">
                                <img src="add23.gif" width={574} height={400} border={0} />
                            </a>
                        </span>
                    </div>
                </div>
                {/* ... Other content */}
            </div>
            <div className="post-box post-67 post type-post status-publish format-standard has-post-thumbnail hentry category-listing-projects tag-blog tag-donation tag-events tag-news tag-recent-news">
                <div className="text">
                    <h2><a href="#">Welcome to Government Polytechnic, Nagpur</a></h2>
                    <p align="justify" className="cp-paragraph" style={{ textAlign: 'justify' }}>
                        The Government Polytechnic, Nagpur, was founded on 14th July, 1914. At its commencement the school had 16 students on roll. The institution has given birth to Engineering College presently known as V.N.I.T. Nagpur, as well as Govt. Medical College (GMC), Nagpur.</p>
                    <p>
                        <a href="#" onClick={() => "js_get_content_data(2)"} className="readmore">
                            Read More<br /><br />
                        </a>
                    </p>
                    <table width="100%" border={1} cellPadding={0} cellSpacing={0} bordercolor="#CCCCCC">
                        <tbody>
                            <tr>
                                <td width="39%" valign="top" bgcolor="#666666">
                                    <span className="style2">Vision of Institute</span>
                                </td>
                                <td width="61%" valign="top" bgcolor="#666666">
                                    <span className="style2">Mission of Institute</span>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    To become a Center of Excellence, providing quality technical education and training.
                                </td>
                                <td valign="top">
                                    <p align="justify">The mission of Government Polytechnic, Nagpur is- <br />
                                        1. To frame institutional policies for effective implementation of the teaching-learning process <br />
                                        2. To inculcate values and ethics for life-long learning through curricular, co-curricular, and extra-curricular activities <br />
                                        3. To develop facilities and services for academic excellence <br />
                                        4. To enhance the skills of faculties and staff through industry institute collaboration.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="container inner-container-cp">
                        <div className="row-fluid5" style={{ paddingTop: '10px', paddingBottom: '10px', float: 'left' }}>
                            <article className="span6 mbtm fadeIn cp_load mbtm column first">
                                <h2 className="h-style">Program Outcomes (POs):-</h2>
                                <p className="MsoNormal">
                                    <span lang="EN-IN" style={{ fontSize: '12.0pt', lineHeight: '115%', fontFamily: 'times new roman, serif' }}>
                                        1. Basic and Discipline specific knowledge: Apply knowledge of basic mathematics,
                                        science and engineering fundamentals and engineering specialization to solve
                                        the engineering problems.
                                    </span>
                                </p>
                                <p className="MsoNormal">
                                    <span lang="EN-IN" style={{ fontSize: '12.0pt', lineHeight: '115%', fontFamily: 'times new roman, serif' }}>
                                        2. Problem analysis: Identify and analyze
                                        well-defined engineering problems using codified standard methods.
                                    </span>
                                </p>
                                <p className="MsoNormal">
                                    <span lang="EN-IN" style={{ fontSize: '12.0pt', lineHeight: '115%', fontFamily: 'times new roman, serif' }}>
                                        3. Design/development of solutions: Design solutions for well-defined technical
                                        problems and assist with the design of systems components or processes to meet
                                        specified needs.                                                              </span>
                                </p>
                                <p className="MsoNormal">
                                    <span lang="EN-IN" style={{ fontSize: '12.0pt', lineHeight: '115%', fontFamily: 'times new roman, serif' }}>
                                        4. Engineering Tools, Experimentation and
                                        Testing: Apply modern engineering tools and appropriate technique to conduct
                                        standard tests and measurements.
                                    </span>
                                </p>
                                <p className="MsoNormal">
                                    <span lang="EN-IN" style={{ fontSize: '12.0pt', lineHeight: '115%', fontFamily: 'times new roman, serif' }}>
                                        5. Engineering practices for society,
                                        sustainability and environment: Apply appropriate technology in the context of
                                        society, sustainability, environment and ethical practices.
                                    </span>
                                </p>
                                <p className="MsoNormal">
                                    <span lang="EN-IN" style={{ fontSize: '12.0pt', lineHeight: '115%', fontFamily: 'times new roman, serif' }}>
                                        6. Project Management: Use engineering management principles individually, as a
                                        team member or a leader to manage projects and effectively communicate about well-defined
                                        engineering activities.
                                    </span>
                                </p>
                                <p className="MsoNormal">
                                    <span lang="EN-IN" style={{ fontSize: '12.0pt', lineHeight: '115%', fontFamily: 'times new roman, serif' }}>
                                        7. Life-long learning: Ability to analyze individual needs and engage in updating in the context of technological changes.
                                    </span>
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</article>
  )
}

export default Mid