let contentContainer = document.querySelector(".content");
let paths = [
  { src: "../Pictures/avi.png", name: "my-file.avi", size: "12.5MB" },
  { src: "../Pictures/dll.png", name: "my-file.dll", size: "2.2MB" },
  { src: "../Pictures/eps.png", name: "my-file.eps", size: "2.7MB" },
  { src: "../Pictures/pdf.png", name: "my-file.pdf", size: "5.5MB" },
  { src: "../Pictures/psd.png", name: "my-file.psd", size: "15.1MB" },
];
let HTMLTee = [];
for (let i = 0; i < 24; i++) {
  let randomPath = paths[Math.floor(Math.random() * paths.length)];
  let htmlText = `
          <div class="card">
            <div class="icon-container">
              <img src="../Pictures/downloads.png" alt="" class="icon" />
            </div>
            <div class="top">
              <img src="${randomPath.src}" alt="" />
              <p class="name">${randomPath.name}</p>
            </div>
            <div class="bottom">
              <p>Elzero</p>
              <hr />
              <div class="time">
                <span>20/06/2020</span>
                <span>${randomPath.size}</span>
              </div>
            </div>
          </div>
    `;
    
    HTMLTee.push(htmlText)
}

contentContainer.innerHTML = HTMLTee.join("")


