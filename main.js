const countries = [
    { answer: "Afghanistan", code: "AF" },
    { answer: "Åland Islands", code: "AX" },
    { answer: "Albania", code: "AL" },
    { answer: "Algeria", code: "DZ" },
    { answer: "American Samoa", code: "AS" },
    { answer: "Andorra", code: "AD" },
    { answer: "Angola", code: "AO" },
    { answer: "Anguilla", code: "AI" },
    { answer: "Antarctica", code: "AQ" },
    { answer: "Antigua and Barbuda", code: "AG" },
    { answer: "Argentina", code: "AR" },
    { answer: "Armenia", code: "AM" },
    { answer: "Aruba", code: "AW" },
    { answer: "Australia", code: "AU" },
    { answer: "Austria", code: "AT" },
    { answer: "Azerbaijan", code: "AZ" },
    { answer: "Bahrain", code: "BH" },
    { answer: "Bahamas", code: "BS" },
    { answer: "Bangladesh", code: "BD" },
    { answer: "Barbados", code: "BB" },
    { answer: "Belarus", code: "BY" },
    { answer: "Belgium", code: "BE" },
    { answer: "Belize", code: "BZ" },
    { answer: "Benin", code: "BJ" },
    { answer: "Bermuda", code: "BM" },
    { answer: "Bhutan", code: "BT" },
    { answer: "Bolivia, Plurinational State of", code: "BO" },
    { answer: "Bonaire, Sint Eustatius and Saba", code: "BQ" },
    { answer: "Bosnia and Herzegovina", code: "BA" },
    { answer: "Botswana", code: "BW" },
    { answer: "Bouvet Island", code: "BV" },
    { answer: "Brazil", code: "BR" },
    { answer: "British Indian Ocean Territory", code: "IO" },
    { answer: "Brunei Darussalam", code: "BN" },
    { answer: "Bulgaria", code: "BG" },
    { answer: "Burkina Faso", code: "BF" },
    { answer: "Burundi", code: "BI" },
    { answer: "Cambodia", code: "KH" },
    { answer: "Cameroon", code: "CM" },
    { answer: "Canada", code: "CA" },
    { answer: "Cape Verde", code: "CV" },
    { answer: "Cayman Islands", code: "KY" },
    { answer: "Central African Republic", code: "CF" },
    { answer: "Chad", code: "TD" },
    { answer: "Chile", code: "CL" },
    { answer: "China", code: "CN" },
    { answer: "Christmas Island", code: "CX" },
    { answer: "Cocos (Keeling) Islands", code: "CC" },
    { answer: "Colombia", code: "CO" },
    { answer: "Comoros", code: "KM" },
    { answer: "Congo", code: "CG" },
    { answer: "Congo, the Democratic Republic of the", code: "CD" },
    { answer: "Cook Islands", code: "CK" },
    { answer: "Costa Rica", code: "CR" },
    { answer: "Côte d'Ivoire", code: "CI" },
    { answer: "Croatia", code: "HR" },
    { answer: "Cuba", code: "CU" },
    { answer: "Curaçao", code: "CW" },
    { answer: "Cyprus", code: "CY" },
    { answer: "Czech Republic", code: "CZ" },
    { answer: "Denmark", code: "DK" },
    { answer: "Djibouti", code: "DJ" },
    { answer: "Dominica", code: "DM" },
    { answer: "Dominican Republic", code: "DO" },
    { answer: "Ecuador", code: "EC" },
    { answer: "Egypt", code: "EG" },
    { answer: "El Salvador", code: "SV" },
    { answer: "Equatorial Guinea", code: "GQ" },
    { answer: "Eritrea", code: "ER" },
    { answer: "Estonia", code: "EE" },
    { answer: "Ethiopia", code: "ET" },
    { answer: "Falkland Islands (Malvinas)", code: "FK" },
    { answer: "Faroe Islands", code: "FO" },
    { answer: "Fiji", code: "FJ" },
    { answer: "Finland", code: "FI" },
    { answer: "France", code: "FR" },
    { answer: "French Guiana", code: "GF" },
    { answer: "French Polynesia", code: "PF" },
    { answer: "French Southern Territories", code: "TF" },
    { answer: "Gabon", code: "GA" },
    { answer: "Gambia", code: "GM" },
    { answer: "Georgia", code: "GE" },
    { answer: "Germany", code: "DE" },
    { answer: "Ghana", code: "GH" },
    { answer: "Gibraltar", code: "GI" },
    { answer: "Greece", code: "GR" },
    { answer: "Greenland", code: "GL" },
    { answer: "Grenada", code: "GD" },
    { answer: "Guadeloupe", code: "GP" },
    { answer: "Guam", code: "GU" },
    { answer: "Guatemala", code: "GT" },
    { answer: "Guernsey", code: "GG" },
    { answer: "Guinea", code: "GN" },
    { answer: "Guinea-Bissau", code: "GW" },
    { answer: "Guyana", code: "GY" },
    { answer: "Haiti", code: "HT" },
    { answer: "Heard Island and McDonald Islands", code: "HM" },
    { answer: "Holy See (Vatican City State)", code: "VA" },
    { answer: "Honduras", code: "HN" },
    { answer: "Hong Kong", code: "HK" },
    { answer: "Hungary", code: "HU" },
    { answer: "Iceland", code: "IS" },
    { answer: "India", code: "IN" },
    { answer: "Indonesia", code: "ID" },
    { answer: "Iran, Islamic Republic of", code: "IR" },
    { answer: "Iraq", code: "IQ" },
    { answer: "Ireland", code: "IE" },
    { answer: "Isle of Man", code: "IM" },
    { answer: "Israel", code: "IL" },
    { answer: "Italy", code: "IT" },
    { answer: "Jamaica", code: "JM" },
    { answer: "Japan", code: "JP" },
    { answer: "Jersey", code: "JE" },
    { answer: "Jordan", code: "JO" },
    { answer: "Kazakhstan", code: "KZ" },
    { answer: "Kenya", code: "KE" },
    { answer: "Kiribati", code: "KI" },
    { answer: "Korea, Democratic People's Republic of", code: "KP" },
    { answer: "Korea, Republic of", code: "KR" },
    { answer: "Kuwait", code: "KW" },
    { answer: "Kyrgyzstan", code: "KG" },
    { answer: "Lao People's Democratic Republic", code: "LA" },
    { answer: "Latvia", code: "LV" },
    { answer: "Lebanon", code: "LB" },
    { answer: "Lesotho", code: "LS" },
    { answer: "Liberia", code: "LR" },
    { answer: "Libya", code: "LY" },
    { answer: "Liechtenstein", code: "LI" },
    { answer: "Lithuania", code: "LT" },
    { answer: "Luxembourg", code: "LU" },
    { answer: "Macao", code: "MO" },
    { answer: "Macedonia, the Former Yugoslav Republic of", code: "MK" },
    { answer: "Madagascar", code: "MG" },
    { answer: "Malawi", code: "MW" },
    { answer: "Malaysia", code: "MY" },
    { answer: "Maldives", code: "MV" },
    { answer: "Mali", code: "ML" },
    { answer: "Malta", code: "MT" },
    { answer: "Marshall Islands", code: "MH" },
    { answer: "Martinique", code: "MQ" },
    { answer: "Mauritania", code: "MR" },
    { answer: "Mauritius", code: "MU" },
    { answer: "Mayotte", code: "YT" },
    { answer: "Mexico", code: "MX" },
    { answer: "Micronesia, Federated States of", code: "FM" },
    { answer: "Moldova, Republic of", code: "MD" },
    { answer: "Monaco", code: "MC" },
    { answer: "Mongolia", code: "MN" },
    { answer: "Montenegro", code: "ME" },
    { answer: "Montserrat", code: "MS" },
    { answer: "Morocco", code: "MA" },
    { answer: "Mozambique", code: "MZ" },
    { answer: "Myanmar", code: "MM" },
    { answer: "Namibia", code: "NA" },
    { answer: "Nauru", code: "NR" },
    { answer: "Nepal", code: "NP" },
    { answer: "Netherlands", code: "NL" },
    { answer: "New Caledonia", code: "NC" },
    { answer: "New Zealand", code: "NZ" },
    { answer: "Nicaragua", code: "NI" },
    { answer: "Niger", code: "NE" },
    { answer: "Nigeria", code: "NG" },
    { answer: "Niue", code: "NU" },
    { answer: "Norfolk Island", code: "NF" },
    { answer: "Northern Mariana Islands", code: "MP" },
    { answer: "Norway", code: "NO" },
    { answer: "Oman", code: "OM" },
    { answer: "Pakistan", code: "PK" },
    { answer: "Palau", code: "PW" },
    { answer: "Palestine", code: "PS" },
    { answer: "Panama", code: "PA" },
    { answer: "Papua New Guinea", code: "PG" },
    { answer: "Paraguay", code: "PY" },
    { answer: "Peru", code: "PE" },
    { answer: "Philippines", code: "PH" },
    { answer: "Pitcairn", code: "PN" },
    { answer: "Poland", code: "PL" },
    { answer: "Portugal", code: "PT" },
    { answer: "Puerto Rico", code: "PR" },
    { answer: "Qatar", code: "QA" },
    { answer: "Réunion", code: "RE" },
    { answer: "Romania", code: "RO" },
    { answer: "Russian Federation", code: "RU" },
    { answer: "Rwanda", code: "RW" },
    { answer: "Saint Barthélemy", code: "BL" },
    { answer: "Saint Helena, Ascension and Tristan da Cunha", code: "SH" },
    { answer: "Saint Kitts and Nevis", code: "KN" },
    { answer: "Saint Lucia", code: "LC" },
    { answer: "Saint Martin (French part)", code: "MF" },
    { answer: "Saint Pierre and Miquelon", code: "PM" },
    { answer: "Saint Vincent and the Grenadines", code: "VC" },
    { answer: "Samoa", code: "WS" },
    { answer: "San Marino", code: "SM" },
    { answer: "Sao Tome and Principe", code: "ST" },
    { answer: "Saudi Arabia", code: "SA" },
    { answer: "Senegal", code: "SN" },
    { answer: "Serbia", code: "RS" },
    { answer: "Seychelles", code: "SC" },
    { answer: "Sierra Leone", code: "SL" },
    { answer: "Singapore", code: "SG" },
    { answer: "Sint Maarten (Dutch part)", code: "SX" },
    { answer: "Slovakia", code: "SK" },
    { answer: "Slovenia", code: "SI" },
    { answer: "Solomon Islands", code: "SB" },
    { answer: "Somalia", code: "SO" },
    { answer: "South Africa", code: "ZA" },
    { answer: "South Georgia and the South Sandwich Islands", code: "GS" },
    { answer: "South Sudan", code: "SS" },
    { answer: "Spain", code: "ES" },
    { answer: "Sri Lanka", code: "LK" },
    { answer: "Sudan", code: "SD" },
    { answer: "Suriname", code: "SR" },
    { answer: "Svalbard and Jan Mayen", code: "SJ" },
    { answer: "Swaziland", code: "SZ" },
    { answer: "Sweden", code: "SE" },
    { answer: "Switzerland", code: "CH" },
    { answer: "Syrian Arab Republic", code: "SY" },
    { answer: "Taiwan, Province of China", code: "TW" },
    { answer: "Tajikistan", code: "TJ" },
    { answer: "Tanzania, United Republic of", code: "TZ" },
    { answer: "Thailand", code: "TH" },
    { answer: "Timor-Leste", code: "TL" },
    { answer: "Togo", code: "TG" },
    { answer: "Tokelau", code: "TK" },
    { answer: "Tonga", code: "TO" },
    { answer: "Trinidad and Tobago", code: "TT" },
    { answer: "Tunisia", code: "TN" },
    { answer: "Turkey", code: "TR" },
    { answer: "Turkmenistan", code: "TM" },
    { answer: "Turks and Caicos Islands", code: "TC" },
    { answer: "Tuvalu", code: "TV" },
    { answer: "Uganda", code: "UG" },
    { answer: "Ukraine", code: "UA" },
    { answer: "United Arab Emirates", code: "AE" },
    { answer: "United Kingdom", code: "GB" },
    { answer: "United States", code: "US" },
    { answer: "United States Minor Outlying Islands", code: "UM" },
    { answer: "Uruguay", code: "UY" },
    { answer: "Uzbekistan", code: "UZ" },
    { answer: "Vanuatu", code: "VU" },
    { answer: "Venezuela, Bolivarian Republic of", code: "VE" },
    { answer: "Viet Nam", code: "VN" },
    { answer: "Virgin Islands, British", code: "VG" },
    { answer: "Virgin Islands, U.S.", code: "VI" },
    { answer: "Wallis and Futuna", code: "WF" },
    { answer: "Western Sahara", code: "EH" },
    { answer: "Yemen", code: "YE" },
    { answer: "Zambia", code: "ZM" },
    { answer: "Zimbabwe", code: "ZW" },
];

const correctlyGuessedCountries = [];

function getAnswerFromFlagCode(code) {
    return countries.find((country) => country.code === code).answer;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const INITIAL_FLAG = countries[randomIntFromInterval(0, countries.length)];

// HANDLERS
function handleInputChange(event) {
    if (!event.target.value) return;
    const answerInput = document.getElementById("answer-input");
    if (store.currentFlag.answer.toLowerCase() === event.target.value.toLowerCase()) {
        increment();
        answerInput.value = "";
        correctlyGuessedCountries.push(store.currentFlag.code);
        const filteredCountries = countries.filter((country) => !correctlyGuessedCountries.includes(country.code));
        const newFlag = filteredCountries[randomIntFromInterval(0, countries.length)];
        store.currentFlag = { answer: newFlag.answer, code: newFlag.code.toLowerCase() };

        updateSuccessCount();
        updateFlagImage();
    }
}

function handleSkipButtonClick() {
    const answerInput = document.getElementById("answer-input");
    answerInput.value = "";
    const filteredCountries = countries.filter((country) => !correctlyGuessedCountries.includes(country.code));
    const newFlag = filteredCountries[randomIntFromInterval(0, countries.length)];
    store.currentFlag = { answer: newFlag.answer, code: newFlag.code.toLowerCase() };
    updateFlagImage();
}

// STATE
const updateSuccessCount = function () {
    document.getElementById("success-counter").innerHTML = store.successCount;
};
const updateFlagImage = function () {
    const image = document.getElementById("flag-image");
    image.src = `https://flagcdn.com/w1280/${store.currentFlag.code}.png`;
};
const updateTotalCount = function () {
    const totalCount = document.getElementById("total-count");
    totalCount.innerHTML = countries.length;
};

const bindEvents = function () {
    const answerInput = document.getElementById("answer-input");
    answerInput.addEventListener("keyup", (event) => handleInputChange(event));

    const skipButton = document.getElementById("skip-button");
    skipButton.addEventListener("click", handleSkipButtonClick);
};

const store = {
    successCount: 0,
    totalFlagCount: countries.length,
    currentFlag: { answer: INITIAL_FLAG.answer, code: INITIAL_FLAG.code.toLowerCase() },
};

const increment = function () {
    store.successCount++;
};

const init = function () {
    bindEvents();
    updateSuccessCount();
    updateFlagImage();
    updateTotalCount();
};

// WINDOW LOAD
window.onload = function () {
    init();
};
