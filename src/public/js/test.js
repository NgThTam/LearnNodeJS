const hone = document.querySelector(".asd");
const test = document.querySelector(".test");
const asd = document.querySelector(".oke");

hone.addEventListener("click", () => {
	hone.classList.toggle("jsh1");
	test.classList.add("js_test");
});

asd.addEventListener("click", () => {
	test.classList.remove("js_test");
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

fetch("http://localhost:3000/api/v1/users")
	.then((res) => res.json())
	.then((asd) => {
		console.log(asd);
	});
