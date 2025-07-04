export type Person = {
  name: string;
  age: number;
};

export const renderPerson = (person: Person): void => {
  const mainElement = document.querySelector("main");

  if (mainElement) {
    const div = document.createElement("div");
    div.setAttribute("class", "mt-4 w-max rounded-md bg-red-400 p-2 text-sm text-white");

    div.innerHTML =
      "[Person] " +
      `<strong>name:</strong> ${person.name}, ` +
      `<strong>age:</strong> ${person.age}`;

    mainElement.appendChild(div);
  }
};
