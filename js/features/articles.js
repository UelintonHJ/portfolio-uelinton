import { articles } from "../data/articles.js";

const articleContainer = document.querySelector(".articles-container");

export function renderArticles() {
    if (!articleContainer) return;

    articleContainer.innerHTML = articles.map(article => {
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
    }).join("");
}