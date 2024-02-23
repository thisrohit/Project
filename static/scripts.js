document.addEventListener('DOMContentLoaded', async function() {
    const newsContainer = document.getElementById('news-items');
    try {
        const response = await fetch('/api/news');
        const data = await response.json();

        data.articles.forEach(article => {
            const newsItem = `
                <div class="overflow-hidden bg-white m-2 shadow-lg flex flex-col md:flex-row justify-center">
                    <div class="h-26 w-full overflow-hidden">
                        <img src="https://source.unsplash.com/random/500x250/?nature" alt="" class="" />
                    </div>
                    <div class="grid p-2">
                        <div class="font-bold text-lg text-black m-2">${article.title}</div>
                        <div class="text-gray-500 m-2 text-sm">
                            <a href="${article.url}">${article.source}</a>
                        </div>
                        <div class="text-gray-500 m-2 text-sm">${article.publishedAt}</div>
                    </div>
                </div>
            `;
            newsContainer.insertAdjacentHTML('beforeend', newsItem);
        });
    } catch (error) {
        console.error('Error fetching news:', error.message);
        const errorMessage = `<div class="font-bold text-lg text-red-500 m-2">Failed to fetch news headlines. Please try again later.</div>`;
        newsContainer.insertAdjacentHTML('beforeend', errorMessage);
    }
});
