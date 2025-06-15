document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    const addParticipantButton = document.querySelector('#add-participant');
    const participantsFieldset = document.querySelector('#participants');
    const form = document.querySelector('#registration-form');
    const summaryElement = document.querySelector('#summary');

    function participantTemplate(count) {
        return `
            <section class="participant${count}">
                <h3>Participant ${count}</h3>
                <label for="name${count}">Name:</label>
                <input type="text" id="name${count}" name="name${count}">
                <label for="age${count}">Age:</label>
                <input type="number" id="age${count}" name="age${count}">
                <label for="fee${count}">Fee:</label>
                <input type="number" id="fee${count}" name="fee${count}">
            </section>
        `;
    }

    addParticipantButton.addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, feeInput) => total + Number(feeInput.value || 0), 0);
    }

    function successTemplate(info) {
        return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.`;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const adultName = document.querySelector('#adult-name').value;
        const fees = totalFees();
        const participants = document.querySelectorAll("[id^=name]").length;
        form.style.display = 'none';
        summaryElement.style.display = 'block';
        summaryElement.innerHTML = successTemplate({ name: adultName, participants, fees });
    });
});