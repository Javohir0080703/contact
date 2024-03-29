const inputs = document.getElementsByClassName("getInputValue");
const userDatas = document.querySelector(".userDatas");
const ProfileBtn = document.querySelector(".profile-form-button");
const imgInput = document.querySelector("#myfile");
const data = [];

function getRegister() {
  const userData = {
    name: capitalizeFirstLetter(inputs[0].value),
    age: capitalizeFirstLetter(inputs[1].value),
    phoneNumber: inputs[2].value,
    email: inputs[3].value,
    about: inputs[4].value,
  };

  const nameRegex = /^[a-zA-Z]{4,56}$/;
  const ageRegex = /^[a-zA-Z]{4,56}$/;
  const phoneNumberRegex = /^\+?\d{8,15}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = true;

  if (!nameRegex.test(inputs[0].value)) {
    alert("Iltimos, ismingizni to'g'ri kiriting.");
    isValid = false;
  }
  if (!ageRegex.test(inputs[1].value)) {
    alert("Iltimos, yoshingizni to'g'ri kiriting.");
    isValid = false;
  }
  if (!phoneNumberRegex.test(inputs[2].value)) {
    alert("Iltimos, telefon raqamingizni to'g'ri kiriting.");
    isValid = false;
  }
  if (!emailRegex.test(inputs[3].value)) {
    alert("Iltimos, elektron pochta manzilingizni to'g'ri kiriting.");
    isValid = false;
  }

  if (isValid) {
    data.push(userData);
  }
  const mappedData = mapData(data);

  displayData(mappedData);
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function mapData(data) {
  // data ni map qilish uchun kodni yozing
  const mappedData = data.map((user) => {
    // Har bir foydalanuvchini ma'lumotlarini olish uchun kerakli joylardan foydalaning
    const name = user.name;
    const age = user.age;
    const phoneNumber = user.phoneNumber;
    // const email = user.email;
    // const about = user.about;

    // Ma'lumotlarni map qilingan formatda qaytarish
    return {
      name,
      age,
      phoneNumber,
      //   email,
      //   about,
    };
  });

  return mappedData;
}

function displayData(mappedData) {
  console.log(mappedData);
  const container = document.getElementById("data-container");
  container.innerHTML = "";

  // mappedData ni name bo'yicha saralash
  mappedData.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  mappedData.forEach((user) => {
    const li = document.createElement("li");
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("leftDiv");
    const leftDivleft = document.createElement("div");
    const leftDivright = document.createElement("div");
    const leftDivrightUserName = document.createElement("div");
    leftDivrightUserName.classList.add("leftDivrightUserName");
    const rightDiv = document.createElement("div");
    const rightDivBtn = document.createElement("button");
    const rightDivBtnDropDovw = document.createElement("button");
    const rightDivBtnDropDovwImg = document.createElement("img");
    rightDivBtnDropDovwImg.src = "./img/dotted.svg";
    rightDivBtnDropDovw.classList.add("rightDivBtnDropDovw");
    const rightDivBtnImg = document.createElement("img");
    rightDivBtnImg.classList.add("rightDivBtnImg");
    rightDivBtn.classList.add("rightDivBtn");
    rightDivBtn.id = "rightDivBtnid";
    rightDivBtnImg.src = "./img/star.svg";
    const leftDivBtn = document.createElement("button");
    leftDivBtn.classList.add("leftDivBtn");
    const leftDivBtnImg = document.createElement("img");
    leftDivBtnImg.classList.add("leftDivBtnImg");
    leftDivBtnImg.src = "./img/contactDefultImg.png";

    const nameElement = document.createElement("p");
    nameElement.innerText = ` ${user.name}`;
    nameElement.classList.add("contact-user");
    const ageElement = document.createElement("p");
    ageElement.innerText = ` ${user.age}`;
    ageElement.classList.add("contact-user");
    const phoneNumberElement = document.createElement("p");
    phoneNumberElement.innerText = `${user.phoneNumber}`;
    phoneNumberElement.classList.add("phoneNumberElement");
    leftDivright.appendChild(leftDivrightUserName);
    leftDivrightUserName.appendChild(nameElement);
    leftDivrightUserName.appendChild(ageElement);
    leftDivright.appendChild(phoneNumberElement);
    leftDivBtn.appendChild(leftDivBtnImg);
    leftDiv.appendChild(leftDivBtn);
    leftDiv.appendChild(leftDivright);
    rightDivBtn.appendChild(rightDivBtnImg);
    rightDivBtnDropDovw.appendChild(rightDivBtnDropDovwImg);
    rightDiv.appendChild(rightDivBtn);
    rightDiv.appendChild(rightDivBtnDropDovw);
    li.appendChild(leftDiv);
    li.appendChild(rightDiv);
    li.classList.add("contact-li");
    console.log(rightDivBtn.id);
    container.appendChild(li);
    const chosenBtn = document.querySelectorAll(".rightDivBtn");
    function handleChosenBtnClick(event) {
      const rightDivBtnImg = event.currentTarget.querySelector("img");
      console.log(1);
      if (rightDivBtnImg.src.includes("star.svg")) {
        rightDivBtnImg.src = "./img/star2.svg";
      } else {
        rightDivBtnImg.src = "./img/star.svg";
      }
    }

    chosenBtn.forEach((btn) => {
      btn.addEventListener("click", handleChosenBtnClick);
    });
  });

  // console.log(chosenBtn);

  // inputs[0].value = "";
  // inputs[1].value = "";
  // inputs[2].value = "";
  // inputs[3].value = "";
  // inputs[4].value = "";
}

// regex
// js-object to srting
// string to object in js





// buttons 
const elDarkModeBtn = document.querySelector('#js-dark-mode-btn');
const elContactAddBtn = document.querySelector('.js-contact-adder-btn');
const elAddContactBtn = document.querySelector('.add-contact-btn');
// contact form 
let elContactForm = document.querySelector('.contact-form');
const elContactForm2 = document.querySelector('.contact-form2');
// contact list 
const elContactList = document.querySelector('.contact-list');
// img 
const elContactProfileParent = document.querySelector('.profile-parent');
const elContactProfileImage = document.querySelector('.profile-img');
// inputs and textarea
const elFileInput = document.querySelector('.file-input');
const elNameInput = document.querySelector('.name-input');
const elPhoneNumberInput = document.querySelector('.phone-number-input');
const elRealtionshipInput = document.querySelector('.relationship-input');
const elEmailInput = document.querySelector('.email-input');
const elContactFormTextarea = document.querySelector('.additional-information');
// parents 
const elFormParent = document.querySelector('.form-parent');
const elListParent = document.querySelector('.list-parent');
// icons
const elContactAddIcon = document.querySelector('.contact-add-icon');
const elListParentcon = document.querySelector('.contact-list-icon');
// dark filter 
const elListDarkFilter = document.querySelector('.list-dark-filter');
// dark filter 
const elDarkFilter = document.querySelector('.dark-filter');

// dark mode run 
elDarkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    elDarkFilter.classList.toggle('dark-filter-run');
});

// file input 
elFileInput.addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
        // elContactProfileImage.setAttribute('src', `${reader.result}`);
    });
    reader.readAsDataURL(e.target.files[0]);
});

// add contact information
elContactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    elContactList.innerHTML += `
        <li class="contact-list-child">
            <div class="list-child-profile-wrapper">
                <img src="${elContactProfileImage.getAttribute('src')}" alt="profile image">
                <div>
                    <h3 class="list-child-title">${elNameInput.value}</h3>
                    <a href="tel:+${elPhoneNumberInput.value}" class="phone-number">+${elPhoneNumberInput.value}</a>
                </div>
            </div>
            <div class="edit-btn-wrapper">
                <div>
                    <button class="edit-btn">
                        <svg class="edit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="currentColor" />
                        </svg>
                    </button>
                    <button class="delete-btn">
                        <img src="./images/delete-icon.svg" alt="delete icon">
                    </button>
                </div>
                <button class="contact-info-btn">
                    <span>Ba'tafsil</span>
                    <svg class="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor" />
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </li>
    `
    // profile image 
    elContactProfileParent.setAttribute('style', 'background-image:url(../images/profile-img.jpg);');
    elContactProfileImage.setAttribute('src', './images/profile-img.jpg');
    // inputs value 
    elNameInput.value = '';
    elPhoneNumberInput.value = '';
    elRealtionshipInput.value = '';
    elEmailInput.value = '';
    elContactFormTextarea.value = '';
    // delete btn run 
    const elDeleteBtn = document.querySelectorAll('.delete-btn');
    elDeleteBtn.forEach(el => {
        el.addEventListener('click', () => {
            el.parentElement.parentElement.parentElement.remove();
        });
    });
    // selectors
    const elEditBtn = document.querySelectorAll('.edit-btn');
    const elConfirmBtn = document.querySelector('.confirm-btn');
    const elCancleBtn = document.querySelector('.cancel-btn');
    const elFormBtnsWrapper = document.querySelector('.form-buttons-wrapper');
    // edit btn run 
    elEditBtn.forEach(el => {
        el.addEventListener('click', () => {
            // confirm and cancel buttons
            elAddContactBtn.setAttribute('type', 'button')
            elAddContactBtn.classList.add('hidden');
            elFormBtnsWrapper.classList.remove('hidden');
            // 
            elContactProfileParent.setAttribute('style', `background-image:url( ${el.parentElement.parentElement.previousElementSibling.childNodes[1].getAttribute('src')}`);
            elContactProfileImage.setAttribute('src', `${el.parentElement.parentElement.previousElementSibling.childNodes[1].getAttribute('src')}`);
            elNameInput.value = el.parentElement.parentElement.previousElementSibling.childNodes[3].childNodes[1].textContent;
            elPhoneNumberInput.value = el.parentElement.parentElement.previousElementSibling.childNodes[3].childNodes[3].textContent;
            // confirm 
            elConfirmBtn.addEventListener('click', function () {
                const bg = el.parentElement.parentElement.previousElementSibling;
                bg.childNodes[1].setAttribute('src', `${elContactProfileImage.getAttribute('src')}`);
                el.parentElement.parentElement.previousElementSibling.childNodes[3].childNodes[1].textContent = `${elNameInput.value}`;
                el.parentElement.parentElement.previousElementSibling.childNodes[3].childNodes[3].textContent = `${elPhoneNumberInput.value}`;
                // 
                elAddContactBtn.classList.remove('hidden');
                elAddContactBtn.setAttribute('type', 'submit')
                elFormBtnsWrapper.classList.add('hidden');
                // profile image 
                elContactProfileParent.setAttribute('style', 'background-image:url(../images/profile-img.jpg);');
                elContactProfileImage.setAttribute('src', './images/profile-img.jpg');
                // inputs value 
                elNameInput.value = '';
                elPhoneNumberInput.value = '';
                elRealtionshipInput.value = '';
                elEmailInput.value = '';
                elContactFormTextarea.value = '';
            });
            elCancleBtn.addEventListener('click',function () {
                elAddContactBtn.classList.remove('hidden');
                elAddContactBtn.setAttribute('type', 'submit')
                elFormBtnsWrapper.classList.add('hidden');
                // profile image 
                elContactProfileParent.setAttribute('style', 'background-image:url(../images/profile-img.jpg);');
                elContactProfileImage.setAttribute('src', './images/profile-img.jpg');
                // inputs value 
                elNameInput.value = '';
                elPhoneNumberInput.value = '';
                elRealtionshipInput.value = '';
                elEmailInput.value = '';
                elContactFormTextarea.value = '';
            });
        });
    });
    const elInfoBtn = document.querySelectorAll('.contact-info-btn');
});
elContactAddBtn.addEventListener('click', () => {
    // list and form 
    elFormParent.classList.toggle('form-parent-run');
    elListParent.classList.toggle('list-parent-run');

    // dark filter 
    elListParent.classList.toggle('hidden-and-dark');

    // icons 
    elContactAddIcon.classList.toggle('hidden');
    elListParentcon.classList.toggle('hidden');
});