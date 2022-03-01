const searchPhone = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log(searchText);

  searchField.value = '';

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.data));
};

const displaySearchResult = (phones) => {
  const searchResult = document.getElementById('search-result');
  // console.log(phones);
  for (const phone of phones.slice(0,20)) {
    // console.log(phone);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card py-3">
                <img src="${phone.image}" class="w-50 card-img-top img-fluid mx-auto pt-2" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bold">${phone.brand}</h5>
                  <p class="card-text">${phone.phone_name}</p>
                  <p class="card-text">${phone.slug}</p>
                  <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-outline-dark">More Details</button>
                </div>
              </div>
    `;
    searchResult.appendChild(div);
  }
};
const loadPhoneDetail = (phoneId) => {
  // console.log(phoneId);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhoneDetail(data.data));
};
const displayPhoneDetail = phone => {
  console.log(phone);
  const phoneDetails = document.getElementById('phone-details');

  const div = document.createElement('div');
  div.classList.add('row', 'mb-4');
  div.innerHTML = `
    <div class="col-md-6 border text-end pe-4">
      <img class="img-fluid mb-3 mx-auto w-50" src="${phone.image}" alt="">
    </div>
    <div class="col-md-5 border py-5 pe-5">
      <div class="phone-details-div">
        <h3 class="fw-bold mb-3">Apple</h3>
        <h6 class="fw-bold">Release Date: <span class="h6">${phone.releaseDate}</span></h6>
        <h6 class="fw-bold">Sensors: <span class="h6">${phone.sensors}</span></h5>
        <h6 class="fw-bold">Others: <span class="h6">${phone.others}</span> </h6>
      </div>
    </div>
  `
  phoneDetails.appendChild(div);
};
