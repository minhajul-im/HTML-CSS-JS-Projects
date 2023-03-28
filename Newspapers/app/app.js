const getApi = async () => {
  const url = 'https://openapi.programming-hero.com/api/news/category/01';
  try {
    const res = await fetch(url);
    const data = await res.json(res);
    getDisplay(data.data);
  }
  catch (e) {
    console.log(e);
  }
};


const getDisplay = news => {
  const index = news.length;
  const getIndex = document.getElementById('count');
  getIndex.innerText = index;
  const getNewsSection = document.getElementById('news-section');
  news.forEach(newsOne => {
    console.log(newsOne);
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
    <div class="row p-3  mx-2  my-5 bg-light rounded py-3 ">
    <div class="col-lg-4 col-12">
      <img class="img-fluid" src="${newsOne.image_url}" alt="">
    </div>
    <div class="col-lg-8 col-12 mt-1">
      <h3>${newsOne.title}</h3>
      <p class="text-secondary py-2">${newsOne.details.slice(0, 150)}...</p>
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <div><img class="img" src="${newsOne.author.img}" alt="" srcset=""></div>
          <div class="ms-3">
            <h6 class="m-0 text-dark">${newsOne.author.name = 'system' ? newsOne.author.name : 'No data available'}</h6>
            <span class="text-secondary">${newsOne.author.published_date}</span>
          </div>
        </div>
        <div class="">
          <i class="fa-regular fa-eye fw-semibold"></i>
          <span class="fw-semibold">${newsOne.rating.number}M</span>
        </div>
        <div class="">
        <i type="button" class="fa-solid fa-arrow-right-long fw-bold fs-3 text-info " data-bs-toggle="modal" data-bs-target="#newsDesk"></i>

        <div class="modal fade" id="newsDesk" tabindex="-1" aria-labelledby="newsDeskLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="newsDeskLabel">${newsOne.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-secondary">
                ${newsOne.details}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info text-light" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
    `
    getNewsSection.appendChild(createDiv);
  });
  spinnerFunc(false);
};


const getNewsButton = document.getElementById('international-news');
getNewsButton.addEventListener('click', () => {
  spinnerFunc(true);
  getApi();
});

const news = document.getElementById('news');
news.addEventListener('click', () => {
  spinnerFunc(true);
  getApi();
})
const spinnerFunc = isRunning => {
  const getSpinner = document.getElementById('spinner');
  if (isRunning) {
    getSpinner.classList.remove('d-none');
  } else {
    getSpinner.classList.add('d-none');
  }
}