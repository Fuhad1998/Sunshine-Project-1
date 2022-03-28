import React from 'react';

const Footer = () => {
    return (
        <div className='bg-primary row p-3' >
          <div className='col-xs-12 col-sm-12 col-md-4'>
              <h1 className='text-light'>Contact With Us</h1>
              <h2>Email: <h5>fuhadrare444@gmail.com</h5> </h2>
              <h2>Phone: <h5>01715497198</h5> </h2>
              <h2>Telephone: <h5>+000034532</h5> </h2>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4'>
              <h1 className='text-light'>Our Office</h1>
              <h2>Gulshan 1</h2>
              <h2>House Num-234 Third floor</h2>
              <h2>Dhaka</h2>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4'>
              <h1 className='text-light'>Join Our Social Media</h1>
              <h2><a className="" href="https://web.facebook.com/" target="_blank"><i className="fab fa-facebook text-light m-2 "> </i></a> Facebook</h2>
              <h2><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube text-danger m-2"> </i></a> Youtube</h2>
              <h2 className=''><i class="fa-brands fa-instagram-square"></i> Instagram</h2>
          </div>

          <p className='text-white'><i className="  fas fa-copyright mb-2 "></i> Copy right 2022 By Fuwad
        Hossian
      </p>
        </div>
    );
};

export default Footer;