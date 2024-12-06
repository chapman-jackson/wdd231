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

// display business data function
const businessFile = 'https://chapman-jackson.github.io/wdd231/chamber/data/members.json';
const businessCard = document.querySelector("#businessCard");

const displaydata = (businessMembers) => {

    // filter level 1 members
    const filteredMembers = businessMembers.filter(member => {
        const level = member.membershiplevel.split('-')[1];
        return level !=='1';
    })
    const topMembers = [];
    while (topMembers.length < 2 && filteredMembers.length > 0) 
    { const spotLight = Math.floor(Math.random() * filteredMembers.length); topMembers.push(filteredMembers.splice(spotLight, 1)[0]); }
    
    topMembers.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let address = document.createElement('p');
        let level = document.createElement('p');

        name.textContent = `${member.name}`;
        phone.textContent = `Phone: ${member.phonenumber}`;
        website.textContent = `URL: ${member.websiteurl}`;
        website.href = `${member.websiteurl}`;
        website.target = "_blank";
        address.textContent = `Address: ${member.address}`;
        level.textContent = `Membership level: ${member.membershiplevel}`;

        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `${member.name} company logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(address);
        card.appendChild(level);

        businessCard.appendChild(card);
    });
};

// retrieve the .json file from the data folder
async function getbusinessData() {
    const response = await fetch(businessFile);
    const data = await response.json();
    displaydata(data.businessMembers);
}

getbusinessData();

