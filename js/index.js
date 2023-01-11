import { tg } from './useTelegram.js'
import { usercard, haveQueryString , page, queryString} from './dom.js'
import { getCategoryProducts } from './request.js'

let html = '';

let category = haveQueryString(queryString)

if (category) {
  page.innerHTML = category;

  getCategoryProducts(category)
} else {
    page.innerHTML = 'Not';
}

  // html += ejs.render('<h4><a  target="_blank"><%- text %></a></h4> <br>', {text: links[0]['text'] });



