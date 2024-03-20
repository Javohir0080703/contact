const inputs = document.getElementsByClassName("getInputValue");
const userDatas = document.querySelector(".userDatas");
const ProfileBtn = document.querySelector(".profile-form-button");
const imgInput = document.querySelector("#myfile");
const data = [];

function getRegister() {
  const userData = {
    name: inputs[0].value,
    age: inputs[1].value,
    phoneNumber: inputs[2].value,
    email: inputs[3].value,
    about: inputs[4].value,
  };
  data.push(userData);

  // Map qilish uchun nomlangan funktsiya
  const mappedData = mapData(data);

  // Ma'lumotlarni HTML-ga chiqaring
  displayData(mappedData);
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
    // phoneNumberElement.classList.add("")
    container.appendChild(div);
  });
  // (inputs[0].value = ""),
  //   (inputs[1].value = ""),
  //   (inputs[2].value = ""),
  //   (inputs[3].value = ""),
  //   (inputs[4].value = "");
}

// regex
