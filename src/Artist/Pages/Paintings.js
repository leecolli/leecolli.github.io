import React from 'react';
import Navbar from '../CNavbar';
import ImageGallery from 'react-image-gallery';
import './Portfolio.css';
import Footer from '../Footer';


class Paintings extends React.Component {
constructor() {
    super();

    this.state = {
        showBullets: true,
      };

    this.images = [
        {
            description: 'Abstract Pour',
            original: 'https://lh3.googleusercontent.com/PF-f-n0oZfaJvXk-fS4Hs3Z7sw0YnX9qo1eieLADYCzdvsK0OOikf1JxIstMsTl1nMawBqFF77uLIA0SpOeLrVR3znnb96_AdaA7aWp0XOV4KKqyPf6vD6l_he-lNJVWS0iwxalGCcJXpnK4WRqXHDbV71TGLAc3be7wJW2z6Uu1YpCr3YpEdrRxmlYKpQE7ggga5l1DQZyv9xSbCjSUg31akrvV6AijoFM6Cu1vvdAgFH-Qv1IxLUGx0mHRLTNsXUs1dVVV8dKa5aj1J51rJmbnmlFu6FvQi2RpFQ0YTT0oeSdWO4dhMfCQYRdTOiSNo6XaOqsUU9NQrwmS0CFondFJuobBW2FJOP2W4E90juXgA2kJL0x2N8XuJrec-jEn4rs7lXh36ZDABEmdyZdh1XV1dFirDk11sZ5q9qCtefgdd3k92-b7Bcr78fsdtZ20kYegiH6cUhmN6D34CsY7BvBzK7_I6mB2nZ2txgzHOgfAJNAeN9966gwPFoIQXmZ9NXtY3_dNe7hl6DjAa0JuJfB-QwDXA4HNRf01yFl9wJrKZoQGF4_dlVmOd4Cqx2VZCpHVTBgQTJ8BL2Ox5b7lkKzHNsZxjxacVBHwrTgsI-7FXB-X30mkfS2tGAI_DUA_tR3ah4ytcPU3uRcBBHL-EHyX3R95RMjcXZbv8VzTCkqpkUaaZJg_r8Wq3LcbUurKuK5NABK1Kj62aVdAHGIX0iOf=w750-h942-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/PF-f-n0oZfaJvXk-fS4Hs3Z7sw0YnX9qo1eieLADYCzdvsK0OOikf1JxIstMsTl1nMawBqFF77uLIA0SpOeLrVR3znnb96_AdaA7aWp0XOV4KKqyPf6vD6l_he-lNJVWS0iwxalGCcJXpnK4WRqXHDbV71TGLAc3be7wJW2z6Uu1YpCr3YpEdrRxmlYKpQE7ggga5l1DQZyv9xSbCjSUg31akrvV6AijoFM6Cu1vvdAgFH-Qv1IxLUGx0mHRLTNsXUs1dVVV8dKa5aj1J51rJmbnmlFu6FvQi2RpFQ0YTT0oeSdWO4dhMfCQYRdTOiSNo6XaOqsUU9NQrwmS0CFondFJuobBW2FJOP2W4E90juXgA2kJL0x2N8XuJrec-jEn4rs7lXh36ZDABEmdyZdh1XV1dFirDk11sZ5q9qCtefgdd3k92-b7Bcr78fsdtZ20kYegiH6cUhmN6D34CsY7BvBzK7_I6mB2nZ2txgzHOgfAJNAeN9966gwPFoIQXmZ9NXtY3_dNe7hl6DjAa0JuJfB-QwDXA4HNRf01yFl9wJrKZoQGF4_dlVmOd4Cqx2VZCpHVTBgQTJ8BL2Ox5b7lkKzHNsZxjxacVBHwrTgsI-7FXB-X30mkfS2tGAI_DUA_tR3ah4ytcPU3uRcBBHL-EHyX3R95RMjcXZbv8VzTCkqpkUaaZJg_r8Wq3LcbUurKuK5NABK1Kj62aVdAHGIX0iOf=w750-h942-no?authuser=0',
        },
    ];
    
}


render() {
    return (
          <div className='body'>
              <div className='content-a'>
              <Navbar />
              <div className='text-body-portfolio-sub'>
                  <h1>Paintings</h1>
                  <p>
                      My paintings are primarily in acrylics, because its my favorite painting medium. I also do watercolors sometimes, but its definitly rare.
                      With painting I like to stick to simple or abstract styles, because I like the mess of paint and love to play with it. Below are various
                      individual pieces that I enjoy.
                  </p>
              </div>
              <ImageGallery items={this.images} showBullets={this.state.showBullets}/>
              </div>
              <Footer />
          </div>
    );
};
}

export default Paintings;