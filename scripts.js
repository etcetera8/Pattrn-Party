document.querySelector('nav').onclick = (e) => {
  selectTabs(e);
}

document.querySelector('.mobile').onclick = (e) => {
  selectTabs(e);
}

document.querySelector('.menu-btn').onclick = (e) => {
  if (document.querySelector('.navigation-mobile').style.display === "none") {
    document.querySelector('.navigation-mobile').style.display = "block"
    document.querySelector('.search-mobile').style.display = "block"
  } else {
    document.querySelector('.navigation-mobile').style.display = "none"
    document.querySelector('.search-mobile').style.display = "none"
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
