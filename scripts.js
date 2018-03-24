document.querySelector('nav').onclick = (e) => {
  if (!e.target.className.includes('active')) {
    document.querySelectorAll('.active').forEach(tab => {
      tab.classList.remove('active')
    })
    e.target.classList.add('active')
  } 
}