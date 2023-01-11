const baseUrl = 'http://localhost:8000'

export function getCategoryProducts(category_id) {
    let url = `${baseUrl}/api/products/?category=${category_id}&page=1`

    fetch(url)

    .then((response) => response.json())
    .then((data) => console.log(data));

}