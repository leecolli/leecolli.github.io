import React from 'react';
import Navbar from '../CNavbar';
import ImageGallery from 'react-image-gallery';
import './Portfolio.css';
import Footer from '../Footer';


class Drawings extends React.Component {
constructor() {
    super();

    this.state = {
        showBullets: true,
      };

    this.images = [
        {
            description: 'Sam',
            original: 'https://lh3.googleusercontent.com/b38sRW9xltltp1KnivsX2-Rupj4b-wofVIzqx6WVmjLTZbVC936P26iZZ-ZFfkTbtmplJTnCwYWrnurEF7ZX9uCWYFp-YjbnngJ3JUdMznlVhQAYnzZxpejO8cq1Rpn3rWVSPAmdL9T1Z3D27nWU7mmf7zzuHV1EVdfDy9XllBBbcO_DyuJeSCmQV54I2LHKoEj0n6L0VwsnXHAKhHH13976O-4uL9SU8wsbWinzobqA989-uQax-WbCi64EfDaFxl81QuFlnD9U0k3YelgXIIZ70wyDu_fjXBXFEyLETUojezgq0wCr9aOXGmL-70hzOi26ma0wHyZFozseMRSQRjIdzIx2qZ7G4YO0IxuA9mqUTrqTHvg7FQHp8uE29I6rOVi7qYb1-BHhzVfWCvSi-nEizDjhaKVJURwqzdOBEncG9fiseZdgHFVz8Qul5DCwOoJH_uXB7q0g6eT2T_vwWGmY-wyvTJ_x95lvUUwNHzY1yOX7ripMPaVI64k7OpZCX4GRvG7Kq-JZIcLPM8FDYU32FhirwQRtD58SJ-txvjgBsh24NOolTLXUFpqVyfCxnDAtbRz7w5UIpGvAPl0jk-wtFMTKqmoND9GvGpB6KPy96rJcLFsIzFJX8rDj_XuR1wY4kXIAlYzAmxzUPnDrSun3PatbheSVIchLvbSMqQT0blGmcaGxPO338Ar3JV0ZvyJvfv4wP04OOyOQXMCs_jg=w1218-h942-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/b38sRW9xltltp1KnivsX2-Rupj4b-wofVIzqx6WVmjLTZbVC936P26iZZ-ZFfkTbtmplJTnCwYWrnurEF7ZX9uCWYFp-YjbnngJ3JUdMznlVhQAYnzZxpejO8cq1Rpn3rWVSPAmdL9T1Z3D27nWU7mmf7zzuHV1EVdfDy9XllBBbcO_DyuJeSCmQV54I2LHKoEj0n6L0VwsnXHAKhHH13976O-4uL9SU8wsbWinzobqA989-uQax-WbCi64EfDaFxl81QuFlnD9U0k3YelgXIIZ70wyDu_fjXBXFEyLETUojezgq0wCr9aOXGmL-70hzOi26ma0wHyZFozseMRSQRjIdzIx2qZ7G4YO0IxuA9mqUTrqTHvg7FQHp8uE29I6rOVi7qYb1-BHhzVfWCvSi-nEizDjhaKVJURwqzdOBEncG9fiseZdgHFVz8Qul5DCwOoJH_uXB7q0g6eT2T_vwWGmY-wyvTJ_x95lvUUwNHzY1yOX7ripMPaVI64k7OpZCX4GRvG7Kq-JZIcLPM8FDYU32FhirwQRtD58SJ-txvjgBsh24NOolTLXUFpqVyfCxnDAtbRz7w5UIpGvAPl0jk-wtFMTKqmoND9GvGpB6KPy96rJcLFsIzFJX8rDj_XuR1wY4kXIAlYzAmxzUPnDrSun3PatbheSVIchLvbSMqQT0blGmcaGxPO338Ar3JV0ZvyJvfv4wP04OOyOQXMCs_jg=w1218-h942-no?authuser=0',
        },
        {
            description: 'Geometric Lynx',
            original: 'https://lh3.googleusercontent.com/zCM4zPwdL81_wulDp_NpwPVdMh1kmC0jiYolYztgwn8-HjxOVz8ZfsO0_Utg5MK085JO5fHCh4IJTanazhHcqgiMXJpH-g07MoqLaWVWJNmX2iggqhbBGJ-BEbnfNK1yiVCDvsVf6RjSLT7Zd3dP_D1Qxeg_P48AI2_Zt-g5Dz_9xBhFC9lY5RaIMZ2VruZ6LjyXlofsV5ekl-T8FNIFbIagKUJJuJRKG-iqvQjgve8EWf9rvAAC_vMbwnBVHFRHgwE5FbIJPX1vuCWGfgwOoAiFkkxG-reJ_aS1Pv3YvCalkNo22eGW1rF8LAp3g-QFRUP0gLny3Tmmiw-6p6r0GNLDoXofrSNWZZLXNH-5uFNZrqd3zZyoLTzQcT-G_l4Y5AEXRxiC01O1evsvLj0bAcyQcU3O_DZ3gfI2FNLYc139ad-LUaUw6BHK9BoAzymvMScSwUkmBcaG_J8Y5sSc1E4jgqZfDFRYECpuUrUTjB49GBZJhcTQyHgSev0MGbrfsPWitGL2Kf2d6j4dp4rU_KAFxHpWcK9qHTNGCPj76VnP7ERj3GCK-IbfIr1j6zCt-5C6mt1GbEw-BxZznXvAen-2AtRRsrFUdSu1pDjVQfvtF7lQZwdlYNYutr0zYYolLq7yBkErhWIgo0V_ejvUgd_GzRgqkEMm5heiVM5P7lYPo8oJob_TElmSmP917uEcfdd91F4qaFoJaovR4R9hBX0=w610-h942-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/zCM4zPwdL81_wulDp_NpwPVdMh1kmC0jiYolYztgwn8-HjxOVz8ZfsO0_Utg5MK085JO5fHCh4IJTanazhHcqgiMXJpH-g07MoqLaWVWJNmX2iggqhbBGJ-BEbnfNK1yiVCDvsVf6RjSLT7Zd3dP_D1Qxeg_P48AI2_Zt-g5Dz_9xBhFC9lY5RaIMZ2VruZ6LjyXlofsV5ekl-T8FNIFbIagKUJJuJRKG-iqvQjgve8EWf9rvAAC_vMbwnBVHFRHgwE5FbIJPX1vuCWGfgwOoAiFkkxG-reJ_aS1Pv3YvCalkNo22eGW1rF8LAp3g-QFRUP0gLny3Tmmiw-6p6r0GNLDoXofrSNWZZLXNH-5uFNZrqd3zZyoLTzQcT-G_l4Y5AEXRxiC01O1evsvLj0bAcyQcU3O_DZ3gfI2FNLYc139ad-LUaUw6BHK9BoAzymvMScSwUkmBcaG_J8Y5sSc1E4jgqZfDFRYECpuUrUTjB49GBZJhcTQyHgSev0MGbrfsPWitGL2Kf2d6j4dp4rU_KAFxHpWcK9qHTNGCPj76VnP7ERj3GCK-IbfIr1j6zCt-5C6mt1GbEw-BxZznXvAen-2AtRRsrFUdSu1pDjVQfvtF7lQZwdlYNYutr0zYYolLq7yBkErhWIgo0V_ejvUgd_GzRgqkEMm5heiVM5P7lYPo8oJob_TElmSmP917uEcfdd91F4qaFoJaovR4R9hBX0=w610-h942-no?authuser=0',
        },
    ];
    
}


render() {
    return (
          <div className='body'>
              <div className='content-a'>
              <Navbar />
              <div className='text-body-portfolio-sub'>
                  <h1>Drawings</h1>
                  <p>
                      My drawings are various and individual. I don't particularily have a series per se for them. However, I do have some styles that
                      I liked at different times, so theres that variation over time. Overall, topics I like are animals, people, sunsets, sunrises,
                      plants, shapes, and bright or dark colors. Materials I like to use are graphite pencils, colored pencils, pens, and markers. All
                      of these on various textured papers. Some times I do work on black or brown paper, which provides a very nice contrast with colors.
                      Below are pieces that I love and am proud of for various reasons.
                  </p>
              </div>
              <ImageGallery items={this.images} showBullets={this.state.showBullets}/>
              </div>
              <Footer />
          </div>
    );
};
}

export default Drawings;