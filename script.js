/* ============================================================================
   RAJESH THIPPANI PORTFOLIO - INTERACTIVE FUNCTIONALITY
   ============================================================================ */

// PROJECT DATA - TODO: CUSTOMIZE WITH YOUR ACTUAL PROJECTS
const projectsData = [
    {
        id: 1,
        title: "API Security Assessment Framework",
        shortDesc: "Comprehensive security testing framework for automotive APIs",
        fullDesc: "Developed an end-to-end security assessment framework for testing Toyota's production APIs. The framework identifies authentication flaws, injection vulnerabilities, and authorization bypass issues across REST endpoints.",
        objective: "Identify and remediate API security vulnerabilities before production deployment",
        technologies: ["Python", "Burp Suite", "OWASP Top 10", "JWT", "OAuth 2.0"],
        whatYouDid: "Created automated API scanning pipeline, executed manual penetration testing, documented findings with remediation guidance, coordinated fixes with backend teams",
        skillsDeveloped: ["API Security", "Penetration Testing", "Threat Modeling", "Secure Coding Review"],
        outcome: "Identified 47 critical/high findings; 95% remediation rate before launch",
        realWorldRelevance: "API vulnerabilities are primary attack vector for connected vehicle systems. This framework reduced in-market vulnerabilities by 78%.",
        evidence: {
            repository: "https://github.com/TODO-username/api-security-framework",
            documentation: "Internal Wiki - API Security Assessment Guide",
            report: "Findings Report - API Assessment Q3 2024"
        }
    },
    {
        id: 2,
        title: "Mobile App Security Testing Suite",
        shortDesc: "Automated security testing for iOS and Android applications",
        fullDesc: "Built comprehensive mobile security testing suite covering certificate pinning, secure storage, biometric bypass, and runtime protection. Tested against OWASP Mobile Top 10 threats.",
        objective: "Secure Toyota mobile applications (OneApp, Toyota Connect) from common mobile attacks",
        technologies: ["Frida", "MobSF", "Burp Suite", "iOS/Android Security"],
        whatYouDid: "Developed automated mobile security scanning, executed code reviews for secure coding practices, documented mobile security guidelines, trained development teams",
        skillsDeveloped: ["Mobile Security", "Reverse Engineering", "Secure Storage Implementation", "Mobile SDLC"],
        outcome: "Tested 12+ mobile apps; prevented 23 high-severity findings from reaching production",
        realWorldRelevance: "Mobile apps are primary customer touchpoint for vehicle connectivity. Security flaws expose customer data and vehicle systems to hijacking.",
        evidence: {
            repository: "https://github.com/TODO-username/mobile-security-suite",
            writeup: "Blog: Mobile Security Testing Best Practices",
            demo: "Internal Demo - Mobile Security Automation"
        }
    },
    {
        id: 3,
        title: "Vehicle Communication Protocol Fuzzing",
        shortDesc: "Fuzzing framework for automotive CAN/LIN protocol testing",
        fullDesc: "Developed fuzzing harness for testing vehicle communication protocols (CAN, LIN, FlexRay). Identified potential denial-of-service and command injection vulnerabilities in vehicle firmware.",
        objective: "Discover vulnerabilities in vehicle-to-vehicle and vehicle-to-infrastructure communication",
        technologies: ["CAN Protocol", "Fuzzing", "Vehicle Hardware", "Python", "C++"],
        whatYouDid: "Built fuzzing infrastructure, executed fuzz campaigns on production vehicles, analyzed crashes, coordinated firmware patches with hardware teams",
        skillsDeveloped: ["Hardware Security", "Protocol Analysis", "Fuzzing Methodology", "Vehicle ECU Testing"],
        outcome: "Discovered 8 firmware vulnerabilities; all patched before OTA rollout",
        realWorldRelevance: "In-vehicle communication is critical attack surface. Vulnerabilities could enable remote vehicle control or spoofing attacks.",
        evidence: {
            repository: "https://github.com/TODO-username/vehicle-fuzzing",
            cveDisclosure: "CVE-2024-XXXXX - Vehicle CAN Message Injection"
        }
    },
    {
        id: 4,
        title: "Cloud Infrastructure Security Audit",
        shortDesc: "Comprehensive AWS security assessment for connected vehicle backend",
        fullDesc: "Conducted in-depth security audit of Toyota's AWS infrastructure supporting vehicle connectivity services. Identified misconfigurations, overprivileged IAM roles, exposed S3 buckets, and Lambda authorization bypasses.",
        objective: "Secure cloud infrastructure hosting connected vehicle services from unauthorized access",
        technologies: ["AWS", "Lambda", "API Gateway", "IAM", "CloudTrail", "Terraform"],
        whatYouDid: "Executed AWS reconnaissance, performed configuration review, tested authorization mechanisms, identified privilege escalation paths, documented remediation",
        skillsDeveloped: ["Cloud Security", "AWS Security", "Infrastructure as Code Review", "Threat Modeling"],
        outcome: "Identified 34 high-severity cloud misconfigurations; enabled security hardening initiative",
        realWorldRelevance: "Cloud infrastructure secures millions of vehicle telemetry records and customer data. Breaches expose PII and vehicle location information.",
        evidence: {
            report: "AWS Security Assessment Report - Q2 2024",
            remediationGuide: "Cloud Security Hardening Playbook"
        }
    },
    {
        id: 5,
        title: "Authentication & Authorization Testing",
        shortDesc: "Security assessment of vehicle authentication and authorization mechanisms",
        fullDesc: "Comprehensive testing of authentication schemes (OAuth 2.0, JWT, certificate-based) and authorization models protecting vehicle APIs. Discovered privilege escalation and account takeover vulnerabilities.",
        objective: "Ensure secure authentication prevents unauthorized vehicle access",
        technologies: ["OAuth 2.0", "JWT", "SAML", "Certificate-Based Auth", "Burp Suite"],
        whatYouDid: "Tested authentication flows, analyzed JWT implementations, tested authorization boundaries, documented bypass techniques, guided security fixes",
        skillsDeveloped: ["Authentication Security", "Authorization Testing", "Cryptography Basics", "API Security"],
        outcome: "Found 12 critical auth flaws; implemented secure auth framework reducing bypass risk by 95%",
        realWorldRelevance: "Authentication bypasses directly enable vehicle hijacking and account takeover attacks impacting customer safety.",
        evidence: {
            caseStudy: "Case Study: Fixing Lambda Authorizer Bypass",
            remediationGuide: "Secure Authentication Implementation Guide"
        }
    },
    {
        id: 6,
        title: "Security Requirements Verification",
        shortDesc: "Verification and validation of security requirements across TMNA products",
        fullDesc: "Developed and executed comprehensive security requirement verification process covering confidentiality, integrity, availability, and compliance requirements across vehicle platforms.",
        objective: "Ensure products meet NIST, OWASP, ISO, and automotive security standards",
        technologies: ["Security Standards", "Threat Modeling", "Requirements Management", "Compliance Frameworks"],
        whatYouDid: "Reviewed security requirements, mapped to standards (NIST, OWASP, SAE), executed verification testing, documented compliance evidence, trained teams",
        skillsDeveloped: ["Compliance", "Requirements Engineering", "Standards Knowledge", "Risk Assessment"],
        outcome: "Verified compliance with 50+ security requirements; documented compliance evidence for certifications",
        realWorldRelevance: "Security requirements ensure consistent security posture across all vehicle platforms and customer touchpoints.",
        evidence: {
            complianceMatrix: "Security Requirements Compliance Matrix",
            auditReport: "Annual Security Audit Report"
        }
    }
];

// COMPETITIONS DATA - TODO: CUSTOMIZE WITH YOUR ACTUAL COMPETITIONS
const competitionsData = [
    {
        name: "OWASP Security Challenges",
        result: "Top 10%",
        description: "Participated in OWASP WebGoat and Juice Shop challenges",
        areas: ["Web Security", "OWASP Top 10", "SQL Injection", "XSS", "Authentication Bypass"],
        learned: "Deep understanding of common web vulnerabilities and exploitation techniques"
    },
    {
        name: "TryHackMe Security Competitions",
        result: "Top Rank in Automotive Security Track",
        description: "Completed 50+ rooms focused on API security, mobile security, and infrastructure security",
        areas: ["API Security", "Mobile Security", "Network Security", "Linux Security"],
        learned: "Hands-on experience with modern security tools and exploitation frameworks"
    }
];

// LEARNING DATA - TODO: CUSTOMIZE WITH YOUR ACTUAL LEARNING STATS
const learningData = [
    {
        name: "TryHackMe",
        stats: "150+ Rooms Completed",
        areas: ["Web Security", "API Security", "Mobile Security", "Cryptography", "Secure Coding"],
        profile: "https://tryhackme.com/p/TODO-username",
        description: "Completed structured cybersecurity challenges covering vulnerability exploitation, defense mechanisms, and secure development practices."
    },
    {
        name: "HackTheBox",
        stats: "75+ Machines Completed",
        areas: ["Penetration Testing", "Privilege Escalation", "Lateral Movement", "Post-Exploitation"],
        profile: "https://www.hackthebox.com/home/users/TODO-username",
        description: "Active participation in realistic hacking challenges and CTF events. Regular contributor to the security community."
    }
];

// CERTIFICATIONS DATA - TODO: CUSTOMIZE WITH YOUR ACTUAL CERTIFICATIONS
const certificationsData = [
    {
        name: "CEH (Certified Ethical Hacker)",
        issuer: "EC-Council",
        date: "2023",
        link: "https://TODO-verify-certificate-link.com",
        badge: "CEH"
    },
    {
        name: "CKAD (Certified Kubernetes Application Developer)",
        issuer: "Linux Foundation",
        date: "2024",
        link: "https://www.cncf.io/certification/ckad/",
        badge: "CKAD"
    }
];

// ACHIEVEMENTS DATA - TODO: CUSTOMIZE WITH YOUR ACTUAL ACHIEVEMENTS
const achievementsData = [
    {
        title: "Product Security Testing Lead",
        description: "Led security testing initiatives for 3 major vehicle platform releases, coordinating cross-functional teams and delivering 450+ findings with 93% remediation rate before launch. Established security baseline for future releases."
    },
    {
        title: "Security Mentorship Program",
        description: "Mentored 5 junior engineers in secure coding practices and penetration testing methodologies. Developed internal training curriculum on API security and mobile app security."
    },
    {
        title: "Internal Security Tool Development",
        description: "Developed and open-sourced internal security scanning tools used by 50+ engineers across TMNA. Tools scan 1,000+ endpoints daily for misconfigurations."
    },
    {
        title: "Security Conference Speaker",
        description: "Presented 'Securing Connected Vehicles' at automotive security conference. Shared real-world Toyota security learnings with industry peers and contributed to automotive security standards."
    }
];

// MODAL FUNCTIONALITY
let currentProjectId = null;

function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    currentProjectId = projectId;
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('modalProjectContent');

    content.innerHTML = `
        <span class="modal-close" onclick="closeProjectModal()">&times;</span>
        <h2 class="modal-project-title">${project.title}</h2>
        
        <div class="modal-section">
            <h4 class="modal-section-title">What</h4>
            <div class="modal-section-content">${project.fullDesc}</div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Objective</h4>
            <div class="modal-section-content">${project.objective}</div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Technologies & Tools</h4>
            <div class="modal-section-content">${project.technologies.join(', ')}</div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">What You Did</h4>
            <div class="modal-section-content">${project.whatYouDid}</div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Skills Developed</h4>
            <div class="modal-section-content">${project.skillsDeveloped.join(', ')}</div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Outcome</h4>
            <div class="modal-section-content">${project.outcome}</div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Real-World Relevance</h4>
            <div class="modal-section-content">${project.realWorldRelevance}</div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Evidence & Links</h4>
            <div class="modal-section-content">
                ${Object.entries(project.evidence)
                    .map(([key, value]) => {
                        const label = key.replace(/([A-Z])/g, ' $1').trim();
                        if (value.startsWith('http')) {
                            return `<div style="margin-bottom: 0.5rem;"><strong>${label}:</strong> <a href="${value}" target="_blank">${value}</a></div>`;
                        } else {
                            return `<div style="margin-bottom: 0.5rem;"><strong>${label}:</strong> ${value}</div>`;
                        }
                    })
                    .join('')}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    currentProjectId = null;
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeProjectModal();
            }
        });
    }
});

// HAMBURGER MENU
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
});

// SMOOTH SCROLL FOR NAVIGATION
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// GENERATE PROJECT CARDS DYNAMICALLY
function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projectsData
        .map(project => `
            <div class="project-card" onclick="openProjectModal(${project.id})">
                <h3>${project.title}</h3>
                <p class="project-description">${project.shortDesc}</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 3).map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <div class="project-cta">View Details →</div>
            </div>
        `)
        .join('');
}

// GENERATE COMPETITIONS CARDS
function renderCompetitions() {
    const competitionsContainer = document.getElementById('competitionsContainer');
    if (!competitionsContainer) return;

    competitionsContainer.innerHTML = competitionsData
        .map(comp => `
            <div class="competition-card">
                <div class="competition-name">${comp.name}</div>
                <div class="competition-result">🏆 ${comp.result}</div>
                <div class="competition-info">
                    <p><strong>Description:</strong> ${comp.description}</p>
                    <p><strong>Areas:</strong> ${comp.areas.join(', ')}</p>
                    <p><strong>Learned:</strong> ${comp.learned}</p>
                </div>
            </div>
        `)
        .join('');
}

// GENERATE LEARNING CARDS
function renderLearning() {
    const learningContainer = document.getElementById('learningContainer');
    if (!learningContainer) return;

    learningContainer.innerHTML = learningData
        .map(learning => `
            <div class="learning-card">
                <h3>${learning.name}</h3>
                <div class="learning-stats">
                    <p><strong>${learning.stats}</strong></p>
                </div>
                <p class="learning-description">${learning.description}</p>
                <p><strong>Areas:</strong> ${learning.areas.join(', ')}</p>
                <p>
                    <a href="${learning.profile}" target="_blank" class="btn btn-secondary btn-small">
                        View Profile →
                    </a>
                </p>
            </div>
        `)
        .join('');
}

// GENERATE CERTIFICATIONS CARDS
function renderCertifications() {
    const certsContainer = document.getElementById('certificationsContainer');
    if (!certsContainer) return;

    certsContainer.innerHTML = certificationsData
        .map(cert => `
            <div class="cert-item">
                <div class="cert-badge">${cert.badge}</div>
                <h4>${cert.name}</h4>
                <p class="cert-issuer">${cert.issuer}</p>
                <p class="cert-date">${cert.date}</p>
                ${cert.link ? `<p><a href="${cert.link}" target="_blank" style="font-size: 0.85rem;">View Certificate</a></p>` : ''}
            </div>
        `)
        .join('');
}

// GENERATE ACHIEVEMENTS CARDS
function renderAchievements() {
    const achievementsContainer = document.getElementById('achievementsContainer');
    if (!achievementsContainer) return;

    achievementsContainer.innerHTML = achievementsData
        .map(achievement => `
            <div class="achievement-card">
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            </div>
        `)
        .join('');
}

// INITIALIZE ALL SECTIONS
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCompetitions();
    renderLearning();
    renderCertifications();
    renderAchievements();

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.project-card, .competition-card, .learning-card, .cert-item, .achievement-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// KEYBOARD NAVIGATION
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Add smooth fade-in animation to page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
