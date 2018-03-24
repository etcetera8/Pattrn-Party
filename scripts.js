document.querySelector('nav').onclick = (e) => {
  const match = e.target.classList[1];
  if (!e.target.className.includes('active')) {
    document.querySelectorAll('.active').forEach(tab => {
      tab.classList.remove('active')
    })

    document.querySelectorAll('.article').forEach( article => {
      article.classList.remove('displayed')
      if (article.id.includes(e.target.classList[1])) {
        article.classList.add('displayed')
      }
      
    })
    e.target.classList.add('active')
  } 
}