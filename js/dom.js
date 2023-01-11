
export let queryString = window.location.search;


export let usercard = document.getElementById("usercard")

export let page = document.getElementById("page-content")


export function haveQueryString(queryString) {
    if (queryString != '') {
        let category_id = queryString.replace('?category_id=', '')
        return category_id

    } else {
        return false
    }   
}

