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
  showThemePicker: true,

  /* ---------- ABOUT YOU ---------- */
  name: "Christopher Zuniga",
  initials: "CZ",                       // shown if you don't add a photo
  photo: "",                            // optional: "images/headshot.jpg"
  headline: "Mechanical engineer interested in robotics and creating the physical design and architecture of intelligent systems.",
  tagline: "I like building things with integrated systems.",   // used by the Story style
  school: "ME at UT Austin, class of 2028",
  location: "Austin, TX",
  status: "Looking for Summer 2027 internships",             // leave "" to hide

  about: "I've worked on robotic systems through personal projects, engineering courses, and student competition organizations.",

  /* ---------- CONTACT ---------- */
  email: "chriszuniga7@outlook.com",
  resume: "Zuniga_Resume.pdf",                 // upload your resume with this exact name, or "" to hide
  links: [
    { label: "LinkedIn", url: "www.linkedin.com/in/christopher-zuniga-97518120b" },
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
      role: "Field-Deployable Diagnostic Device - Nest 2026",
      org: "Tau Beta Pi - Texas Alpha",
      place: "Austin, TX",
      dates: "April, 2026 - September 2026",
      summary: "Created a BOM for an affordable, portable diagnostic device that addresses field healthcare needs.",
      tags: ["Product Design", "BOM", "Manufacturing"],
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
      name: "Robot Mechanism Design Course Project @ UT Austin",
      dates: "August, 2026 - Present",
      summary: "Designing and fabricating a stationary bat with wings thats motion focuses on its Jansen linkage architecture under the wings, rather than through multiple servos.",
      result: "Project is still ongoing, but I managed to create a 4-bar mechanism that focuses on the fundamentals needed to create a more complex project, such as the final bat project.",
      tags: ["Mechanisms", "SolidWorks", "Soldering", "Robotics"],
      url: "",
    },
   {
      name: "Texas InventionWorks Trainings",
      dates: "September, 2025 - Present",
      summary: "Undergo through various technical trainings from student workers at UT Austin's Texas InventionWorks (TIW) to learn or be more proficient at skills."
      result: "Trained in 3D-printing, soldering, laser cutting, and operating manual mill and CNC machines and created mini projects to ensure practical understanding.",
      tags: ["3D-Printing", "Soldering", "Laser Cutting", "Manual Mill", "CNC"],
      url: "",
    },    
   {
      name: "Design Graphics Course Battle Bot Project @ UT Austin",
      dates: "August, 2025 - December, 2025",
      summary: "Collaborated with peers to design and fabricate a RC car that is meant to combat other cars via its shell design. I focused on creating the various motor mounts required by our project, such as for the motors, battery, and bluetooth connector components.",
      result: "Motor mounts required multiple iterations based on the constraints of the shell dimensions, but turned out to be fully operational and received a positive grade at the project's conclusion.",
      tags: ["Gantt Chart", "SolidWorks", "3D-Printing", "Project Design"],
      url: "",
    },    
   {
      name: "Arduino Innovations @ Dallas College",
      dates: "February, 2025 - May, 2025",
      summary: "Engineered a 4 DOF robotic arm integrating motors, PCB, and other electronic copmonents for precise control.",
      result: "The mechanical architecture of the system was functional and the electric/software side of the system successfully operated independently, but "
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
    { group: "Languages",  items: ["MATLAB", "Python"] },
    { group: "CAD Programs", items: ["SolidWorks", "Fusion 360", "Onshape"] },
  ],

  /* ---------- AWARDS (optional, use [] for none) ---------- */
  awards: ["James (Jim) E. Nugent Family Endowed Scholarship Fund in Engineering],
};
