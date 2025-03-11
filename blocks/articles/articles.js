import { getGraphQLSitecore } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const results = await getGraphQLSitecore();
  console.log("from articles",results);
  const articleList = document.createElement('div');
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = block.textContent.trim();
  block.replaceChildren(blockquote);
  articleList.classList.add('article-list');

results.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('article-item');
    articleElement.innerHTML = `
      <h2 class="article__heading">${article.Heading.value}</h2>
      <p class="article__content">${article.Content.value}</p>
      <img src="${article.Image.src}" class="article__image"/>
    `;
    articleList.appendChild(articleElement);
});

  block.appendChild(articleList);
}


