const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  _run('/usr/share/bigbashview/bcc/shell/setbgcolor.sh "' + document.body.classList.contains('light-mode') + '"');
});

const navIcons = document.querySelectorAll("nav ul li");

const hamBurger = document.querySelector("#hamburger");

const sidebar = document.querySelector("aside");

const searchBar = document.querySelector(".search");

const setActive = (e) => {
 	navIcons.forEach((navIcon) => navIcon.classList.remove("active"));
 	e.currentTarget.classList.add("active");
 };

const expand = () => {
	searchBar.querySelector("input").focus();
	searchBar.classList.toggle("active");
};

const showSidebar = () => {
	sidebar.classList.toggle("active");
};

const closeSidebar = (e) => {
	if (e.target !== hamBurger) {
		sidebar.classList.remove("active");
	}
};

navIcons.forEach((navIcon) => {
	navIcon.addEventListener("click", setActive);		
});

hamBurger.addEventListener("click", showSidebar);

searchBar.addEventListener("click", expand);

document.addEventListener("click", closeSidebar);


$(document).on("click", "#point-container", function () {
  var show = $(this).data("show");
  //alert(show);
  $(show).removeClass("hide").siblings().addClass("hide");
});




/* Example code for updating a chart with JS */

function loop(t) {
  requestAnimationFrame(loop);
  updateCharts(Math.floor(t / 16) % 100);
}

function updateCharts(value) {
  charts.forEach(chart => setChartValue(chart, value));
}

function setChartValue(chart, value) {
  chart.style.setProperty('--percent', value);
}

let charts = document.querySelectorAll('.js');

loop();


