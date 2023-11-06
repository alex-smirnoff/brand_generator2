let varLanguage = ""; 
const fullnameInCard = document.getElementById("fullnameInCard");
const fullnameInput = document.getElementById("fullnameInput"); 
const emailInCard = document.getElementById("emailInCard");
const emailInput = document.getElementById("emailInput"); 
const positionInCard = document.getElementById("positionInCard");
const positionInput = document.getElementById("positionInput"); 
const additionalInfoInCard = document.getElementById("additionalInfoInCard");
const additionalInfoInput = document.getElementById("additionalInfoInput"); 
const workPhoneInCard = document.getElementById("workPhoneInCard");
const workPhoneInput = document.getElementById("workPhoneInput"); 
const mobilePhoneInCard = document.getElementById("mobilePhoneInCard");
const mobilePhoneInput = document.getElementById("mobilePhoneInput");
const generateCardButton = document.querySelector(".generateCardButton");
const qrDiv = document.getElementById("qrDiv");
const getQrButton = document.querySelector(".getQrButton");
const warningMessage = document.querySelector(".warningMessage");
const successMessageQR = document.querySelector(".successMessageQR");
const successMessageCard = document.querySelector(".successMessageCard");
const errorMessage = document.querySelector(".errorMessage");

//--------------------------------dropdown with enterprises options
const webPageInCard = document.getElementById("webPageInCard");
const officeInCard = document.getElementById("officeInCard");
const dropdownInputLanguage = document.getElementById("dropdownInputLanguage");
const dropdownInputOrganization = document.getElementById("dropdownInputOrganization");
const dropdownArrowOrganization = document.getElementById("dropdownArrowOrganization");
const dropdownsInFormOrganization = document.getElementById("dropdownsInFormOrganization");
const dropdownListOrganization = document.getElementById("dropdownListOrganization");
const searchInDropdownsOrganization = document.getElementById("searchInDropdownsOrganization");
const companyInCard = document.getElementById("companyInCard");
document.addEventListener("DOMContentLoaded", () => {
    const pageLanguage = document.querySelector(".pageLanguage");
    dropdownInputLanguage.value = pageLanguage.textContent === "UKR" ? "Українська" : "Англійська";
    varLanguage = pageLanguage.textContent;
    if (varLanguage === "UKR") {
        loadConnections(assetsUKR, webPagesOfAssetsUKR)
    }
    if (varLanguage === "ENG") {
        loadConnections(assetsENG, webPagesOfAssetsENG)
    }
    changeMainButtonsState()

})
dropdownInFormOpenClose(dropdownInputOrganization, dropdownArrowOrganization, dropdownsInFormOrganization, "#dropdownsInFormOrganization", "#searchInDropdownsOrganization", "#dropdownInputOrganization")
searchInDropdownsOrganization.addEventListener("input", function(e) {
    dropdownInFormSearch(searchInDropdownsOrganization.value.toLowerCase(), document.getElementsByClassName("buttonsInDropdownsOrganization"))
})

//--------------------------------dropdown with office locations options
const dropdownInputOffice = document.getElementById("dropdownInputOffice");
const dropdownArrowOffice = document.getElementById("dropdownArrowOffice");
const dropdownsInFormOffice = document.getElementById("dropdownsInFormOffice");
const searchInDropdownsOffice = document.getElementById("searchInDropdownsOffice");
dropdownInFormOpenClose(dropdownInputOffice, dropdownArrowOffice, dropdownsInFormOffice, "#dropdownsInFormOffice", "#searchInDropdownsOffice", "#dropdownInputOffice")
searchInDropdownsOffice.addEventListener("input", function(e) {
    const buttonsInDropdownsOffice = document.getElementsByClassName("buttonsInDropdownsOffice");
    dropdownInFormSearch(searchInDropdownsOffice.value.toLowerCase(), buttonsInDropdownsOffice)
})

//--------------------------------dropdown with language options
const dropdownArrowLanguage = document.getElementById("dropdownArrowLanguage");
const dropdownsInFormLanguage = document.getElementById("dropdownsInFormLanguage");
const searchInDropdownsLanguage = document.getElementById("searchInDropdownsLanguage");
const buttonsInDropdownsLanguage = document.getElementsByClassName("buttonsInDropdownsLanguage");
dropdownInFormOpenClose(dropdownInputLanguage, dropdownArrowLanguage, dropdownsInFormLanguage, "#dropdownsInFormLanguage", "#searchInDropdownsLanguage", "#dropdownInputLanguage")
searchInDropdownsLanguage.addEventListener("input", function(e) {
    dropdownInFormSearch(searchInDropdownsLanguage.value.toLowerCase(), buttonsInDropdownsLanguage)
})
for (let i = 0; i < buttonsInDropdownsLanguage.length; i++) {
    buttonsInDropdownsLanguage[i].addEventListener("click", () => {
        if (dropdownInputLanguage.value === buttonsInDropdownsLanguage[i].textContent) {
        }
        else{
            let assetsArrayUKR = Object.keys(assetsUKR);
            let assetsArrayENG = Object.keys(assetsENG);
            if (buttonsInDropdownsLanguage[i].textContent === "Українська") {
                varLanguage = "UKR";
                let position = assetsArrayENG.indexOf(companyInCard.textContent);
                let position2 = dropdownInputOffice.value === "" ? -1 : assetsENG[companyInCard.textContent].indexOf(dropdownInputOffice.value);
                loadConnections(assetsUKR, webPagesOfAssetsUKR)
                const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
                for (let j = 0; j < buttonsInDropdownsOrganization.length; j++) {
                    if (buttonsInDropdownsOrganization[j].textContent === assetsArrayUKR[position]) {
                        buttonsInDropdownsOrganization[j].click()
                    }
                }
                if (position2 != -1) {
                    const buttonsInDropdownsOffice = document.getElementsByClassName("buttonsInDropdownsOffice");
                    for (let j = 0; j < buttonsInDropdownsOffice.length; j++) {
                        if (buttonsInDropdownsOffice[j].textContent === assetsUKR[companyInCard.textContent][position2]) {
                            buttonsInDropdownsOffice[j].click()
                        }
                    }
                }            
            }
            else if (buttonsInDropdownsLanguage[i].textContent === "Англійська") {
                varLanguage = "ENG";
                let position = assetsArrayUKR.indexOf(companyInCard.textContent);
                let position2 = dropdownInputOffice.value === "" ? -1 : assetsUKR[companyInCard.textContent].indexOf(dropdownInputOffice.value);
                loadConnections(assetsENG, webPagesOfAssetsENG)
                const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
                for (let j = 0; j < buttonsInDropdownsOrganization.length; j++) {
                    if (buttonsInDropdownsOrganization[j].textContent === assetsArrayENG[position]) {
                        buttonsInDropdownsOrganization[j].click()
                    }
                }
                if (position2 != -1) {
                    const buttonsInDropdownsOffice = document.getElementsByClassName("buttonsInDropdownsOffice");
                    for (let j = 0; j < buttonsInDropdownsOffice.length; j++) {
                        if (buttonsInDropdownsOffice[j].textContent === assetsENG[companyInCard.textContent][position2]) {
                            buttonsInDropdownsOffice[j].click()
                        }
                    }
                } 
            } 
        }
    })
}
dropdownInFormSelectChoice(buttonsInDropdownsLanguage, dropdownInputLanguage, null, null, null, null)

//--------------------------------other inputs
fullnameInput.addEventListener("input", function(e) {
    changeCardContent(fullnameInput, fullnameInCard, "ПІБ", "Full name")
    const paragraphHeight = fullnameInCard.getBoundingClientRect().height;
    fullnameInCard.style.position = paragraphHeight > 27 ? "relative" : "absolute";
    positionInCard.style.marginTop = paragraphHeight > 27 ? "4px" : "65px";
})
emailInput.addEventListener("input", function(e) {
    changeCardContent(emailInput, emailInCard, "Електронна пошта", "Email")
    if (emailInCard.getBoundingClientRect().height > 14) {
        changeBorderAndOutline(emailInput, "1px solid #FF3B30", true)
        showInfoMessage(errorMessage, "#FFE2E0", null, null, null)
        successMessageQR.style = null;
    }
    else{
        emailInput.style = null;
        errorMessage.style = null;
    }
    changeMainButtonsState()
})
positionInput.addEventListener("input", function(e) {
    changeCardContent(positionInput, positionInCard, "Посада", "Position")
})
additionalInfoInput.addEventListener("input", function(e) {
    changeCardContent(additionalInfoInput, additionalInfoInCard, "", "")
})
workPhoneInput.addEventListener("input", function(e) {
    changeCardContent(workPhoneInput, workPhoneInCard, "", "")
})
mobilePhoneInput.addEventListener("input", function(e) {
    changeCardContent(mobilePhoneInput, mobilePhoneInCard, "Мобільний телефон", "Mobile number")
})
emailInput.addEventListener("focusin", () => {
    inputAutoSuggestion(emailInput, "@metinvestholding.com")
})
workPhoneInput.addEventListener("focusin", () => {
    inputAutoSuggestion(workPhoneInput, "+38 0")
})
mobilePhoneInput.addEventListener("focusin", () => {
    inputAutoSuggestion(mobilePhoneInput, "+38 0")
})
fullnameInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
emailInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
mobilePhoneInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
positionInput.addEventListener("change", function(e) {
    changeMainButtonsState()
})

//--------------------------------two main buttons in generation form
generateCardButton.addEventListener("mouseenter", function() {
    if (this.disabled === true) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити візитку")
    }   
})
getQrButton.addEventListener("mouseenter", function() {
    if (this.disabled === true) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити QR-код")
    }
})
generateCardButton.addEventListener("mouseleave", function() {
    if (this.disabled === true) {
        warningMessage.style = null;
    }
})
getQrButton.addEventListener("mouseleave", function() {
    if (this.disabled === true) {
        warningMessage.style = null;
    }
})
generateCardButton.addEventListener("click", () => {
    if (this.disabled === true) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити візитку")
        setTimeout(function() {
            warningMessage.style = null;
        }, 5000);
    }  
    createQrCode()
    showInfoMessage(successMessageCard, "#E4F9E8", false, null, null)
    setTimeout(function() {
        successMessageCard.style = null;
    }, 5000);
})
getQrButton.addEventListener("click", () => {
    if (this.disabled === true) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити QR-код")
        setTimeout(function() {
            warningMessage.style = null;
        }, 5000);
    }
    createQrCode()
    showInfoMessage(successMessageQR, "#E4F9E8", false, null, null)
    const downloadLink = document.createElement("a");
    qrDiv.querySelector("img").onload = function () {
        console.log("function")
        downloadLink.href = this.src;
        downloadLink.download = "QR_Code";
        downloadLink.click()
    }
    setTimeout(function() {
        successMessageQR.style = null;
    }, 5000);
})

//--------------------------------functions used in the code above
function dropdownInFormOpenClose(triggerInput, triggerArrow, triggerDivWithOptions, triggerDivWithOptionsID, triggerSearchBoxID, triggerInputID) {
    window.addEventListener("click", function(event) {
        if (triggerArrow.style.transform === "rotate(180deg)") {
            if (!event.target.matches(triggerDivWithOptionsID)) {
                if (!event.target.matches(triggerSearchBoxID)) {
                    triggerInput.style.outline = "none";
                    triggerInput.style.border = "1px rgba(154, 154, 154, 0.752) solid";
                    triggerArrow.style.transform = "rotate(0deg)";
                    triggerDivWithOptions.style.transform = "scaleY(0)";
                }
            } 
        }
        else {
            if (event.target.matches(triggerInputID)) {
                triggerInput.style.outline = "1px solid black";
                triggerInput.style.border = "1px solid black";
                triggerArrow.style.transform = "rotate(180deg)";
                triggerDivWithOptions.style.transform = "scaleY(1)";
            }
        }
    })
}
function dropdownInFormSearch(varSearch, triggerButtonsList) {
if (varSearch.length != 0) {
    for (let i = 0; i < triggerButtonsList.length; i++) {
        if (!triggerButtonsList[i].textContent.toLowerCase().includes(varSearch)) {
            triggerButtonsList[i].style.display = "none";
        }
        else{
            triggerButtonsList[i].style.display = "block";
        }
    }
}
else{
    for (let i = 0; i < triggerButtonsList.length; i++) {
        triggerButtonsList[i].style.display = "block";
    }
}
}
function dropdownInFormSelectChoice(triggerButtonsArray, triggerInput, relatedWithCard, cardParagraph, defaultValueUKR, defaultValueENG) {
    for (let i = 0; i < triggerButtonsArray.length; i++) {
        triggerButtonsArray[i].addEventListener("click", () => {
            triggerInput.value = triggerButtonsArray[i].textContent;
            if (relatedWithCard === true) {
                cardParagraph.textContent = triggerButtonsArray[i].textContent;
                changeCardContent(triggerInput, cardParagraph, defaultValueUKR, defaultValueENG)
            }
        })
    }
}
function changeCardContent(triggerInput, cardParagraph, defaultValueUKR, defaultValueENG) {
    let defaultValue = varLanguage === "UKR" ? defaultValueUKR : defaultValueENG;
    if (triggerInput.value === "") {
        cardParagraph.textContent = defaultValue;
        cardParagraph.style.color = "#D3D3D3";
    }
    else{
        cardParagraph.textContent = triggerInput.value;
        cardParagraph.style.color = "black";
    }
}
function inputAutoSuggestion(triggerInput, varAutoSuggestion) {
    if (triggerInput.value.length === 0) {
        triggerInput.value = varAutoSuggestion;
    }
}
function loadConnections(assetsList, webPagesOfAssetsList) {
    changeCardContent(dropdownInputOrganization, companyInCard, "Підприємство", "Enterprize")
    changeCardContent(dropdownInputOffice, officeInCard, "Адреса офісу", "Office address")
    changeCardContent(dropdownInputOffice, webPageInCard, "Сайт", "Webpage")
    changeCardContent(fullnameInput, fullnameInCard, "ПІБ", "Full name")
    changeCardContent(emailInput, emailInCard, "Електронна пошта", "Email")
    changeCardContent(positionInput, positionInCard, "Посада", "Position")
    changeCardContent(additionalInfoInput, additionalInfoInCard, "", "")
    changeCardContent(workPhoneInput, workPhoneInCard, "", "")
    changeCardContent(mobilePhoneInput, mobilePhoneInCard, "Мобільний телефон", "Mobile number")
    let assetsInDropdown = "";
    Object.keys(assetsList).forEach(key => {
        assetsInDropdown += `<li><button class='buttonsInDropdownsOrganization'>${key}</button></li>`
    })
    dropdownListOrganization.innerHTML = "";
    dropdownListOrganization.innerHTML = assetsInDropdown;
    const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
    dropdownInFormSelectChoice(buttonsInDropdownsOrganization, dropdownInputOrganization, true, companyInCard, "Підприємство", "Enterprize")
    const dropdownListOffice = document.getElementById("dropdownListOffice");
    for (let i = 0; i < buttonsInDropdownsOrganization.length; i++) {
        buttonsInDropdownsOrganization[i].addEventListener("click", () => {
            const dropdownInputOffice = document.getElementById("dropdownInputOffice");
            if (!assetsList[dropdownInputOrganization.value].includes(dropdownInputOffice.value)) {
                dropdownInputOffice.value = "";
                changeCardContent(dropdownInputOffice, officeInCard, "Адреса офісу", "Office address")
            }
            let officeLocations = assetsList[buttonsInDropdownsOrganization[i].textContent];
            dropdownListOffice.innerHTML = "";
            for (let j = 0; j < officeLocations.length; j++) {
                dropdownListOffice.innerHTML += `<li><button class="buttonsInDropdownsOffice">${officeLocations[j]}</button></li>`
            }
            let buttonsInDropdownsOffice = document.getElementsByClassName("buttonsInDropdownsOffice");
            dropdownInFormSelectChoice(buttonsInDropdownsOffice, dropdownInputOffice, null, null, null, null)
            createQrCode()
            changeMainButtonsState()
            const paragraphHeight = companyInCard.getBoundingClientRect().height;
            companyInCard.style.marginTop = paragraphHeight > 14 ? "129px" : "142.5px";
            workPhoneInCard.style.marginTop = paragraphHeight > 14 ? "116px" : "129px";
            for (let j = 0; j < buttonsInDropdownsOffice.length; j++) {
                buttonsInDropdownsOffice[j].addEventListener("click", () => {
                    let officeArray = buttonsInDropdownsOffice[j].textContent.split(/,\s?(.*)/s);
                    officeInCard.innerHTML = officeArray[0] + "," + "<br>" + officeArray[1];
                    officeInCard.style.color = "black";
                    changeMainButtonsState()
                })
            }
        })
    }
    for (let i = 0; i < buttonsInDropdownsOrganization.length; i++) {
        buttonsInDropdownsOrganization[i].addEventListener("click", () => {
            webPageInCard.textContent = webPagesOfAssetsList[buttonsInDropdownsOrganization[i].textContent];
            webPageInCard.style.color = "black";
        })
    }
}
function createQrCode() {
    if (fullnameInput.value.length + emailInput.value.length + dropdownInputOrganization.value.length + mobilePhoneInput.value.length === 0) {
        document.querySelector(".cardBack").innerHTML = "<img class='qrCodeExample' src='img/qrCodeExample.png' alt='Приклад QR-коду'>";
    }
    else{
        qrDiv.innerHTML = "";
        let qrString = "BEGIN:VCARD" + "\n" + "VERSION:2.1" + "\n" + "N;CHARSET=UTF-8:" + fullnameInput.value + "\n" + "TEL:" + mobilePhoneInput.value + "\n" + "EMAIL:" + emailInput.value + "\n" + "NOTE;CHARSET=UTF-8:" + dropdownInputOrganization.value +"\n"+"END:VCARD";
        new QRCode(document.getElementById("qrDiv"), qrString);
        qrDiv.querySelector("img").onload = function () {
            document.querySelector(".cardBack").innerHTML = "<img src='" + this.src + "' alt='QR-код' width='112' height='112' style='position: relative;'>";
        }
    }
}
function changeMainButtonsState() {
    if (fullnameInput.value.length === 0 || emailInput.value.length === 0 || dropdownInputOrganization.value.length === 0 || positionInput.value.length === 0 || mobilePhoneInput.value.length === 0 || dropdownInputOffice.value.length === 0 || emailInCard.getBoundingClientRect().height > 14) {
        generateCardButton.disabled = true;
        generateCardButton.style.backgroundColor = "#818A8F";
    }
    else{
        generateCardButton.disabled = false;
        generateCardButton.style.backgroundColor = "#ED1C24";
    }
    if (fullnameInput.value.length + emailInput.value.length + dropdownInputOrganization.value.length + mobilePhoneInput.value.length === 0 || emailInCard.getBoundingClientRect().height > 14) {
        getQrButton.disabled = true;
        getQrButton.style.color = "#818A8F";
        getQrButton.style.border = "1px #818A8F solid";
    }
    else{
        getQrButton.disabled = false;
        getQrButton.style.color = "#ED1C24";
        getQrButton.style.border = "1px #ED1C24 solid";
    }
}
function showInfoMessage (messageDiv, varBackgroundColor, textNeeded, textParagraph, varText) {
    messageDiv.style.position = "relative";
    messageDiv.style.marginBottom = "2px";
    messageDiv.style.transform = "translateY(0px)";
    messageDiv.style.backgroundColor = varBackgroundColor;
    messageDiv.style.opacity = "1";
    if (textNeeded === true) {
        textParagraph.textContent = varText;
    }
}
function changeBorderAndOutline (targetInput, varBorderAndOutline, outlineNeeded) {
    targetInput.style.border = varBorderAndOutline;
    if (outlineNeeded === true) {
        targetInput.style.outline = varBorderAndOutline;
    } 
}