(function(document) {

    let selectors = {
        heroBanners: '.section-hero-banner'
    };
  

    let heroBanners = document.querySelectorAll(selectors.heroBanners)

    window.addEventListener("load", (event) => {
        
        heroBanners.forEach((heroBanner,i) => {

            heroBanner.classList.add('section-hero-banner-' + i);
            
        })
    })


    


})(document);
  