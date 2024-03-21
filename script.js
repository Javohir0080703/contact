const inputs = document.getElementsByClassName("getInputValue");
const userDatas = document.querySelector(".userDatas");
const ProfileBtn = document.querySelector(".profile-form-button");
const imgInput = document.querySelector("#myfile");
const chosenBtn = document.querySelectorAll("#rightDivBtnid");
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
  });

  // inputs[0].value = "";
  // inputs[1].value = "";
  // inputs[2].value = "";
  // inputs[3].value = "";
  // inputs[4].value = "";
}

chosenBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // const rightDivBtnImg = btn.querySelector("img");
    // alert(1)
    console.log(1);
    // if (rightDivBtnImg.src.includes("star.svg")) {
    //   rightDivBtnImg.src = "./img/star2.svg";
    // } else {
    //   rightDivBtnImg.src = "./img/star.svg";
    // }
  });
});

// regex
