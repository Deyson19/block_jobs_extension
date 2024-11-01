//* Enterprises list
const enterprises = ["BairesDev LLC", "BairesDev"];

(() => {
  const articles = document.querySelectorAll("article.box_offer");
  hideArticles(articles);
})();

function hideArticles(articles) {
  articles.forEach((article) => {
    if (enterprises.some((company) => article.innerHTML.includes(company))) {
      //*Hide the article tag
      article.style.display = "none";
      console.log(`Artículo oculto: ${article}`);
    }
  });
}
