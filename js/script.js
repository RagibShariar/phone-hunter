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
  console.log(phones);
  // phones.forEach(phone => {
  //     console.log(phone);
  // });
  for (const phone of phones) {
    // console.log(phone);

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="img-fluid w-50 m-auto" alt="...">
            <div class="">
                <h5 class="card-title mt-5">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
            </div>
        </div>
    `;
    searchResult.appendChild(div);
  }
};
