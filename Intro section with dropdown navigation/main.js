const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const sidebar = document.querySelector(".overlay");
const mobileFeatures = document.getElementById("navmobile-features");
const mobileFeatureContent = document.getElementById(
  "navmobile-features-content"
);
const mobileCompanies = document.getElementById("navmobile-companies");
const mobileCompanyContent = document.getElementById(
  "navmobile-companies-content"
);
const Features = document.getElementById("nav-features");
const FeatureContent = document.getElementById("features-content");
const Companies = document.getElementById("nav-companies");
const CompanyContent = document.getElementById("companies-content");

/**
 * function that display the elements
 * @param {*} element
 */
function Display(element) {
  element.classList.remove("hidden");
}

/**
 * function that hides elements
 * @param {*} element
 */
function Hidden(element) {
  element.classList.add("hidden");
}

openMenu.addEventListener("click", () => {
  Display(sidebar);
});
closeMenu.addEventListener("click", () => {
  Hidden(sidebar);
});
mobileFeatureContent.addEventListener("click", () => {
  if (mobileFeatureContent.childNodes[3].classList == "hidden") {
    Display(mobileFeatures);
    Hidden(mobileFeatureContent.childNodes[1]);
    Display(mobileFeatureContent.childNodes[3]);
  } else {
    Hidden(mobileFeatures);
    Display(mobileFeatureContent.childNodes[1]);
    Hidden(mobileFeatureContent.childNodes[3]);
  }
});
mobileCompanyContent.addEventListener("click", () => {
  if (mobileCompanyContent.childNodes[3].classList == "hidden") {
    Display(mobileCompanies);
    Hidden(mobileCompanyContent.childNodes[1]);
    Display(mobileCompanyContent.childNodes[3]);
  } else {
    Hidden(mobileCompanies);
    Display(mobileCompanyContent.childNodes[1]);
    Hidden(mobileCompanyContent.childNodes[3]);
  }
});
FeatureContent.addEventListener("click", () => {
  if (FeatureContent.childNodes[3].classList == "hidden") {
    Display(Features);
    Hidden(FeatureContent.childNodes[1]);
    Display(FeatureContent.childNodes[3]);
  } else {
    Hidden(Features);
    Display(FeatureContent.childNodes[1]);
    Hidden(FeatureContent.childNodes[3]);
  }
});
CompanyContent.addEventListener("click", () => {
  if (CompanyContent.childNodes[3].classList == "hidden") {
    Display(Companies);
    Hidden(CompanyContent.childNodes[1]);
    Display(CompanyContent.childNodes[3]);
  } else {
    Hidden(Companies);
    Display(CompanyContent.childNodes[1]);
    Hidden(CompanyContent.childNodes[3]);
  }
});
