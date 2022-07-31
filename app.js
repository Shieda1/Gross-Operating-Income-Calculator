// https://calculator.swiftutors.com/gross-operating-income-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const grossOperatingIncomeRadio = document.getElementById('grossOperatingIncomeRadio');
const grossScheduledIncomeRadio = document.getElementById('grossScheduledIncomeRadio');
const vacancyandCreditLossRadio = document.getElementById('vacancyandCreditLossRadio');

let grossOperatingIncome;
let grossScheduledIncome = v1;
let vacancyandCreditLoss = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

grossOperatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Scheduled Income';
  variable2.textContent = 'Vacancy and Credit Loss';
  grossScheduledIncome = v1;
  vacancyandCreditLoss = v2;
  result.textContent = '';
});

grossScheduledIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Operating Income';
  variable2.textContent = 'Vacancy and Credit Loss';
  grossOperatingIncome = v1;
  vacancyandCreditLoss = v2;
  result.textContent = '';
});

vacancyandCreditLossRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Operating Income';
  variable2.textContent = 'Gross Scheduled Income';
  grossOperatingIncome = v1;
  grossScheduledIncome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(grossOperatingIncomeRadio.checked)
    result.textContent = `Gross Operating Income = ${computeGrossOperatingIncome().toFixed(2)}`;

  else if(grossScheduledIncomeRadio.checked)
    result.textContent = `Gross Scheduled Income = ${computeGrossScheduledIncome().toFixed(2)}`;

  else if(vacancyandCreditLossRadio.checked)
    result.textContent = `Vacancy and Credit Loss = ${computeVacancyandCreditLoss().toFixed(2)}`;
})

// calculation

function computeGrossOperatingIncome() {
  return Number(grossScheduledIncome.value) - Number(vacancyandCreditLoss.value);
}

function computeGrossScheduledIncome() {
  return Number(grossOperatingIncome.value) + Number(vacancyandCreditLoss.value);
}

function computeVacancyandCreditLoss() {
  return Number(grossScheduledIncome.value) - Number(grossOperatingIncome.value);
}