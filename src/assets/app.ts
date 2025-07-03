function appendToMain(content: string): void {
  const mainElement = document.querySelector("main");

  const div = document.createElement("div");
  div.setAttribute("class", "mt-4 text-sm");
  div.innerHTML = content;

  if (mainElement) {
    mainElement.appendChild(div);
  }
}

type Person = {
  name: string;
  age: number;
};

const rick: Person = {
  name: "Rick",
  age: 26,
};

appendToMain(`Name: ${rick.name}, Age: ${rick.age}`);
