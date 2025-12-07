// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Order modal
const orderModalEl = document.getElementById('orderModal');
let orderModal = null;
if(orderModalEl){ orderModal = new bootstrap.Modal(orderModalEl); }
const orderNowBtn = document.getElementById('orderNow');
if(orderNowBtn){ orderNowBtn.addEventListener('click', ()=> orderModal.show()); }

// Submit simulated order
const submitOrder = document.getElementById('submitOrder');
if(submitOrder){
  submitOrder.addEventListener('click', ()=>{
    const drink = document.getElementById('drinkSelect').value;
    const notes = document.getElementById('orderNotes').value;
    // simple feedback and close
    submitOrder.disabled = true;
    submitOrder.textContent = 'Placing...';
    setTimeout(()=>{
      submitOrder.disabled = false;
      submitOrder.textContent = 'Place Order';
      orderModal.hide();
      alert(`Order placed: ${drink}${notes? ' — ' + notes : ''}`);
      document.getElementById('orderForm').reset();
    }, 800);
  });
}

// Contact form handling (simulated)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const alertWrap = document.getElementById('contactAlert');
    alertWrap.innerHTML = '<div class="alert alert-success" role="alert">Thanks! Your message was sent. We will reply soon.</div>';
    contactForm.reset();
    setTimeout(()=>{ alertWrap.innerHTML = ''; }, 4000);
  });
}
