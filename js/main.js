const burgerHeaderClick = document.querySelectorAll('.burger_header_click')
const burgerHeader = document.querySelector('.burger_header')
const footerRight = document.querySelector('.footer_right')
const footerList = document.querySelector('.footer_list')
const footerList2 = document.querySelector('.list2')
const footerContact = document.querySelector('.footer_contact')
const darkbg = document.querySelector('.darkbg')
const body = document.querySelector('body')

burgerHeaderClick.forEach((button) => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      burgerHeader.classList.toggle('active')
      footerRight.classList.toggle('active')
      footerList.classList.toggle('active')
      footerList2.classList.toggle('active')
      footerContact.classList.toggle('active')
      darkbg.classList.toggle('active')
      body.classList.toggle('active')
   })
})

document.addEventListener('click', (e) => {
   if(e.target === darkbg) {
      burgerHeader.classList.remove('active')
      footerRight.classList.remove('active')
      footerList.classList.remove('active')
      footerList2.classList.remove('active')
      footerContact.classList.remove('active')
      darkbg.classList.remove('active')
      body.classList.remove('active')
   }
})

/***************************************************/

