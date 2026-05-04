// Tool cards shown to students
const student = [
  // Academics — core tools most students use daily
  { id: 1,  name: "My Learning",           description: "Access your courses online",                        category: "Academics",     tags: ["lms", "courses", "online", "d2l", "brightspace", "learning"], link: "https://mylearning.suny.edu/d2l/login" },
  { id: 3,  name: "Degree Works",          description: "View your progress towards graduating",              category: "Academics",     tags: ["degree", "audit", "progress", "graduation"],                   link: "https://alf.degreeworks.suny.edu/" },
  { id: 4,  name: "Schedule Planner",      description: "Register for classes and pick your schedule",        category: "Academics",     tags: ["enroll", "classes", "schedule", "planner", "registration"],    link: "https://alfredstate.collegescheduler.com/" },
  { id: 5,  name: "Class Schedule",        description: "View your schedule and student info",                category: "Academics",     tags: ["timetable", "classes", "times", "banner"],                     link: "https://banner.alfredstate.edu/StudentSelfService/ssb/studentProfile" },
  { id: 28, name: "Tutor Request",         description: "Schedule a tutoring appointment",                    category: "Academics",     tags: ["tutor", "help", "writing", "math", "wconline"],                link: "https://alfredstate.mywconline.com/" },
  { id: 30, name: "Hinkle Library",        description: "Search and request books from the library",          category: "Academics",     tags: ["library", "books", "research", "hinkle"],                      link: "https://library.alfredstate.edu/c.php?g=372677" },
  // Finance — all finance tools live here so clicking the Finance tab surfaces everything
  { id: 6,  name: "Financial Aid",         description: "Accept and decline Federal Direct Loans",            category: "Finance",       tags: ["loans", "aid", "tuition", "fafsa"],                            link: "https://banner.alfredstate.edu/StudentSelfService/ssb/financialAid#!/dashboard/home/2627" },
  { id: 7,  name: "Student Billing",       description: "View bills and payments",                            category: "Finance",       tags: ["bill", "payments", "balance", "banner"],                       link: "https://banner.alfredstate.edu/StudentSelfService/ssb/studentProfile" },
  { id: 36, name: "FAFSA Application",     description: "Apply for federal financial aid",                    category: "Finance",       tags: ["fafsa", "federal", "aid", "loans", "grants"],                  link: "https://studentaid.gov/h/apply-for-aid/fafsa" },
  { id: 37, name: "NYS TAP Application",   description: "Apply for New York State Tuition Assistance",         category: "Finance",       tags: ["tap", "nys", "tuition", "aid", "new york"],                    link: "https://www.tap.hesc.ny.gov/totw/" },
  { id: 38, name: "Excelsior Scholarship", description: "Apply for the NYS Excelsior free tuition program",   category: "Finance",       tags: ["excelsior", "scholarship", "free", "tuition", "nys"],          link: "https://hesc.ny.gov/find-aid/nys-grants-scholarships/excelsior-scholarship-program" },
  { id: 35, name: "ScholarshipUniverse",   description: "Apply for scholarships through Alfred State",         category: "Finance",       tags: ["scholarship", "money", "aid", "apply"],                        link: "https://alfredstate.scholarshipuniverse.com/" },
  { id: 39, name: "NYS Scholarships",      description: "View grants and scholarships offered by New York State", category: "Finance",    tags: ["nys", "scholarship", "grants", "aid", "new york"],             link: "https://hesc.ny.gov/find-aid/nys-grants-scholarships" },
  { id: 40, name: "Financial Aid Guides",  description: "Guides and documents for navigating financial aid",  category: "Finance",       tags: ["aid", "guides", "documents", "finance", "help"],               link: "https://alfredstateedu14176.sharepoint.com/sites/Finances" },
  // Campus Life — core campus tools
  { id: 8,  name: "Dining Services",       description: "View menus and hours",                               category: "Campus Life",   tags: ["food", "menu", "meals", "dining"],                             link: "https://www.acesalfred.com/campus-dining" },
  { id: 9,  name: "Housing Portal",        description: "Select your housing and meal plan",                   category: "Campus Life",   tags: ["dorm", "housing", "room", "erezlife"],                         link: "https://alfredstate.erezlife.com/" },
  { id: 41, name: "Pioneer Link",          description: "Find events, organizations, and campus news",         category: "Campus Life",   tags: ["events", "clubs", "organizations", "news", "pioneer"],         link: "https://pioneerlink.alfredstate.edu/" },
  // Communication
  { id: 2,  name: "Email",                 description: "Check your Alfred State email via Outlook",           category: "Communication", tags: ["mail", "messages", "outlook", "email"],                        link: "https://webmail.alfredstate.edu/" },
  { id: 51, name: "Microsoft Teams",       description: "Chat with faculty and students",                      category: "Communication", tags: ["chat", "teams", "messages", "meetings"],                       link: "https://teams.microsoft.com/v2/" },
  // Support
  { id: 10, name: "IT Help Desk",          description: "Get tech support",                                   category: "Support",       tags: ["tech", "help", "support", "it"],                               link: "https://www.alfredstate.edu/help-desk" },
  { id: 48, name: "Health Portal",         description: "Alfred State health and wellness services",            category: "Support",       tags: ["health", "wellness", "medical", "nurse", "portal"],            link: "https://alfredst.studenthealthportal.com/" },
  { id: 50, name: "988 Hotline",           description: "Suicide and crisis lifeline",                         category: "Support",       tags: ["crisis", "mental health", "hotline", "988", "help"],           link: "https://988lifeline.org/" },
];

// Tool cards shown to staff
const staff = [
  { id: 11, name: "Outlook",               description: "Check your Alfred State email",                      category: "Communication",    tags: ["email", "mail", "outlook", "messages"],                        link: "https://webmail.alfredstate.edu/" },
  { id: 12, name: "Microsoft Teams",       description: "Chat with faculty and colleagues",                    category: "Communication",    tags: ["chat", "teams", "messages", "meetings"],                       link: "https://teams.microsoft.com/v2/" },
  { id: 13, name: "BannerWeb",             description: "Student information and records dashboard",           category: "Operations",       tags: ["banner", "student", "records", "admin"],                       link: "https://banner.alfredstate.edu/StudentSelfService/ssb/studentProfile" },
  { id: 52, name: "Veteran Certification", description: "Process veteran benefits and certification",          category: "Operations",       tags: ["veteran", "military", "benefits", "certification"],            link: "https://federation.ngwebsolutions.com/sp/ACS.saml2" },
  { id: 14, name: "IT Help Desk",          description: "Get tech support",                                   category: "Support",          tags: ["tech", "help", "support", "it"],                               link: "https://www.alfredstate.edu/help-desk" },
  { id: 15, name: "Pharos Packages",       description: "Download software and drivers for campus printing",   category: "Support",          tags: ["print", "pharos", "drivers", "software"],                      link: "https://alfredstateedu14176.sharepoint.com/sites/PharosPackages" },
  { id: 16, name: "Pharos Help",           description: "Guide to using campus printers",                      category: "Support",          tags: ["print", "pharos", "guide", "help"],                            link: "https://alfredstate.teamdynamix.com/TDClient/277/Portal/KB/ArticleDet?ID=10714" },
  { id: 53, name: "Veteran Services",      description: "View veteran benefits offered by Alfred State",       category: "Support",          tags: ["veteran", "military", "benefits", "services"],                 link: "https://www.alfredstate.edu/admissions/applying-alfred/veterans-military" },
  { id: 17, name: "LinkedIn Learning",     description: "Free professional development courses",               category: "Professional Dev", tags: ["learning", "courses", "linkedin", "training"],                 link: "https://www.linkedin.com/learning-login/" },
  { id: 18, name: "RAVE Alerts",           description: "Manage emergency notifications",                      category: "Safety",           tags: ["alerts", "emergency", "rave", "notifications"],                link: "https://www.getrave.com/login/alfredstate" },
  { id: 19, name: "Campus Parking",        description: "Parking information and permits",                     category: "Campus",           tags: ["parking", "permit", "campus", "vehicle"],                      link: "https://www.alfredstate.edu/university-police/parking-campus" },
  { id: 20, name: "University Police",     description: "University police information and resources",          category: "Safety",           tags: ["police", "safety", "security", "emergency"],                   link: "https://www.alfredstate.edu/university-police" },
  { id: 21, name: "Pioneer Link",          description: "Events, organizations, and campus news",               category: "Campus",           tags: ["events", "clubs", "organizations", "news"],                    link: "https://pioneerlink.alfredstate.edu/" },
  { id: 22, name: "Health Portal",         description: "Alfred State health and wellness services",            category: "Support",          tags: ["health", "wellness", "medical", "portal"],                     link: "https://alfredst.studenthealthportal.com/" },
];

// Tool cards shown to admins — everything staff sees plus extra management tools
const admin = [
  ...staff,
  { id: 23, name: "Starfish",                      description: "Schedule and manage meetings with students",  category: "Operations",  tags: ["starfish", "meetings", "advising", "students"],      link: "https://alfredstate.starfishsolutions.com/starfish-ops" },
  { id: 24, name: "Clockwork",                     description: "Manage and schedule proctored tests",         category: "Operations",  tags: ["proctor", "test", "clockwork", "exams"],             link: "https://clockwork.alfredstate.edu/ClockWork/custom/misc/home.aspx" },
  { id: 54, name: "Pay Commencement Fee",          description: "Process commencement fee payment",            category: "Operations",  tags: ["commencement", "fee", "payment", "graduation"],      link: "https://federation.ngwebsolutions.com/sp/startSSO.ping?PartnerIdpId=https://sts.windows.net/9847450c-4365-4e32-b26e-b73baa0ea04b/&SpSessionAuthnAdapterId=alfredstateDF&TargetResource=https%3a%2f%2fdynamicforms.ngwebsolutions.com%2fSubmit%2fStart%2fd52b16b1-4cf0-4e7c-9846-41289bcfb807" },
  { id: 25, name: "Title IX",                      description: "Title IX policies and reporting resources",   category: "Compliance",  tags: ["title ix", "compliance", "policy", "reporting"],     link: "https://www.alfredstate.edu/title-ix" },
  { id: 26, name: "Academic Complaint Form",       description: "File an academic complaint",                  category: "Compliance",  tags: ["complaint", "academic", "form", "grievance"],        link: "https://www.alfredstate.edu/sites/default/files/2025-12/academic-complaint-form.pdf" },
  { id: 27, name: "Administrative Complaint Form", description: "File an administrative complaint",            category: "Compliance",  tags: ["complaint", "admin", "form", "grievance"],           link: "https://www.alfredstate.edu/sites/default/files/2025-12/administrative-complaint-form.pdf" },
];

module.exports = { student, staff, admin };
