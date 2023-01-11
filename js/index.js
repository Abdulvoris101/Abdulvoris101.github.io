import { tg } from './useTelegram.js'
import { usercard, haveQueryString , page, queryString} from './dom.js'
import { getCategoryProducts, baseUrl } from './request.js'

tg.expand()


let category = haveQueryString(queryString)

let html = ''

if (category) {
  let products = getCategoryProducts(category)
  
  products.then(data => {

      data.results.forEach(item => {
        html += ejs.render(' <div class="col-6"> \
              <div class="card" > \
                <img src="<%= baseUrl %>/<%= item.image %>" class="card-img"> \
                <div class="card-body"> \
                  <h5 class="card-title"> <%= item.name %> </h5> \
                  <h5 class="card-title">127 000 сум</h5> \
                  <a href="#" class="btn btn-success btn-sm w-100">Покупать</a> \
                </div> \
                </div>  \
            </div>' , {item: item, baseUrl: baseUrl}
          );
      });

      html += category;

      page.innerHTML = html;
  })


} else {
    page.innerHTML = 'Not';
}




