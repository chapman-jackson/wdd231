document.addEventListener('DOMContentLoaded', () => {
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

    // getting and setting the time the form was opened
    const timeStampInput = document.querySelector('#time-stamp'); const currentTime = new Date(); 
    const humanReadableTime = currentTime.toLocaleString(); 
    timeStampInput.value = humanReadableTime;
    const membershipPerks = { 
        nonProfitMember: [{
            fee: 0,
            perks: ["Access to community events", "Newsletter subscription", "Discounts on services"]
        }],
        bronzeMember: [{
            fee: 500,
            perks: ["All Non-Profit perks", "Priority support", "Exclusive webinars"]
        }],
        silverMember: [{
            fee: 1000,
            perks: ["Priority advertising on the chamber of commerce", "All Bronze perks", "Free merchandise", "Annual gala invitation"]
        }],
        goldMember: [{
            fee: 2000,
            perks: ["Priority advertising on the chamber of commerce", "All Silver perks", "Personalized support", "VIP event access"]
        }]
    };

    // displaying modal when learn more button is clicked
    const displayNonProfit = document.querySelector('#nonProfit-content');
    const displayBronze = document.querySelector('#bronze-content');
    const displaySilver = document.querySelector('#silver-content');
    const displayGold = document.querySelector('#gold-content');

    function updateModalContent(modalElement, membershipDetails, closeModalId) {
        const { fee, perks } = membershipDetails[0];
        modalElement.innerHTML = `
            <button id="${closeModalId}">❌</button>
            <h2>Membership Benefits</h2>
            <h3>Fee: $${fee}</h3>
            <p>Benefits:</p>
            <ul>
                ${perks.map(perk => `<li>${perk}</li>`).join('')}
            </ul>
        `;
        modalElement.showModal();

        document.querySelector(`#${closeModalId}`).addEventListener('click', () => {
            modalElement.close();
        });
    }

    document.querySelector('#non-profit-card').addEventListener('click', () => {
        updateModalContent(displayNonProfit, membershipPerks.nonProfitMember,'close-modal-non-profit');
    });

    document.querySelector('#bronze-card').addEventListener('click', () => {
        updateModalContent(displayBronze, membershipPerks.bronzeMember,'close-modal-bronze');
    });

    document.querySelector('#silver-card').addEventListener('click', () => {
        updateModalContent(displaySilver, membershipPerks.silverMember,'close-modal-silver');
    });

    document.querySelector('#gold-card').addEventListener('click', () => {
        updateModalContent(displayGold, membershipPerks.goldMember,'close-modal-gold');
    });

});
