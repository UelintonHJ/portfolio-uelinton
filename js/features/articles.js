import { articles } from '../data/articles.js';
import { qs } from '../utils/dom.js';

export function initArticles() {
    const articlesContainer = qs('.articles-container');

    if (!articlesContainer) return;

    function renderArticle(article) {
        return `
            <article class="article-card">
                <a href="${article.link}">
                    <div class="article-thumbnail">
                        <img src="${article.thumbnail}" alt="${article.title}" loading="lazy" decoding="async" fetchpriority="low">
                    </div>

                    <div class="article-card-content">
                        <h3>${article.title}</h3>

                        <p>${article.description}</p>

                        <footer class="article-meta">
                            <span>${article.publishedAt}</span>
                        </footer>
                    </div>
                </a>
            </article>
        `;
    }

    articlesContainer.innerHTML = articles.map(renderArticle).join('');
}