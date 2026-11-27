console.log("behavior.js is running");



const pledgeButton = document.querySelector(".pledge-button");
const impactCounter = document.querySelector(".impact-counter");

function addPledge() {
  impactCounter.textContent = "Thank you! 14,251+ native plants rooted across local communities.";
  pledgeButton.textContent = "Pledged!";

}

pledgeButton.addEventListener("click", addPledge);







const copyButton = document.querySelector(".copy-button");
const promoCode = document.querySelector(".promo-code");

function copyPromoCode() {

  navigator.clipboard.writeText(promoCode.textContent);
  copyButton.textContent = "Copied!";


  setTimeout(function () {
    
    copyButton.textContent = "Copy promo code";
  }, 2000);
}

copyButton.addEventListener("click", copyPromoCode);