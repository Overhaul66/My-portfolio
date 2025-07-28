import { useState } from 'react'
import ColorPalette from './colors'
import profile from "./assets/william.jpg"
import AMSSnapShot from "./assets/AMS.jpg"
import protonSnahsot from "./assets/proton.png"

const skills = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    skill: "React",
    level: "Frontend – Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    skill: "Django",
    level: "Backend – Strong",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    skill: "Python",
    level: "Backend – Advanced",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    skill: "TailwindCSS",
    level: "Styling – Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg",
    skill: "Redis",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    skill: "Node.js",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    skill: "JavaScript",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    skill: "Vite",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    skill: "SQL",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    skill: "MySQL",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    skill: "VS Code",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    skill: "Linux",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    skill: "CSS3",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    skill: "HTML5",
    level: "Intermediate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    skill: "Git",
    level: "Intermediate",
  }
];

const projects = [
  {snapShot: AMSSnapShot, desc:"An ambulance management system", title:"Ambulance Management System", link:null},
   {snapShot: protonSnahsot, desc:"A car website for a company", title:"Proton Ghana", link:"https://protonghana.com/"},
  {snapShot: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", desc:"T&C AI summarizer", title:"Ambulance Management System", link:"https://github.com/Overhaul66/T-C-summarizer-AI-"},
  
]

function App() {
  const [count, setCount] = useState(0)

  return (
      <main>
        {/* drawer nav bar */}
        <div className="drawer font-">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar bg-base-300 w-full">
                <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="mx-2 flex-1 px-2 font-extrabold text-primary font-work-sans">Welcome</div>
                <div className="hidden flex-none lg:block">
                  <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
                <li>
                  <a href='https://github.com/Overhaul66' >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      alt="App Logo"
                      className="w-5"
                    /> <p className='text-primary font-bold font-work-sans'>my github</p>
                  </a>
                   
                </li>
                
              </ul>
                </div>
              </div>
              {/* Page content here */}
              {/* hero */}
                  <div className="hero bg-base-200 min-h-screen">
                  <div className="hero-content flex-col lg:flex-row lg:gap-20">
                    <img className="mask mask-hexagon-2 w-62 lg:w-1/5" src={profile} alt="Profile" />
                    <div>
                      <h1 className="text-5xl font-bold text-primary mb-2 font-montserrat">
                        Hi there! 
                      </h1>
                      <h2 className="text-3xl font-semibold text-secondary mb-4 font-montserrat">
                        I'm William Adangabe
                      </h2>
                      <p className="py-2 text-lg text-neutral font-work-sans">
                        A <span className="font-bold text-primary">backend developer</span> focused on building robust and scalable systems, <br />
                       complemented by a deepening command of<span className="font-bold text-secondary"> frontend</span>  development. </p>
                      <button className="btn btn-outline btn-primary mt-4 font-work-sans">Donwload CV</button>
                    </div>
                  </div>
                </div>
                <div className='px-20 bg-base-200'>
                    <hr className="my-10 w-full border-primary rounded-full mx-auto opacity-30" />
                </div>
          
                {/* about me */}
              <div className="p-10 bg-base-200">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-primary mb-4 font-montserrat">About Me</h2>
                <p className="text-lg text-neutral leading-relaxed font-work-sans">
                  I’m a <span className="font-semibold text-secondary font-work-sans">Fullstack Developer</span> passionate about creating
                  efficient, scalable, and user-friendly web solutions. With experience in both
                  <span className="font-bold text-primary font-work-sans"> frontend</span> and
                  <span className="font-bold text-primary font-work-sans"> backend</span> development, I build seamless applications that deliver real value.
                </p>
                <p className="text-lg text-neutral mt-4 leading-relaxed font-work-sans">
                  I’m open to collaboration and always ready to contribute to innovative projects.
                  Currently seeking opportunities to join a dynamic team or work on exciting freelance ventures.
                </p>
                    </div>
          </div>

          {/* Skills */}
          <div>
            <h1 className='text-center font-extrabold text-4xl text-primary mt-6 mb-5 font-montserrat '>My Skills</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-base-100 p-6  max-w-7xl mx-auto font-work-sans">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 bg-base-200 rounded-lg">
                <img src={skill.src} alt={skill.skill} className="w-10 h-10 mb-2" />
                <div className="text-primary font-semibold text-lg">{skill.skill}</div>
                <div className="text-sm  mt-1 text-center text-neutral">{skill.level}</div>
              </div>
            ))}
        </div>
          </div>
         

        {/* projects */}
     <div className="w-full flex flex-col items-center">
  <h1 className='text-center font-extrabold text-4xl text-primary mt-6 mb-5 font-montserrat'>Projects</h1>

  <div className="w-full flex justify-center">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl w-full font-work-sans'>
      {projects.map((project, idx) => (
        <div key={idx} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={project.snapShot} alt="Project Snapshot" className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-primary">{project.title}</h2>
            <p className='text-neutral'>{project.desc}</p>
            
            <button className="btn btn-success btn-sm" onClick={() => 
            (project.link) ? window.location.href=`${project.link}` : document.getElementById('my_modal_5').showModal()
          }>preview</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-base-100 rounded-xl shadow-2xl border-2 ">
                <h3 className="font-extrabold text-2xl text-primary mb-2 text-center">Hello there!!!</h3>
                <p className="py-2 text-neutral text-center">
                  This project is <span className="font-semibold text-warning">in development / private</span>
                </p>
                <p className="py-2 text-neutral text-center">
                  Contact me for a preview
                </p>
                <div className="modal-action flex justify-center mt-4">
                  <form method="dialog">
                    <button className="btn btn-primary px-8">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* contact me */}
      <form className="font-work-sans max-w-xl mx-auto bg-base-100 p-6 rounded-xl shadow-lg space-y-4 mt-10  " action="https://formsubmit.co/willadan667@gmail.com" method="POST">
            <h2 className="text-2xl font-bold text-center text-primary">Contact Me</h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-neutral">Name</span>
              </label>
              <input type="text" placeholder="Your name" className="input input-bordered border-primary placeholder:text-neutral focus:outline-none text-neutral" />
            </div>

            <div className="form-control"> 
              <label className="label">
                <span className="label-text text-neutral">Email</span>
              </label>
              <input type="email" placeholder="you@example.com" className="input input-bordered border-primary placeholder:text-neutral focus:outline-none text-neutral"  />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-neutral">Message</span>
              </label>
              <textarea className="textarea textarea-bordered h-32 border-primary focus:outline-none placeholder:text-neutral text-neutral" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">Send</button>
</form>


            </div>
            {/*
  Sidebar Drawer - App-like style
*/}
<div className="drawer-side">
  <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
  <aside className="menu bg-base-200 min-h-full w-80 py-10 px-4 rounded-r-2xl shadow-lg flex flex-col">
    {/* App logo / avatar section */}
    <div className="flex flex-col items-center mb-8">
      <div className="avatar mb-2">
        <a href="https://github.com/Overhaul66" className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="App Logo" />
        </a>
      </div>
      <span className="font-bold text-lg text-primary font-montserrat">My Github</span>
    </div>
    {/* Navigation menu */}
    <ul className="flex-1 space-y-2">
      <li>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-content transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1h-6a1 1 0 00-1 1v9m10 4h-4m-4 0H4" />
          </svg>
          <span className='font-bold text-neutral font-work-sans'>Projects</span>
        </a>
      </li>
      <li>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-content transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className='font-bold text-neutral font-work-sans'>About me</span>
        </a>
      </li>
      {/* Add more menu items as needed */}
       <li>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-content transition-colors">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className='font-bold text-neutral font-work-sans'>Email</span>
        </a>
      </li>
    </ul>
    
  </aside>
</div>
          </div>
              <hr className="my-10 w-full border-primary rounded-full mx-auto opacity-30" />

            <p className="text-center text-neutral text-sm mb-6">
                &copy; {new Date().getFullYear()} William Adangabe. All rights reserved.
              </p>
        
        
      </main>
  )
}

export default App