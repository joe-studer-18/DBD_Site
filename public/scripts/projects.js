const Struct = (...keys) => ((...v) => keys.reduce((o, k, i) => {o[k] = v[i]; return o} , {}))
const Project = Struct('id', 'img', 'link', 'desc')
var myProjects = [
  Project('py2cfg', 
          'images/py2cfg.png',
          'https://pypi.org/project/py2cfg/',
          `A command line tool for generating a \'colorful\' call-flow 
           graph of Python files. Developed at Missouri S&T for use in CS1500 
           (Introduction to Python) lectures to aid in the explanation of 
           program execution, as well as assist in student debugging.`),
  Project('Smart Clock',
          'images/smartClock.jpeg', 
          'https://github.com/joe-studer-18/smartClock',
          `Utilizes the Electron framework to run a basic Smart Clock on a
           Raspberry Pi touchscreen. Ever a work in progress, this clock
           can also play internet radio and tell the local weather. This is a
           v2 of my first software passion project in highschool (v1 was Java),
           and was created as a gift for my dad for Father's Day.`)
]

function loadProjects() {
  var template, text, a, i;
  // Get the template element:
  dst = document.getElementById("projectBar");
  img_width = (screen.width < 500 ? 400 : (screen.width / 4) - 40);

  for (i = 0; i < myProjects.length; i++) {
    // Create a new node, based on the template:
    element = document.createElement('a');
    element.href = myProjects[i].link;

    figure = document.createElement('figure');

    img = document.createElement('img');
    img.src = myProjects[i].img;
    img.style.width = img_width + 'px';
    img.classList.add('project-img');
    figure.appendChild(img);

    caption = document.createElement('figcaption');
    caption.textContent = myProjects[i].id;

    figure.appendChild(caption);
    figure.classList.add('project-card');

    if (myProjects[i].desc) {
      description = document.createElement('p');
      description.classList.add('project-text');
      description.textContent += '\n' + myProjects[i].desc;     
      figure.appendChild(description);
    }

    element.appendChild(figure);
    dst.appendChild(element);
  }
}

new Promise(loadProjects);
