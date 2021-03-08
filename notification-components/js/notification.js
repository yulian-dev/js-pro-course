export async function getData() {
    const disabledNotification = localStorage.getItem('disabledNotification') || 'false';
    if (disabledNotification === 'false') {
        const currentTip = localStorage.getItem('currentTip') || 1;
        const response = await fetch('data.json');
        const tips = await response.json();
        const {title, phrase} = tips.find(tip => tip.id === parseInt(currentTip));
        document.body.innerHTML = `<div class="notificationPage">
                                        <div class="notification">
                                            <div class="notificationCard">
                                                <div class="notificationText">
                                                    <h3 id="title">${title}</h3>
                                                    <p id="phrase">${phrase}</p>
                                                </div>
                                                <div class="notificationCloseButton">
                                                    <i id="closeButton" class="fas fa-times" tabindex="0"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="container">
                                                    <ul class="pagination">
                                                        <li><a id="tipPrevious" href="#">Previous</a></li>
                                                        ${tips.map(tip => `<li value="${tip.id}" class="tipNumber">
                                                            <a href="#">${tip.id}</a></li>`).join('')}
                                                        <li><a id="tipNext" href="#">Next</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="container">
                                                <div class="disableTips">
                                                    <label>
                                                        <input id="tipsCheckbox" type="checkbox" name="option">
                                                    </label>
                                                    <span>Disable Tips</span>
                                                </div>
                                            </div>
                                        </div>
                                     </div>`

        addPagination();
        setActiveTipButton(currentTip);
        addCloseButtonListener();
        addTipsCheckboxListener();
        addNextTipButtonListener(parseInt(currentTip), tips.length);
        addPreviousTipButtonListener(parseInt(currentTip), tips.length);
    }
}

const addCloseButtonListener = () => {
    const closeButton = document.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
        document.querySelector('.notificationPage').remove();
    })
}

const addTipsCheckboxListener = () => {
    const disabledNotificationCheckbox = document.querySelector('#tipsCheckbox');
    disabledNotificationCheckbox.addEventListener('change', function () {
        this.checked ? localStorage.setItem('disabledNotification', 'true')
            : localStorage.setItem('disabledNotification', 'false');
    })
}

const addPagination = () => {
    const pagination = document.querySelectorAll('li.tipNumber');
    pagination.forEach((paginationItem) => {
        paginationItem.addEventListener('click', (event) => {
            localStorage.setItem('currentTip', event.currentTarget.value);
            getData();
        })
    })
}

const setActiveTipButton = (currentTip) => {
    const classActive = document.querySelectorAll('.active');
    classActive.forEach((paginationItem) => {
        paginationItem.classList.remove('active');
    })
    document.querySelector(`[value="${currentTip}"]`).classList.add('active')
}

const addNextTipButtonListener = (currentTip, length) => {
    const tipNextButton = document.querySelector('#tipNext');
    tipNextButton.addEventListener('click', () => {
        length === currentTip ? localStorage.setItem('currentTip', '1')
            : localStorage.setItem('currentTip', currentTip + 1);
        getData();
    })
}

const addPreviousTipButtonListener = (currentTip, length) => {
    const tipPreviousButton = document.querySelector('#tipPrevious');
    tipPreviousButton.addEventListener('click', () => {
        currentTip === 1 ? localStorage.setItem('currentTip', length)
            : localStorage.setItem('currentTip', currentTip - 1);
        getData();
    })
}