import React from 'react';
import Navbar from '../CNavbar';
import ImageGallery from 'react-image-gallery';
import './Portfolio.css';
import Footer from '../Footer';


class Feathers extends React.Component {
constructor() {
    super();

    this.state = {
        showBullets: true,
      };

    this.images = [
        {
            description: 'Blue Single Feather',
            original: 'https://lh3.googleusercontent.com/ZBcJqwVgXV47KpGy2pqH_CjDJIBRZTwgXMUI0DsofrkF8XbH5UYbGw4nB3A47DnnskYOacQaLY5oUeuCsiG7H5rbyOHN2u3tKeb4fTmPT39SWSUpSJi09M3R8lI8fL7Alq3bsgREL7cfL3xIiLU--coCgb_B6X2Wf0_MToaXp6dKMRqJ47MEUxINIuTew60uMdSiY4Z2e28pBonQQG4yyl1gRatZLnUeIGbWNcqOjMBLKXoHnHMq1c7kvkeTACum-f79KS0JcVAaAdpj6kuC68chGvAsjXBg8dIeE58wcN59rHV2IVRCvdSFzAZqIfX9ok3zw0yugeDHT3BwVIp33uggpgpC-m5uyzTjATTgj25eyY9Lh6xd4FSf5_RIZS9Jxb38MoynSp1PDCD-FOr8Ywy68iHxtwEbX6ecV9U7Hvgr9rI5vtPN8I8NEIv92hx3Fhftt6As8utS7_EYFkzBVkog7NyWkwT0GaV-ey1oNozmXrJGG8m4-Iam78_Pt9SE2Gqgh8pSdMluKclHgbJU_vkEM0IFzixBTr8YngwupcDkYj1g_1buwfe2ov-uNpQf19Y8yIIt1ow8KLCma2nkAVDouM24-CrNitElr8vcOXdAGtQzscbbXZZ-nQbRXInKPEmm62hy2498XIHEe9ut0xYtNZiLa2L8EnMhVQHF8gJAh4ugydIwl6sFRFTJxSQy4tDBMDmWh4j4OpL2mS5UBP4=w1381-h942-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/ZBcJqwVgXV47KpGy2pqH_CjDJIBRZTwgXMUI0DsofrkF8XbH5UYbGw4nB3A47DnnskYOacQaLY5oUeuCsiG7H5rbyOHN2u3tKeb4fTmPT39SWSUpSJi09M3R8lI8fL7Alq3bsgREL7cfL3xIiLU--coCgb_B6X2Wf0_MToaXp6dKMRqJ47MEUxINIuTew60uMdSiY4Z2e28pBonQQG4yyl1gRatZLnUeIGbWNcqOjMBLKXoHnHMq1c7kvkeTACum-f79KS0JcVAaAdpj6kuC68chGvAsjXBg8dIeE58wcN59rHV2IVRCvdSFzAZqIfX9ok3zw0yugeDHT3BwVIp33uggpgpC-m5uyzTjATTgj25eyY9Lh6xd4FSf5_RIZS9Jxb38MoynSp1PDCD-FOr8Ywy68iHxtwEbX6ecV9U7Hvgr9rI5vtPN8I8NEIv92hx3Fhftt6As8utS7_EYFkzBVkog7NyWkwT0GaV-ey1oNozmXrJGG8m4-Iam78_Pt9SE2Gqgh8pSdMluKclHgbJU_vkEM0IFzixBTr8YngwupcDkYj1g_1buwfe2ov-uNpQf19Y8yIIt1ow8KLCma2nkAVDouM24-CrNitElr8vcOXdAGtQzscbbXZZ-nQbRXInKPEmm62hy2498XIHEe9ut0xYtNZiLa2L8EnMhVQHF8gJAh4ugydIwl6sFRFTJxSQy4tDBMDmWh4j4OpL2mS5UBP4=w1381-h942-no?authuser=0',
        },
        {
            description: 'Blue Triple Feathers',
            original: 'https://lh3.googleusercontent.com/V36WYYsTMkYwG1cSgGyIzyqmrTDOYkgfXk8Xsj7-wi2Svy175h9fe-ZfRZHgo0dJ8QhuDil4PD7a8dwFjvdOe9475x_axf3fGhon4QAEjUsw7wHVivgouoTqMPOEshz6YYDuOv3hIzXxPL3iCv1vmdRvfdNEJ4NuFSE7Niq390t2zvEbodfbpBakWek072iDCtZ3aLzlTBmJyptpUxZTLHh4JP78pC5973TnVnMZ7luP9t8luTvPaqo6Jg48RM9oDJ1B4VZtuhCm7eybmI1tznAm9reBjnqqhCU1dbFyIYFLU3-20g9btsVts2jW-S-Mn65KR0mw9oambToF0_rrVK3I6Pf_uKxWbOUZ3WZj99EEzaqiLw9vcza6Bfn18q6fgkar-NHsq0qZ64g83e4iym1fLu1mmhdB2EHFodSpttluAWYRHiTrOPSuujjRzMhdu9tI457pKPyVRATqPOPTJEwhnCUHSBxz4PbfeVTadFpU7X1peMP_pEpCVXGofkTgIKuU-vyI9F7TWcIMi4FqVXml8kfRclTTwUGOcneVY6gDdX7924E0C0FNMUtoWmS7j5-MRdKcqFkDFoS6cC5kFRkEz16dd8ylNWHr6Ei07ICYE5eRaaQs4Jwq10LQkZfA4VuOxPRyAcqBmEIAilQSc0Tffwy8h8s3E7PIF7S2WQbJOf8-tVbTJiG2gSU6nkLvhn0kmZUOTzoI7dRsEbU7Sw0=w1214-h942-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/V36WYYsTMkYwG1cSgGyIzyqmrTDOYkgfXk8Xsj7-wi2Svy175h9fe-ZfRZHgo0dJ8QhuDil4PD7a8dwFjvdOe9475x_axf3fGhon4QAEjUsw7wHVivgouoTqMPOEshz6YYDuOv3hIzXxPL3iCv1vmdRvfdNEJ4NuFSE7Niq390t2zvEbodfbpBakWek072iDCtZ3aLzlTBmJyptpUxZTLHh4JP78pC5973TnVnMZ7luP9t8luTvPaqo6Jg48RM9oDJ1B4VZtuhCm7eybmI1tznAm9reBjnqqhCU1dbFyIYFLU3-20g9btsVts2jW-S-Mn65KR0mw9oambToF0_rrVK3I6Pf_uKxWbOUZ3WZj99EEzaqiLw9vcza6Bfn18q6fgkar-NHsq0qZ64g83e4iym1fLu1mmhdB2EHFodSpttluAWYRHiTrOPSuujjRzMhdu9tI457pKPyVRATqPOPTJEwhnCUHSBxz4PbfeVTadFpU7X1peMP_pEpCVXGofkTgIKuU-vyI9F7TWcIMi4FqVXml8kfRclTTwUGOcneVY6gDdX7924E0C0FNMUtoWmS7j5-MRdKcqFkDFoS6cC5kFRkEz16dd8ylNWHr6Ei07ICYE5eRaaQs4Jwq10LQkZfA4VuOxPRyAcqBmEIAilQSc0Tffwy8h8s3E7PIF7S2WQbJOf8-tVbTJiG2gSU6nkLvhn0kmZUOTzoI7dRsEbU7Sw0=w1214-h942-no?authuser=0',
        },
    ];
    
}


render() {
    return (
          <div className='body'>
              <div className='content-a'>
              <Navbar />
              <div className='text-body-portfolio-sub'>
                  <h1>Feathers</h1>
                  <p>
                        My painted feathers are like a subclass of my Paintings page, as they are just paintings but on feathers!
                        Sometimes I treat the feathers so they stay together as I paint them, it also just makes it easy to paint them.
                        Then, I use acrylic paint to paint them. I go for very simple designs with these as most of the feathers I
                        paint on are fairly small. I'm inspired by nature and geometric design. 
                  </p>
              </div>
              <ImageGallery items={this.images} showBullets={this.state.showBullets}/>
              </div>
              <Footer />
          </div>
    );
};
}

export default Feathers;