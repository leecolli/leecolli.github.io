import React from 'react';
import Navbar from '../CNavbar';
import ImageGallery from 'react-image-gallery';
import './Portfolio.css';
import Footer from '../Footer';


class InkProject extends React.Component {
constructor() { 
    super();
    
    this.state = {
      showBullets: true,
    };

    this.images = [
        {
          description:'Gigantic Untitled Ink',
          original: 'https://lh3.googleusercontent.com/as1eVeAXGFGk56CWrzXENSD1FtRd2enR7GJt8cgmo9U0wgLjJF-OPJn0y256PsvAJ5cBpC-xRz1FUfEO1b_bymwpu9apela99A6mrOTI_swngS9l_eH1iCObdCEGu3AFnWadiT3jP7o_UIYIaX6uejQp0w4pJMP-oOrCjoeiS2pRqtt1xeie4JhaMI1f-0ARoWBr3RFA817b3Cwod9TlITtbMcwhfmssIrxF6Gik4G09Mxjb7hSFC-GUiCD0uDJSdqNvgX82CdKbXSbCg6_yTAKEe5-BfBahTzvgp0GKu1h669KxIoEZ_k6HecDh3BHRmq0N9Y2xvUv_LxQTF1aDXKEE2XSjFn5s45YGoH5rmW0mdMVzgPXdvVi-tO5qzRQaIVcB2NtqLacAP3kwzjG0hfjkExJ0bB2HQG36wx10zx9q0ZXqvDCpGzLjCXeay285FshED4ccZq96olmgLrj3l40G0lwaDBWNDJqvWlyaqk9ztzRqD0rjjz05AF8oBF8X0dWIPZnCUV5Iykck1zeHAHKtWiwrLNdznI5KqAuha9S_WsBSVXdr_dlWIMJmFqBIadcZtcJ3KpZdO8aIncVU8SnqAK4oUgXM7YbziVs5FSw0RLX7TpWV907niuahVzSJozMwXaa3xLzraXQKfIe6EX8cD5UvMCQbDeCgLuDqpyLolYBu-DzZ20VfFvUvR2cY8ZCgToLpPw80pROhUXxUXvqA=w756-h943-no?authuser=0',
          thumbnail: 'https://lh3.googleusercontent.com/as1eVeAXGFGk56CWrzXENSD1FtRd2enR7GJt8cgmo9U0wgLjJF-OPJn0y256PsvAJ5cBpC-xRz1FUfEO1b_bymwpu9apela99A6mrOTI_swngS9l_eH1iCObdCEGu3AFnWadiT3jP7o_UIYIaX6uejQp0w4pJMP-oOrCjoeiS2pRqtt1xeie4JhaMI1f-0ARoWBr3RFA817b3Cwod9TlITtbMcwhfmssIrxF6Gik4G09Mxjb7hSFC-GUiCD0uDJSdqNvgX82CdKbXSbCg6_yTAKEe5-BfBahTzvgp0GKu1h669KxIoEZ_k6HecDh3BHRmq0N9Y2xvUv_LxQTF1aDXKEE2XSjFn5s45YGoH5rmW0mdMVzgPXdvVi-tO5qzRQaIVcB2NtqLacAP3kwzjG0hfjkExJ0bB2HQG36wx10zx9q0ZXqvDCpGzLjCXeay285FshED4ccZq96olmgLrj3l40G0lwaDBWNDJqvWlyaqk9ztzRqD0rjjz05AF8oBF8X0dWIPZnCUV5Iykck1zeHAHKtWiwrLNdznI5KqAuha9S_WsBSVXdr_dlWIMJmFqBIadcZtcJ3KpZdO8aIncVU8SnqAK4oUgXM7YbziVs5FSw0RLX7TpWV907niuahVzSJozMwXaa3xLzraXQKfIe6EX8cD5UvMCQbDeCgLuDqpyLolYBu-DzZ20VfFvUvR2cY8ZCgToLpPw80pROhUXxUXvqA=w756-h943-no?authuser=0',
        },
        {
          description: 'Untitled Ink',
          original: 'https://lh3.googleusercontent.com/SVd1lSPvMsY1Nk57qKd4VLSU8HJLESQkln_KPQInuUdoWbUtHF5M9g-DzIclA2ePinbCxK6iIswIsIYDCPP2TgKj-oDj1TssnvIPbHwZLV9IALt5iO-fW0vwwk2uyDLR2aZIhDmTAXvJjHQRAJSCGpSzleL8seZp_9jyr66UXQ_2rS03ZGywFN239rn6_Tt4nSKqX_CPgOFd-X-BcsIwXydmVW6pt-ChJ79WDhTihqfIp88sVpWVyXqPDmoG4DzP9bR32ygLpRFXSwhLpbyD-JgOmN7kLG-VuIiRYTukCpXKjuW_5VhiL3bRygXWZugEsvBXJ8JcVtjDiKtf_WDZqOCkCmm8vUjniQCdt0d47oUOOUW9rduTOPm3B3oWemhgfpOkvvAALXsAwfDy6el-0yE13rsT8LQEynkVT5PQX2dmbo7HF4HqDmy0JEcQFAtGNjWEskWvP3tKzVw3TfY4QRolrXQlhFyW9M9c1wGxwP11KZTrG7IBSgcogTPftjprrLT-DGBRx2Wh1EdJ6SA4Z8nLTLZi4Y1fLmU13o-XStPudkeF8mhY_QXJjyNLsH6IYNvi5KswB0tydRb9ud7KdPmO1dvYdwanKedsErG4gmgiMJ9e7GnTWXDuH_yV2IiCf3_bWMzBP-1FwO3hElz1dA0-EhovcqDdcz2Ck4fMipAtHn_IB7qOWFJ3LlaQ3RsGOFcfGNFt8Cycz4yFtjaicrRC=w673-h943-no?authuser=0',
          thumbnail: 'https://lh3.googleusercontent.com/SVd1lSPvMsY1Nk57qKd4VLSU8HJLESQkln_KPQInuUdoWbUtHF5M9g-DzIclA2ePinbCxK6iIswIsIYDCPP2TgKj-oDj1TssnvIPbHwZLV9IALt5iO-fW0vwwk2uyDLR2aZIhDmTAXvJjHQRAJSCGpSzleL8seZp_9jyr66UXQ_2rS03ZGywFN239rn6_Tt4nSKqX_CPgOFd-X-BcsIwXydmVW6pt-ChJ79WDhTihqfIp88sVpWVyXqPDmoG4DzP9bR32ygLpRFXSwhLpbyD-JgOmN7kLG-VuIiRYTukCpXKjuW_5VhiL3bRygXWZugEsvBXJ8JcVtjDiKtf_WDZqOCkCmm8vUjniQCdt0d47oUOOUW9rduTOPm3B3oWemhgfpOkvvAALXsAwfDy6el-0yE13rsT8LQEynkVT5PQX2dmbo7HF4HqDmy0JEcQFAtGNjWEskWvP3tKzVw3TfY4QRolrXQlhFyW9M9c1wGxwP11KZTrG7IBSgcogTPftjprrLT-DGBRx2Wh1EdJ6SA4Z8nLTLZi4Y1fLmU13o-XStPudkeF8mhY_QXJjyNLsH6IYNvi5KswB0tydRb9ud7KdPmO1dvYdwanKedsErG4gmgiMJ9e7GnTWXDuH_yV2IiCf3_bWMzBP-1FwO3hElz1dA0-EhovcqDdcz2Ck4fMipAtHn_IB7qOWFJ3LlaQ3RsGOFcfGNFt8Cycz4yFtjaicrRC=w673-h943-no?authuser=0',
        },
        {
          description: 'Untitled Ink',
          original: 'https://lh3.googleusercontent.com/JryST2OqUiJkDnImqVIq_wj2350VvnBmKZlP_EBqQW_-zedY-H6Nm6zPKfHVoxCWUJONr94z9jrErgBqn9FHDSZ6ndSbu94aTe2F95hcN4AqUQRyF9j9LhyB3gxQw9sgy-7Q9iKedYzI4cF1oJRwMH8QEjEkLF6fixra4pJv9WvP1eEhbKji5oBlqL1yYYzgjckQi3HJYrO58CukF4kq0xE11WOmsUbc5YmLZTlQyu2gwbGN1gZLZXkgzPg7eLDr0m6NpmKlo0rnj-ht8gcAFnT3jky9A-knF-ktz6EsfI0ciVnYRheUlIHR46ofW-Hx2uQGQjo7A11qUhlJ7xTCb_9S2YPIAqJwXePBAisc7B5T19SbUpKo_pvALzPLZqCePQAwxYJ6yXMFnCOz3a9ixcz9INdOfGPTeqPXa_F8QPknvkPbRtfOdqLS8GTK5YvmcgYit3-s4sQvqv064l9bokxFD8hs1iSfU4uHO-nr2r4SDX7XJvnX8wDNBHGVYfS8mDZqjOS6iqAOfM9P7M11GvOoe4Sdn94lnDaWzESfyu7OwSWaJGSChIkq9-sMgn5dhSdkM-xDHhV7AJjFduAp14hhciXT56drbHlUQqG0HgUjf_kSRVMS847bR2a032dwsBDoUJDTzgTEkZjveZOtMe2oJC_qWCBSZyzGLTNXSvQzT5zoM_nZLnCQ2VRlk1MGi4nWlgfJQiiZV9Ft8Kv_gRz9=w884-h597-no?authuser=0',
          thumbnail: 'https://lh3.googleusercontent.com/JryST2OqUiJkDnImqVIq_wj2350VvnBmKZlP_EBqQW_-zedY-H6Nm6zPKfHVoxCWUJONr94z9jrErgBqn9FHDSZ6ndSbu94aTe2F95hcN4AqUQRyF9j9LhyB3gxQw9sgy-7Q9iKedYzI4cF1oJRwMH8QEjEkLF6fixra4pJv9WvP1eEhbKji5oBlqL1yYYzgjckQi3HJYrO58CukF4kq0xE11WOmsUbc5YmLZTlQyu2gwbGN1gZLZXkgzPg7eLDr0m6NpmKlo0rnj-ht8gcAFnT3jky9A-knF-ktz6EsfI0ciVnYRheUlIHR46ofW-Hx2uQGQjo7A11qUhlJ7xTCb_9S2YPIAqJwXePBAisc7B5T19SbUpKo_pvALzPLZqCePQAwxYJ6yXMFnCOz3a9ixcz9INdOfGPTeqPXa_F8QPknvkPbRtfOdqLS8GTK5YvmcgYit3-s4sQvqv064l9bokxFD8hs1iSfU4uHO-nr2r4SDX7XJvnX8wDNBHGVYfS8mDZqjOS6iqAOfM9P7M11GvOoe4Sdn94lnDaWzESfyu7OwSWaJGSChIkq9-sMgn5dhSdkM-xDHhV7AJjFduAp14hhciXT56drbHlUQqG0HgUjf_kSRVMS847bR2a032dwsBDoUJDTzgTEkZjveZOtMe2oJC_qWCBSZyzGLTNXSvQzT5zoM_nZLnCQ2VRlk1MGi4nWlgfJQiiZV9Ft8Kv_gRz9=w884-h597-no?authuser=0',
        },
        {
          description: 'Untitled Ink',
          original: 'https://lh3.googleusercontent.com/AI5fGGZQhcpciIowwfBtSFpTSruKkzJY7NC8a_DKwWZMYw1bZB7ZFQobX_CAD4OYk-YBEJBQ9ZWzpiCNYopdbzlF9fm-trff9xGV6weSE7dF9iiGfUxKEtI1N2xE0fD4mGP5NBmFc3EtlY8jsQVMMDNUVExmVU1PVaPaqk4JNybZzG06RyLqr2e76eT669MVgkLIP7bwdkUXmGQC_QLzrlGo41IkwWLiQvkhH2Xf_DsBXl23dcki2hdk5kz2hmS_fU7DXE34kVJCK2rgqLA97LdHO46gOB4C3oskjTYipCuSLc-hhvaQdNEzgpMdAWkkCcdKy_nFU-DWtrGtRociC7piG5qi2iERcz-sHHRJzqZtILyHjNOofdVx2MiIxeT5Z_onqQqhijjRE-dH-I5eH0lUGvxK9OyLoHcnip_TlsIxVQwcxBC9j_WhE6yJ6k6lWvgUjOEPPVbXZWaJf0zWuSx5hPgTumOt0-SDpwgv9vnJ9MXUWWp_ZxLmrhUeiRfO1We96gLp3sO0iJ46eiCp02HYVoaWdROm6fIO_IdCadX2cr_mPBEmHe8tS8RnGAn2_L5_qxDhAHypgDT5oGY912r8DP9SGVxWaWrlVF9MfLQv19fFZUrmrElNgCFbXRO5DJ0PIIUepug0EyVaJ7T4LCb5E56L80EkXtZ8Ntv6kmQPPOB-aqIPoWtwH0VZ0pF_pYHHpcNM1xUhi66UA1qbxI37=w710-h942-no?authuser=0',
          thumbnail: 'https://lh3.googleusercontent.com/AI5fGGZQhcpciIowwfBtSFpTSruKkzJY7NC8a_DKwWZMYw1bZB7ZFQobX_CAD4OYk-YBEJBQ9ZWzpiCNYopdbzlF9fm-trff9xGV6weSE7dF9iiGfUxKEtI1N2xE0fD4mGP5NBmFc3EtlY8jsQVMMDNUVExmVU1PVaPaqk4JNybZzG06RyLqr2e76eT669MVgkLIP7bwdkUXmGQC_QLzrlGo41IkwWLiQvkhH2Xf_DsBXl23dcki2hdk5kz2hmS_fU7DXE34kVJCK2rgqLA97LdHO46gOB4C3oskjTYipCuSLc-hhvaQdNEzgpMdAWkkCcdKy_nFU-DWtrGtRociC7piG5qi2iERcz-sHHRJzqZtILyHjNOofdVx2MiIxeT5Z_onqQqhijjRE-dH-I5eH0lUGvxK9OyLoHcnip_TlsIxVQwcxBC9j_WhE6yJ6k6lWvgUjOEPPVbXZWaJf0zWuSx5hPgTumOt0-SDpwgv9vnJ9MXUWWp_ZxLmrhUeiRfO1We96gLp3sO0iJ46eiCp02HYVoaWdROm6fIO_IdCadX2cr_mPBEmHe8tS8RnGAn2_L5_qxDhAHypgDT5oGY912r8DP9SGVxWaWrlVF9MfLQv19fFZUrmrElNgCFbXRO5DJ0PIIUepug0EyVaJ7T4LCb5E56L80EkXtZ8Ntv6kmQPPOB-aqIPoWtwH0VZ0pF_pYHHpcNM1xUhi66UA1qbxI37=w710-h942-no?authuser=0',
        }
      ];
  }


  render() {
    return (
          <div className='body'>
            <div className='content-a'>
              <Navbar />
              <div className='text-body-portfolio-sub'>
                <h1>Untitled Inks Series</h1>
                <p>
                  These works come from a series that I call the Untitled Inks Series. They are non-objective abstract pieces that balance an ambiguity
                  between what is intentional and incidental. Amongst the order is disorder with loose markings and new designs. As it is unknown as to 
                  what the piece will look like until it has dried and has had the rubber cement removed. With this type of application there is a lot
                  of playfulness that occurs because of the willingness to let go for some of the process.
                </p>
                <p>
                  This series started out as a huge experiment, which turned into three areas of study: base medium, inks, and size. I found that my favorite
                  base medium is heavy watercolor paper. My favorite ink to use is printer ink (which I got in convienent bottles). Then, that leaves size which
                  I didn't really have a favorite for, but the 5ft by 4ft pieces were definitly fun to make! (I call them the Gigantic untitled)
                </p>
                <p>
                  With the way my process works for these pieces, I've created around 600 pieces during the duration of the series. Some have been sold, given away,
                  tossed, or kept for myself. Most sit quietly in storage until they become relavant again. Most of the pieces did not turn out great, but those
                  that did are wonderful!
                </p>
                <p>
                  Below are pieces that I love or think are great examples of the series.
                </p>
              </div>
              <ImageGallery items={this.images} showBullets={this.state.showBullets}/>
              </div>
              <Footer />
          </div>
    );
};
}

  export default InkProject;