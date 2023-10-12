function makeBtnPage (){const pageBtn = document.getElementById("page-button");

for (let i=1; i <=   9; i++){
    const btn = document.createElement('button')
    btn.innerHTML = i.toString(); 
    btn.classList.add("buttonPage"); // Gunakan classList.add untuk menambahkan class
    btn.value = i; // Atur nilai tombol sesuai nomor halama
    pageBtn.appendChild(btn);
}
}

export default makeBtnPage;