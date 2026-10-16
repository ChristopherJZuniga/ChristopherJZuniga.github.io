/* =====================================================================
   YOUR PORTFOLIO CONTENT
   This is the only file you need to edit.
   Change the text between the quotes "like this", save, and refresh.
   Every style (theme) reads from this file, so you only fill it in once.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- STYLE ----------
     Pick your look: "terminal", "clean", or "story".
     showThemePicker: true shows the style switcher in the corner.
     Set it to false once you've picked your favorite.            */
  theme: "clean",
  showThemePicker: false,

  /* ---------- ABOUT YOU ---------- */
  name: "Christopher Zuniga",
  initials: "CZ",                       // shown if you don't add a photo
  photo: "images/Headshot.jpg",                            // optional: "images/headshot.jpg"
  headline: "Mechanical Engineering student minoring in Robotics, passionate about kinematics, mechanical architecture, and the physical implementation of mechatronic and intelligent systems.",
  tagline: "I like building things with integrated systems.",   // used by the Story style
  school: "UT Austin '28",
  location: "Austin, TX",
  status: "Seeking Summer 2027 Internships",             // leave "" to hide

  about: "I've worked on robotic systems through personal projects, engineering courses, and student competition organizations.",

  /* ---------- CONTACT ---------- */
  email: "chriszuniga7@outlook.com",
  resume: "Zuniga.Resume.pdf",                 // upload your resume with this exact name, or "" to hide
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/christopher-zuniga-97518120b" },
  ],

  /* ---------- EXPERIENCE ----------
     Newest first. Copy a { ... }, block to add another.
     Jobs, internships, research, org leadership, and your own
     business all count. Put everything applicable like a CV                      */
  experience: [
    {
      role: "Mechanical Team Member",
      org: "VEX U Robotics @ UT Austin",
      place: "Austin, TX",
      dates: "August 2026 - Present",
      summary: "Designing and fabricating the toggle mechanism and other components of the robot using Onshape.",
      tags: ["Onshape", "Mechanical Design", "Robotics"],
    },
    {
      role: "Financial Secretary",
      org: "Tau Beta Pi - Engineering Honor Society",
      place: "Austin, TX",
      dates: "August, 2026 - Present",
      summary: "Create and manage the budget and expenses of the organization and its officers, ensuring financial deadlines and constraints are met.",
      tags: ["Budgets", "Organization", "Financial Responsbility"],
    },
    {
      role: "Manufacturing Team Member",
      org: "Longhorn Baja Racing UT Austin",
      place: "Austin, TX",
      dates: "January, 2026 - September, 2026",
      summary: "Manufactured off-road vehicle components, applying GD&T, machining, and mechanical analysis to improve vehicle reliability.",
      tags: ["CAM", "SolidWorks", "GD&T", "Automotive","Manual Mill"],
    },
  ],

  /* ---------- PROJECTS ----------
     2 to 4 projects works best. Class projects count!
     "result" is one line about what happened or what you learned.
     "url" can link to a demo, GitHub repo, or photos ("" for none). */
 
     projects: [
   {
      name: "Robot Mechanism Design Project | 08/2026 - Present",
      dates: "August, 2026 - Present",
      summary: "Currently in its early design and prototyping stages, this project involves designing and fabricating a stationary mechanical bat driven by dual actuators, one for each wing, where each wing uses a single-input Jansen linkage architecture to generate complex flapping motion rather than through multiple servos. The featured image showcases a baseline 4-bar mechanism, illustrating how this fundamental mechanism will scale and evolve into the final multi-linkage wing assembly",
      result: "Project is still ongoing, but I managed to create a 4-bar mechanism that focuses on the fundamentals needed to create a more complex project, such as the final bat project.",
      tags: ["Mechanisms", "SolidWorks", "Soldering", "Robotics"],
      url: "",
    },
    {
      name: "Field-Deployable Crush-Syndrome Treatment Device | 04/2026 - 09/2026",
      dates: "Tau Beta Pi - Texas Alpha",
      summary: "Austin, TX",
      dates: "April, 2026 - September 2026",
      summary: "My team and I designed an affordable and portable potassium test strip to treat crush-syndrome in post-disaster scenarios, choosing durable, low-cost materials that could handle real-world field use. I was responsible for mapping out a roll-to-roll manufacturing plan and ran a full cost analysis to get the material budget down to less than $3 per test.",
      tags: ["Product Design", "BOM", "Manufacturing"],
    },
   {
      name: "Texas InventionWorks Trainings | 09/2025 - Present",
      dates: "September, 2025 - Present",
      summary: "Underwent hands-on technical trainings led by Texas InventionWorks (TIW) staff, developing proficiency in 3D printing, laser cutting, CNC milling, and soldering",
      result: "Trained in 3D-printing, soldering, laser cutting, and operating manual mill and created mini projects to ensure practical understanding.",
      tags: ["3D-Printing", "Soldering", "Laser Cutting", "Manual Mill", "CNC"],
      url: "",
    },    
   {
      name: "Design Graphics Battle Bot Project | 08/2025 - 12/2025",
      dates: "August, 2025 - December, 2025",
      summary: "Collaborated with a team to design and fabricate a remote-controlled combat robot. I focused on mechanical integration, designing custom structural mounts for internal mechatronic components to maintain component integrity during vehicle-to-vehicle combat.",
      result: "Motor mounts required multiple iterations based on the constraints of the shell dimensions, but turned out to be fully operational and received a positive grade at the project's conclusion.",
      tags: ["Gantt Chart", "SolidWorks", "3D-Printing", "Project Design"],
      url: "",
    },    
   {
      name: "Arduino Innovations @ Dallas College",
      dates: "February, 2025 - May, 2025",
      summary: "Engineered a 4 DOF robotic arm integrating motors, PCB, and other electronic copmonents for precise control.",
      result: "The mechanical architecture of the system was functional and the electric/software side of the system successfully operated independently, but ",
      tags: ["Arduino", "Fusion 360", "KiCad", "Soldering", "Electrical/Mechanical Assembly"],
      url: "",
    },
   {
      name: "CCIC - Team AVIADAR @ Dallas College",
      dates: "November, 2024 - June, 2025",
      summary: "I developed a physical CAD model of my team's hazard-detection LiDAR system for the Community College Innovation Challenge (CCIC), integrating NASA technology with our system through its T2U program.",
      result: "My team and I placed 3rd nationally after advancing the finalist stage of the competition vs 11 other teams and giving a poster presentation at Capitol Hill, as well as an in-person pitch to a panel of judges.",
      tags: ["Research","Innovation","LIDAR","Poster Presentation","Project Pitch"],
      url: "",
    },    
  ],

  /* ---------- SKILLS ----------
     Group them however makes sense for your major.               */
  skills: [
    { group: "CAD Programs", items: ["SolidWorks", "Fusion 360", "Onshape"]},
    { group: "Languages",  items: ["MATLAB", "Python","Fabrication","KiCad",] },
  ],

  /* ---------- AWARDS (optional, use [] for none) ---------- */
  awards: ["James (Jim) E. Nugent Family Endowed Scholarship Fund in Engineering 2026-2027",
    "Community College Innovation Challenge 3rd Place",
    "Tau Beta Pi Nest Design Project 1st Place"
  ]
};
