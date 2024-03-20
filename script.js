const inputs = document.getElementsByClassName("getInputValue");
const userDatas = document.querySelector(".userDatas");
const ProfileBtn = document.querySelector(".profile-form-button");
const imgInput = document.querySelector("#myfile");
const data = [];

function getRegister() {
  const nameRegex = /^[a-zA-Z]{4,56}$/;
  const ageRegex = /^[a-zA-Z]{4,56}$/;
  const phoneNumberRegex = /^[0-9+]+$/;
  const emailRegex = /^[a-z]$/;
  const aboutRegex = /^[a-zA-Z]$/;

  if (
    nameRegex.test(inputs[0].value) &&
    ageRegex.test(inputs[1].value) &&
    phoneNumberRegex.test(inputs[2].value) &&
    emailRegex.test(inputs[3].value) &&
    aboutRegex.test(inputs[4].value)
  ) {
    const userData = {
      name: capitalizeFirstLetter(inputs[0].value),
      age: capitalizeFirstLetter(inputs[1].value),
      phoneNumber: inputs[2].value,
      email: inputs[3].value,
      about: inputs[4].value,
    };
    data.push(userData);
  } else {
    alert(1);
  }

  // Map qilish uchun nomlangan funktsiya
  const mappedData = mapData(data);

  // Ma'lumotlarni HTML-ga chiqaring
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
    const div = document.createElement("div");

    const nameElement = document.createElement("p");
    nameElement.innerText = ` ${user.name}`;
    div.appendChild(nameElement);

    const ageElement = document.createElement("p");
    ageElement.innerText = ` ${user.age}`;
    div.appendChild(ageElement);

    const phoneNumberElement = document.createElement("p");
    phoneNumberElement.innerText = `${user.phoneNumber}`;
    div.appendChild(phoneNumberElement);

    container.appendChild(div);
  });

  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
  inputs[4].value = "";
}

// regex
