/* Shared helpers: navbar, footer, notifications, session, render helpers */

function getSession() {
  try { return JSON.parse(localStorage.getItem("bup_session") || "null"); }
  catch(e) { return null; }
}
function setSession(role) {
  localStorage.setItem("bup_session", JSON.stringify({ role, loggedInAt: Date.now() }));
}
function clearSession() { localStorage.removeItem("bup_session"); }

function requireRole(role) {
  const s = getSession();
  if (!s || s.role !== role) {
    location.href = "login.html?denied=" + role;
    return false;
  }
  return true;
}
function requireLogin() {
  const s = getSession();
  if (!s) { location.href = "login.html"; return false; }
  return true;
}

function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}
function getFaculty(id) { return DATA.faculty.find(f => f.id === id); }
function qs(name) {
  const p = new URLSearchParams(location.search);
  return p.get(name) || "";
}

/* ---------- FACULTY HELPERS (defensive — work without data.js changes) ---------- */

/* Detect whether a faculty is external by ID prefix */
function facultyIsExternal(f) {
  if (typeof f.isExternal === "boolean") return f.isExternal;
  const id = (f.id || "").toLowerCase();
  // BUP in-house faculty prefixes
  if (id.startsWith("ict-") || id.startsWith("cse-")) {
    // Col. Saiful Islam and Md. Mahabubur Rahman are BUP faculty
    if (id === "bup-saiful-islam-col") return false;
    if (id === "bup-mahabubur-rahman") return false;
    return false;
  }
  // Everything else is external
  return true;
}

/* Detect the institution by ID prefix */
function facultyInstitution(f) {
  if (f.institution) return f.institution;
  const id = (f.id || "").toLowerCase();
  if (id.startsWith("ju-")) return "Jahangirnagar University";
  if (id.startsWith("du-")) return "University of Dhaka";
  if (id.startsWith("duet-")) return "Dhaka University of Engineering & Technology";
  if (id.startsWith("mist-")) return "Military Institute of Science and Technology";
  if (id.startsWith("uftb-")) return "University of Frontier Technology, Bangladesh";
  if (id.startsWith("bup-")) return "Bangladesh University of Professionals";
  return "Bangladesh University of Professionals";
}

/* Get a short affiliation line: "IIT, Jahangirnagar University" or "Dept. of ICT, BUP" */
function facultyAffiliation(f) {
  const ext = facultyIsExternal(f);
  if (ext) {
    return `${f.department}, ${facultyInstitution(f)}`;
  }
  return `Dept. of ${f.department}, BUP`;
}

/* ---------- ROLE HELPERS ---------- */
function roleLabel(role) {
  if (role === "student") return "Student";
  if (role === "supervisor") return "Supervisor";
  if (role === "admin") return "Administrator";
  return "Guest";
}
function roleInitials(role) {
  if (role === "student") return "ST";
  if (role === "supervisor") return "SP";
  if (role === "admin") return "AD";
  return "GU";
}
function roleHome(role) {
  if (role === "student") return "student-workspace.html";
  if (role === "supervisor") return "supervisor-workspace.html";
  if (role === "admin") return "admin-workspace.html";
  return "home.html";
}

/* ---------- NAVBAR ---------- */
function renderNavbar(active) {
  const s = getSession();
  const role = s ? s.role : null;
  const profileHref = role ? "profile.html" : "login.html";
  const userLabel = role ? roleLabel(role) : "Login";
  const initials = roleInitials(role);

  const navItems = [
    ["home.html","Home","home"],
    ["explore.html","Explore","explore"],
    ["supervisors.html","Supervisors","supervisors"],
    ["theses.html","Thesis Archive","theses"],
    ["workspace.html","Workspace","workspace"]
  ];
  const links = navItems.map(([href,label,key]) =>
    `<li><a href="${href}" class="${active===key?'active':''}">${label}</a></li>`).join("");

  return `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="home.html" class="brand" style="text-decoration:none;">
        <img src="https://bup.edu.bd/public/upload/logo/202306071686132726.svg" alt="BUP">
        <span class="brand-text">
          <span class="b1">BUP ICT &amp; CSE</span>
          <span class="b2">Thesis Management System</span>
        </span>
      </a>
      <ul class="nav-links" id="navLinks">${links}</ul>
      <div class="nav-right">
        <button class="notif-btn" onclick="toggleNotif(event)">
          Notices <span class="notif-badge" id="notifBadge">${DATA.notifications.length}</span>
        </button>
        <a href="${profileHref}" class="profile-mini" style="text-decoration:none;">
          <span class="avatar">${initials}</span>
          <span>${esc(userLabel)}</span>
        </a>
        ${role ? `<button class="btn btn-secondary btn-sm" onclick="doLogout()">Logout</button>` : `<a class="btn btn-primary btn-sm" href="login.html">Login</a>`}
        <button class="hamburger" onclick="toggleMenu()">&#9776;</button>
      </div>
    </div>
    <div class="notif-panel" id="notifPanel">
      <div class="np-head">Notifications</div>
      <ul id="notifList">${DATA.notifications.map(n=>`<li><strong>${esc(n.type)}</strong><br>${esc(n.text)}<div class="nt">${esc(n.time)}</div></li>`).join("")}</ul>
    </div>
  </nav>`;
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  return `
  <footer>
    <div class="footer-inner">
      <div>
        <img class="footer-logo" src="https://bup.edu.bd/public/upload/logo/202306071686132726.svg" alt="BUP">
        <h4>Bangladesh University of Professionals</h4>
        <p>Mirpur Cantonment, Dhaka-1216, Bangladesh</p>
        <p>Phone: +8809666790799</p>
        <p>Fax: +88-02-223373197</p>
        <p>Email: info@bup.edu.bd</p>
        <p><a href="https://bup.edu.bd/" target="_blank" rel="noopener">https://bup.edu.bd/</a></p>
      </div>
      <div>
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#">About the University</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Admission</a></li>
          <li><a href="#">BUP Research Centre</a></li>
          <li><a href="#">Web Mail</a></li>
          <li><a href="#">Library</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4>System</h4>
        <ul>
          <li><a href="about.html">About the System</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="register.html">Student Registration</a></li>
          <li><a href="explore.html">Explore Theses</a></li>
          <li><a href="supervisors.html">Find a Supervisor</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 Bangladesh University of Professionals — ICT &amp; CSE Thesis Management System.
    </div>
  </footer>`;
}

/* ---------- UI BINDINGS ---------- */
function toggleMenu() {
  const el = document.getElementById("navLinks");
  if (el) el.classList.toggle("open");
}
function toggleNotif(e) {
  e.stopPropagation();
  const p = document.getElementById("notifPanel");
  if (p) p.classList.toggle("open");
}
function doLogout() {
  clearSession();
  location.href = "login.html";
}
document.addEventListener("click", function(e) {
  const p = document.getElementById("notifPanel");
  if (p && p.classList.contains("open")) {
    if (!p.contains(e.target) && !e.target.closest(".notif-btn")) {
      p.classList.remove("open");
    }
  }
});

/* ---------- FACULTY CARD ---------- */
function facultyCard(f) {
  const tags = f.researchAreas.slice(0,4).map(t => `<span class="tag">${esc(t)}</span>`).join("");
  const affilLine = facultyAffiliation(f);
  const extBadge = facultyIsExternal(f)
    ? `<span class="tag-plain" style="margin-left:6px;font-size:11px;">External</span>`
    : "";

  return `
  <div class="faculty-card">
    <div class="top">
      <img class="faculty-photo" src="${esc(f.photo)}" alt="${esc(f.name)}" onerror="this.style.display='none'">
      <div>
        <h3>${esc(f.name)}${extBadge}</h3>
        <div class="desig">${esc(f.designation)}</div>
        <div class="dept">${esc(affilLine)}</div>
      </div>
    </div>
    <div class="tag-list">${tags}</div>
    <div class="bio">${esc(f.bio).slice(0,150)}${f.bio.length>150?'…':''}</div>
    <a class="btn btn-secondary btn-sm" href="supervisor-detail.html?id=${encodeURIComponent(f.id)}">View Profile</a>
  </div>`;
}

/* ---------- THESIS CARD ---------- */
function thesisCard(t) {
  const sup = getFaculty(t.supervisorId);
  const statusClass = t.status === "Completed" ? "badge-green" : (t.status === "In Progress" ? "badge-amber" : "badge-grey");
  return `
  <div class="thesis-card">
    <div class="flex justify-between items-center flex-wrap gap-1 mb-1">
      <h3><a href="thesis-detail.html?id=${encodeURIComponent(t.id)}">${esc(t.title)}</a></h3>
      <span class="badge ${statusClass}">${esc(t.status)}</span>
    </div>
    <div class="row"><strong>Department:</strong> ${esc(t.department)} &nbsp;·&nbsp; <strong>Research Area:</strong> ${esc(t.researchArea)}</div>
    <div class="row"><strong>Year:</strong> ${esc(t.year)} &nbsp;·&nbsp; <strong>Batch:</strong> ${esc(t.batch)} &nbsp;·&nbsp; <strong>Supervisor:</strong> ${sup ? `<a href="supervisor-detail.html?id=${encodeURIComponent(sup.id)}">${esc(sup.name)}</a>` : "—"}</div>
    <p class="abstract">${esc(t.abstract)}</p>
    <div class="tag-list mb-1">${t.keywords.map(k=>`<span class="tag-plain">${esc(k)}</span>`).join("")}</div>
    <div class="footer">
      <span class="text-sm text-muted">Batch ${esc(t.batch)} · ${esc(t.department)}</span>
      <a class="btn btn-secondary btn-sm" href="thesis-detail.html?id=${encodeURIComponent(t.id)}">View Details</a>
    </div>
  </div>`;
}

/* ---------- PAGE BOOTSTRAP ---------- */
function mountPage(active, bodyHTML) {
  document.body.innerHTML = `
    ${renderNavbar(active)}
    <main>${bodyHTML}</main>
    ${renderFooter()}
  `;
}