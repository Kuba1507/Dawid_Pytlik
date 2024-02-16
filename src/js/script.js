const burgerBtn = document.querySelector(".nav__burger-btn");
const navigation = document.querySelector(".nav__navbar");
const navItems = document.querySelectorAll(".nav__navbar-item-link");

let filterItem = document.querySelector(".items-links");
let filteredImages = document.querySelectorAll(".project-img");

const actualYear = document.querySelector(".actual-year");

const handleNav = () => {
	navigation.classList.toggle("show-mobile");
};

const closeNav = () => {
	navigation.classList.remove("show-mobile");
};

const updateYear = () => {
	const year = new Date().getFullYear();
	actualYear.textContent = year;
};

burgerBtn.addEventListener("click", handleNav);
navItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
document.addEventListener("DOMContentLoaded", () => {
	updateYear();
});
window.addEventListener("load", () => {
	filterItem.addEventListener("click", (selectedItem) => {
		if (selectedItem.target.classList.contains("items-links__link")) {
			document.querySelector(".menu-active").classList.remove("menu-active");
			selectedItem.target.classList.add("menu-active");
			let filterName = selectedItem.target.getAttribute("data-name");
			filteredImages.forEach((image) => {
				let filterImages = image.getAttribute("data-name");
				if (filterImages == filterName || filterName == "all") {
					image.style.display = "block";
				} else {
					image.style.display = "none";
				}
			});
		}
	});
});
