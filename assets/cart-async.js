
(function(document) {

  let selectors = {
    productVariants: '.js-product-variant:not(.is-disabled)',
    submitButton: '.js-add-to-cart',
    cartTrigger: '.is-cart',
    cartBtnsMinus: '.cart-qnt-btn-minus',
    cartBtnsPlus: '.cart-qnt-btn-plus',
    cartItems: '.c-cart-item',
    cartItemsLine: '.c-header-cart__line',
    cartItemsTot: '.c-cart-item__quantity-tot',
    cartSummary: '.c-header-cart__summary',
    msgEmptyCart: '.msg-empty-cart',
    cartCount: '.js-cart-count',
    cartInfoHidden: '#cart-info-hidden',
    variantNotification: '.js-variant-notification',
    borderNotification: '.js-border-notification',
  };

  let productVariants = document.querySelectorAll(selectors.productVariants)
  let submitButton = document.querySelector(selectors.submitButton)
  let cartTrigger = document.querySelector(selectors.cartTrigger)
  let cartBtnsMinus = document.querySelectorAll(selectors.cartBtnsMinus)
  let cartBtnsPlus = document.querySelectorAll(selectors.cartBtnsPlus)
  let cartItems = document.querySelectorAll(selectors.cartItems)
  let cartItemsLine = document.querySelectorAll(selectors.cartItemsLine)
  let cartItemsTot = document.querySelectorAll(selectors.cartItemsTot)
  let cartSummary = document.querySelector(selectors.cartSummary)
  let msgEmptyCart = document.querySelector(selectors.msgEmptyCart)
  let cartCount = document.querySelector(selectors.cartCount)
  let cartInfoHidden = document.querySelector(selectors.cartInfoHidden)
  let variantNotification = document.querySelector(selectors.variantNotification)
  let borderNotification = document.querySelector(selectors.borderNotification)

  let itemList = { "items" : [], 'sections': 'cart-ajax' }

  window.addEventListener("load", (event) => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let paramOpenCart = urlParams.get('opencart')
    if (paramOpenCart == "true") {
        cartTrigger.click()
        var scrollpos = localStorage.getItem('scrollpos');
        if (scrollpos) window.scrollTo({
            top: scrollpos,
            behavior: "smooth",
          });
    }

    window.onbeforeunload = function(e) {
        localStorage.setItem('scrollpos', window.scrollY);
    };




    productVariants.forEach((productVariant,i) => {

      productVariant.addEventListener("click", (e) => {

        itemList.items = []

        if ( productVariant.classList.contains("selected") ) {

          productVariant.classList.remove("selected")

        } else {

          productVariants.forEach((productVariant__clean) => {
            productVariant__clean.classList.remove("selected")
          })

          productVariant.classList.add("selected")

          let productVariant__id = productVariant.querySelector("input").getAttribute("variant-id")
  
          jsonVariant = {
            'id': productVariant__id,
            'quantity': 1
          }
          itemList.items.push(jsonVariant)
          
        }

      }, false)
          
    })

    if (submitButton) {
        submitButton.addEventListener("click", (e) => {
    
          submitButton.classList.add("disabled")
          cartSummary.classList.remove("hide")
          
          let variant_select = false
          productVariants.forEach((productVariant__check) => {
            if (productVariant__check.classList.contains("selected")) {
              variant_select = true
            }
          })

          if (variant_select) {

            fetch('/cart/add.js', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(itemList)
            }).then(response => {
              return response.json();
            }).then(data => {
      
              // console.log(data);
      
              submitButton.classList.remove("disabled")
              
              let disablePlus = false
      
              reloadCart(disablePlus)
      
            }).catch((error) => {
              console.error('Error:', error);
            });

          } else {

            variantNotification.classList.remove("hidden")
            borderNotification.classList.remove("hidden")
            setTimeout(function(){
              variantNotification.classList.add("hidden")
              borderNotification.classList.add("hidden")
            }, 2500)

            submitButton.classList.remove("disabled")
          }
    
        }, false)
    }

    function changeCart(changeVariant, cartBtnVariation, limit) {
      fetch('/cart/change.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(changeVariant)
        }).then(response => {
          return response.json();
        }).then(data => {
          
          console.log(data);
          // console.log(data.total_price);
          // console.log(data.items);

          // Reloat Cart Total
          let newTotal = (parseInt(data.total_price)).toFixed(2) / 100
          let cartTotal = document.querySelector(".c-header-cart__total")
          let cartTotalVal = cartTotal.querySelector(".c-header-cart__total__val")
          let currentCurency = cartTotal.getAttribute("data-currency")
          cartTotalVal.innerHTML = currentCurency + newTotal
          
          // Ricalcolo totale del prodotto (line item)
          data.items.forEach(itemCart => {
            if (itemCart.id == changeVariant.id ) {
              console.log("trovato: "+itemCart.id+" - "+changeVariant.id)
              document.querySelector('.c-cart-item[data-id="'+changeVariant.id+'"] .c-cart-item__price').innerHTML = currentCurency + (parseInt(itemCart.original_line_price)).toFixed(2) / 100
            }
          });

          // Remove Item = 0
          if (changeVariant.quantity == 0) {
            document.querySelector('.c-cart-item[data-id="'+changeVariant.id+'"]').remove()
          }

          // Reload page if empty cart
          if (data.item_count == 0) {
            location.assign(location.protocol + '//' + location.host + location.pathname)
            return;
          }

          // Reset all cart items quantity
          data.items.forEach((cartItem,i) => {

            let currentItem = document.querySelector('.c-cart-item[data-id="'+cartItem.id+'"]')
            let btnMinus = currentItem.querySelector(".cart-qnt-btn-minus")
            let btnPlus = currentItem.querySelector(".cart-qnt-btn-plus")

            currentItem.querySelector(".c-cart-item__quantity-tot").innerHTML = cartItem.quantity
            btnMinus.setAttribute("data-qnt", cartItem.quantity - 1)
            if (cartItem.quantity == limit) {
              btnPlus.classList.add("disabled")
            } else {
              btnPlus.classList.remove("disabled")
              btnPlus.setAttribute("data-qnt", cartItem.quantity + 1)
            }
            
          })

          // Re-enable btn variation
          cartBtnVariation.classList.remove("disable")
          
        }).catch((error) => {
          console.error('Error:', error);
        });
    }

    listenerMinus(cartBtnsMinus)

    function listenerMinus(cartBtnsMinus) {

      cartBtnsMinus.forEach((cartBtnMinus,i) => {
        cartBtnMinus.addEventListener("click", (e) => {

          cartBtnMinus.classList.add("disable")

          let dataID = cartBtnMinus.getAttribute("data-id")
          let dataQnt = cartBtnMinus.getAttribute("data-qnt")

          let currentItem = document.querySelector('.js-cart-item-limit[data-id="'+dataID+'"]')
          let currentLimit = currentItem.getAttribute("data-limit")
          let currentLimit__qnt = parseInt(currentLimit)

          let changeVariant = {
                'id': dataID,
                'quantity': dataQnt
              }

          changeCart(changeVariant, cartBtnMinus, currentLimit__qnt)

        }, false)
      })

    }

    listenerPlus(cartBtnsPlus) 
    
    function listenerPlus(cartBtnsPlus) {
      cartBtnsPlus.forEach((cartBtnPlus,i) => {
        cartBtnPlus.addEventListener("click", (e) => {

          cartBtnPlus.classList.add("disable")

          let dataID = cartBtnPlus.getAttribute("data-id")
          let dataQnt = cartBtnPlus.getAttribute("data-qnt")

          // console.log(dataID)

          let currentItem = document.querySelector('.js-cart-item-limit[data-id="'+dataID+'"]')
          let currentLimit = currentItem.getAttribute("data-limit")
          let currentLimit__qnt = parseInt(currentLimit)

          // console.log(currentLimit__qnt)

          let changeVariant = {
                'id': dataID,
                'quantity': dataQnt
              }

          changeCart(changeVariant, cartBtnPlus, currentLimit__qnt)

        }, false)
      })
    }


    function reloadCart(disablePlus) {

      fetch('/cart.js', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        return response.json();
      }).then(data => {

        console.log(data); // prints HTML of the section 

        let cartAjax = document.querySelector('#cart-ajax')
        cartAjax.innerHTML = ""

        // console.log(data.items)
        // console.log(data.item_count)
        
        uploadCartCount(data.item_count)
        resetCartHidden(data.items)

        data.items.forEach((cartItem,i) => {

          let quantityMinus = cartItem.quantity - 1
          let quantityPlus = cartItem.quantity + 1
          let disablePlusClass = ""

          let cartTotal = document.querySelector(".c-header-cart__total")
          let cartTotalVal = cartTotal.querySelector(".c-header-cart__total__val")
          let currentCurency = cartTotal.getAttribute("data-currency")

          cartTotalVal.innerHTML = (currentCurency + (data.total_price / 100))

          let finalPrice = (currentCurency + (cartItem.final_price / 100))
          // let finalPrice = (currentCurency + (cartItem.final_price / 100)).toFixed(2)

          if (disablePlus) {
            let disablePlusClass = "disabled"
          }

          var divCartItem = document.createElement('div');
          divCartItem.setAttribute('class', 'c-cart-item');
          divCartItem.setAttribute('data-id', cartItem.id);

          divCartItem.innerHTML = `
                    <div class="c-cart-item__container">
                        <a href="`+cartItem.url+`">
                            <img class="c-cart-item__image" src="`+cartItem.image+`" alt="`+cartItem.title+`">
                        </a>
                        <div class="c-cart-item__info"><span>`+cartItem.title+`</span>
                        </div>
                        <div class="c-cart-item__quantity">

                            <button 
                                class="c-cart-item__quantity-btn cart-qnt-btn-minus" 
                                type="button" 
                                data-id="`+cartItem.id+`" 
                                data-qnt="`+quantityMinus+`" >
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.5" cy="19.5" r="7" stroke="white" /><path d="M22.498 19.5H16.498" stroke="white" stroke-linecap="round" /></svg>
                            </button>
                            
                            <span class="c-cart-item__quantity-tot">`+cartItem.quantity+`</span>
                            
                            <button 
                                class="c-cart-item__quantity-btn cart-qnt-btn-plus `+disablePlusClass+`" 
                                type="button" 
                                data-id="`+cartItem.id+`" 
                                data-qnt="`+quantityPlus+`" >
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.5" cy="19.5" r="7" stroke="white" /><path d="M22.498 19.5H16.498" stroke="white" stroke-linecap="round" /><path d="M19.5 16.0898V22.908" stroke="white" stroke-linecap="round" /></svg>
                            </button>

                        </div>
                        <span class="c-cart-item__price">`+finalPrice+`</span>
                    </div>

                    <div class="c-header-cart__line"></div>
          `

          cartAjax.append(divCartItem)
          msgEmptyCart.classList.add("hide")
          
        })
        
        if (!cartTrigger.classList.contains("is-active")) {
          setTimeout(() => {
            cartTrigger.click()
          }, 250);
        }

        cartBtnsMinus = cartAjax.querySelectorAll(selectors.cartBtnsMinus)
        cartBtnsPlus = cartAjax.querySelectorAll(selectors.cartBtnsPlus)

        listenerMinus(cartBtnsMinus)
        listenerPlus(cartBtnsPlus)

      }).catch((error) => {
        console.error('Error:', error);
      });
      return;

    }

    function uploadCartCount(count) {
      if (parseInt(count) > 0) {
        cartCount.innerHTML = count
        cartCount.classList.remove("hide")
      } else {
        cartCount.innerHTML = ""
        cartCount.classList.add("hide")
      }
    }


    function resetCartHidden(cartItems) {
      cartInfoHidden.innerHTML = ""
      cartItems.forEach((cartItem,i) => {
        let cartHiddenEl = document.createElement('span')
        cartHiddenEl.setAttribute('class', 'js-cart-item-limit');
        cartHiddenEl.setAttribute('data-id', cartItem.id);
        cartHiddenEl.setAttribute('data-limit', "99");
        cartInfoHidden.append(cartHiddenEl)
      })
    }

  })





  })(document);

