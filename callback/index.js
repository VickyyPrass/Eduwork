const dataURL = "https://jsonplaceholder.typicode.com/users";
const loading = document.querySelector(".loading");

function showLoading() {
    loading.style.display = "inline-block";
}

function hideLoading() {
    let loadingEffect = setInterval(() => {
        if (!loading.style.opacity) {
            loading.style.opacity = 1;
        }
        if (loading.style.opacity > 0) {
            loading.style.opacity -= 0.1;
        } else {
            clearInterval(loadingEffect);
            loading.style.display = "none";
        }
    }, 50);
}

function getData(url, result) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            result(JSON.parse(request.responseText));
        }
    };
    request.open("GET", url);
    request.send();
}

function resultData(data) {
    //console.log(data);
    hideLoading();
    const table = document.querySelector("tbody");
    let row = "";
    data.forEach((el) => {
        row += `
        <tr>
            <th scope="row" class="text-center">${el.id}</th>
            <td>${el.name}</td>
            <td>${el.username}</td>
            <td>${el.email}</td>
            <td>${el.address.street}, ${el.address.suite}, ${el.address.city}</td>
            <td>${el.company.name}</td>
        </tr>
        `;
        table.innerHTML = row;
    });
}
showLoading();
getData(dataURL, resultData);
