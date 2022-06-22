const hone = document.querySelector(".asd");
hone.addEventListener("click", () => {
	hone.classList.toggle("jsh1");
});

const navs = document.querySelectorAll(".jsnav");
navs.forEach((nav) => {
	nav.addEventListener("click", () => {
		navs.forEach((nav) => {
			nav.classList.remove("active");
		});
		nav.classList.add("active");
	});
});
