import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="span3"><div className="widget box-1 widget_text"><h4>About</h4>
            <div className="textwidget"><div className="box-1">
              <p>The Government Polytechnic, Nagpur, was founded on 14th July, 1914.</p>
              <a className="btn-readmore" href="#" onclick="return js_get_content_data(2)">Read More</a>
            </div></div>
          </div>

          </div><div className="span3"><div className="widget box-1 widget-holder"><h4>Latest News &amp; Events</h4>					<div className="sidebar-recent-post">
            <ul>
              <li>
                <div className="text">
                  <strong className="title">
                    News and Events</strong>
                  <a href="#" onclick="return js_get_content_data(135)" className="readmore">Read More</a></div>
              </li>
            </ul>
          </div>
          </div>
          </div>
          <div className="span3">
            <div className="widget box-1 widget-holder">
              <h4>Menu</h4>
              <div className="sidebar-recent-post">
                <ul>
                  <li><div className="text"> <strong className="title"><a href="#" onclick="return js_get_content_data(2)"> About Institute</a></strong></div>
                  </li>
                  <li><div className="text"> <strong className="title"><a href="#" onclick="return js_get_content_data(5)"> Governing Body</a></strong></div>
                  </li>
                  <li><div className="text"> <strong className="title"><a href="#" onclick="return js_get_content_data(16)"> C.D.C.</a></strong></div>
                  </li>
                  <li><div className="text"> <strong className="title"><a href="#" onclick="return js_get_content_data(28)"> Contact Us</a></strong></div>
                  </li>

                </ul>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>

    <div className="clear" />
    <div className="footer-social">
      <div className="container p-3">
        <div className="footer-top-sec">
          <strong className="footer-logo">
            <a className title="Government Polytechnic, Nagpur" href="http://www.gpnagpur.ac.in/">
              <img src="images/logo.png" alt="footer logo" width={300} height={200} />	</a>				</strong>
          <div className="footer-social-box style08">
            Total Visiters :- 393636
          </div>
          <div className="footer-social-box style08">
            Website Updated On - Date : 23 Mar 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright"><p>Copyright © 2017-18 Government Polytechnic, Nagpur.&nbsp;&nbsp;&nbsp;  | Site Design &amp; Developed By : <a href="http://www.krishinfotech.net/" target="_blank">Krish Infotech</a></p>
    </div>
  </footer>
  )
}

export default Footer