export const baseUrl = 'http://localhost:8000'

export async function  getCategoryProducts(category_id) {
    let url = `${baseUrl}/api/products/?category=${category_id}&page=1`

    let resp  = await fetch(url)
    let data = await resp.json();

    return data;
}   