    // copyright code
    const currentyear = document.querySelector("#currentyear");
    let lastModified = document.querySelector("#lastModified");

    const currentDate = new Date();
    const lastModifiedDate = new Date(document.lastModified);

    currentyear.innerHTML = `©<span class="highlight">${currentDate.getFullYear()} Timbuktu Chamber of Commerce</span>`;

    lastModified.textContent = `Last Update: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

    // hamburger button code
    const hamButton = document.querySelector('#hamburger-button');
    const navigation = document.querySelector('.navigation');
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

// getting url
const currentUrl = window.location.href;
console.log(currentUrl);

//splitting url for data pieces
const splitUrl = currentUrl.split('?');
console.log(splitUrl);

if (splitUrl.length > 1) {
    let formData = splitUrl[1].split('&');
    console.log(formData);

    function show(detail) {
        console.log(detail);
        let result = ''; 
        formData.forEach((element) => {
            console.log(element);
            if (element.startsWith(detail)) {
                result = decodeURIComponent(element.split('=')[1]).replace(/\+/g, ' ');
            }
        });
        return result;
    }

    const displayForm = document.querySelector('#display-results');
    const displayTime = document.querySelector('#display-time');
    if (displayForm) {
        displayForm.innerHTML = `
            <p>First Name: ${show('firstName')}</p>
            <p>Last Name: ${show('lastName')}</p>
            <p>Email: ${show('email')}</p>
            <p>Phone Number: ${show('phone')}</p>
            <p>Organization Name: ${show('organization-name')}</p>
        `;
    }
    if (displayTime) {
        displayTime.textContent = `Application Started: ${show('timestamp')}`;
    }
}

