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
                  <button onclick="loadPhoneDetail(${phone.slug})" class="btn btn-outline-dark">More Details</button>
                </div>
              </div>
    `;
    searchResult.appendChild(div);
  }
};
const loadPhoneDetail = (phoneId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
}
