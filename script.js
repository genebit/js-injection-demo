document.addEventListener('DOMContentLoaded', ready);

function ready() {
    const queryInput = document.getElementById('queryInput');
    const queryOutput = document.getElementById('queryOutput');

    const { search } = new URL(window.location);

    queryInput.value = queryOutput.innerHTML = new URLSearchParams(search).get('query');

    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        const newQuery = queryInput.value;
        const newUrl = updateQueryStringParameter(window.location.href, 'query', newQuery);
        window.location.href = newUrl;
    });

    function updateQueryStringParameter(uri, key, value) {
        const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        const separator = uri.includes('?') ? "&" : "?";
        return uri.match(re) ? uri.replace(re, '$1' + key + "=" + value + '$2') : uri + separator + key + "=" + value;
    }
}
