sep = document.querySelector('.sep')
navb=document.querySelector('.navb')
rnav=document.querySelector('.rnav')
nlist=document.querySelector('.nlist')
sep.addEventListener('click',()=>{
    navb.classList.toggle('hnav-resp');
    rnav.classList.toggle('vc-resp');
    nlist.classList.toggle('vc-resp');
})