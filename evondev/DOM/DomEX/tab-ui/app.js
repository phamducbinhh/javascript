const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item ");
const panels = $$(".tab-pane");

tabs.forEach((tab, index) => {
  const pane = panels[index];
  tab.addEventListener("click", function (e) {
    //gỡ các class có active trc khi add vào
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  });
});
