// toggle hamburger menu
const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

btn.addEventListener('click',toggleMenuBtn);

function toggleMenuBtn(){
    btn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
}

// handle short link
const linkForm = document.getElementById('link-form');
const linkInput = document.getElementById('link-input');
const errorMessage = document.getElementById('error-message');

linkForm.addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();
    errorMessage.innerHTML = '';
    linkInput.classList.remove('border-red-400', 'border-2');

    if(linkInput.value == ''){
        errorMessage.innerHTML = 'Please enter something!';
        linkInput.classList.add('border-red-400', 'border-2');
    }else if(!validURL(linkInput.value)){
        errorMessage.innerHTML = 'Please enter a valid url!';
        linkInput.classList.add('border-red-400', 'border-2');
    }else{
        alert('Success');
    }
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }