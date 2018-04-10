document.querySelector('nav').onclick = (e) => {
  selectTabs(e);
}

document.querySelector('.mobile').onclick = (e) => {
  selectTabs(e);
}

document.querySelector('.menu-btn').onclick = (e) => {
  console.log(e)
  if (!document.querySelector('.navigation').style.display) {
    document.querySelector('.navigation').style.display = true;
  }
}

const selectTabs = (e) => {
  if (!e.target.className.includes('active')) {
    document.querySelectorAll('.active').forEach( tab => tab.classList.remove('active'));

    document.querySelectorAll('.article').forEach( article => {
      article.classList.remove('displayed');
      if (article.id.includes(e.target.classList[1])) {
        article.classList.add('displayed');
        document.querySelectorAll('.expand').forEach(symbol => symbol.innerText = '-');
        e.target.children[0].innerText = "+";
      }
    });
    e.target.classList.add('active');
  } 
}
