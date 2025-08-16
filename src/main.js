document.querySelector("#app").innerHTML = `
  <div>
    <p>
      Open the console & reload.
    </p>
  </div>
`;

// Dynamic imports make the issue easier to demonstrate,
// but it occurs on regular import statements also.

debugger;
const demoWorks = await import("$okay://mod.js");
console.log(demoWorks);
const demoBroken = await import("broke://mod.js");
console.log(demoBroken);
