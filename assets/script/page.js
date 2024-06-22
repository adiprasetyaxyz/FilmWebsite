const makeBtnPage = () => {
    const pageBtn = document.getElementById("page-button");

    for (let i = 1; i <= 9; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = i.toString();
        btn.classList.add("buttonPage");
        btn.value = i;
        pageBtn.appendChild(btn);
    }
};

export default makeBtnPage;
