const toc = document.getElementById("toc-list");
const headings = document.querySelectorAll("h2");

headings.forEach((heading, index) => {
  const id = `section-${index}`;
  heading.id = id;

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${id}`;
  a.textContent = heading.textContent;

  li.appendChild(a);
  toc.appendChild(li);
});
