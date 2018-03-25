document.querySelector('nav').onclick = (e) => {
  if (!e.target.className.includes('active')) {
    document.querySelectorAll('.active').forEach(tab => tab.classList.remove('active'));

    document.querySelectorAll('.article').forEach( article => {
      article.classList.remove('displayed');
      if (article.id.includes(e.target.classList[1])) {
        article.classList.add('displayed');
        document.querySelectorAll('.expand').forEach( symbol => symbol.innerText = '-')
        e.target.children[0].innerText = "+";
      }
    })
    e.target.classList.add('active');
  } 
}

document.querySelector('.mobile').onclick = (e) => {
  if (!e.target.className.includes('active')) {
    document.querySelectorAll('.active').forEach(tab => tab.classList.remove('active'));

    document.querySelectorAll('.article').forEach(article => {
      article.classList.remove('displayed');
      if (article.id.includes(e.target.classList[1])) {
        article.classList.add('displayed');
        document.querySelectorAll('.expand').forEach(symbol => symbol.innerText = '-')
        e.target.children[0].innerText = "+";
      }
    })
    e.target.classList.add('active');
  } 
  
}