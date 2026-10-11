/* Centralized data layer for BUP ICT & CSE Thesis Management System */

const DATA = {};

/* ---------------- FACULTY ---------------- */
DATA.faculty = [
  {
    id: "ict-maynul-islam",
    name: "Md. Maynul Islam",
    designation: "Assistant Professor",
    department: "ICT",
    departmentFull: "Department of Information and Communication Technology, Faculty of Science & Technology",
    email: "maynul@bup.edu.bd",
    photo: "http://hr.bup.edu.bd/upload/picture/3818.JPG",
    bio: "Assistant Professor in the Department of Information and Communication Technology. Research interests span radar signal processing, antenna design, wireless sensor networks, and machine learning applications including cybersecurity and social media analysis.",
    education: [
      "S.S.C, Dhaka Residential Model College",
      "H.S.C, Notre Dame College",
      "Honors, Military Institute of Science and Technology",
      "Masters, Military Institute of Science and Technology"
    ],
    researchAreas: ["Radar","Pulse Compression","Antenna","Signal Processing","Deep CNN","Transfer Learning","Underwater Wireless Sensor Networks","Trust Management","Cybersecurity","Hate Speech Detection","Social Media Analysis"],
    publications: [],
    conferencePapers: [
      { title:"Comparison of Analog and Digital Pulse Compression Technique and Reduction of Side lobes Using Transversal Filter", venue:"ICEEICT 2014", doi:"10.1109/ICEEICT.2014.6919118" },
      { title:"Assessment and Performance Evaluation of Capacitive Property of Inductor and Inductive Property of Capacitor in Linear Circuit", venue:"ICEEICT 2014", doi:"" },
      { title:"Side lobe Level Reduction in Antenna Array using Weighting Function", venue:"ICEEICT 2014", doi:"10.1109/ICEEICT.2014.6919117" },
      { title:"Analysis of Improving the Detection Capability of RADAR in Presence of Jammer by Controlling Radar Effective Temperature", venue:"ICECE 2014", doi:"10.1109/ICECE.2014.7026843" },
      { title:"Camera Model Identification using Deep CNN and Transfer Learning Approach", venue:"ICREST 2019", doi:"10.1109/ICREST.2019.8644194" },
      { title:"ANFIS based Trust Management Model to Enhance Location Privacy of Underwater Wireless Sensor Networks", venue:"ECCE 2019", doi:"10.1109/ECACE.2019.8679165" },
      { title:"Depression Detection by Analyzing Social Media Posts of User", venue:"SPICSCON 2019", doi:"10.1109/SPICSCON48833.2019.9065101" },
      { title:"Assuring CyberSecurity in Smart Grid Networks by Fuzzy-logic based Trust Management Model", venue:"RAAICON 2019", doi:"10.1109/RAAICON48939.2019.1" },
      { title:"Beyond Language Boundaries: Analysis and Ensemble Approach of Hate Speech Detection in South Asian Social Media", venue:"ICCIT 2023", doi:"10.1109/ICCIT60459.2023.10441513" }
    ],
    books: [], awards: [], courses: [], profileLinks: {},
    lastUpdated: "20/09/2026"
  },
  {
    id: "ict-saiful-islam",
    name: "Saiful Islam",
    designation: "Assistant Professor",
    department: "ICT",
    departmentFull: "Department of Information and Communication Technology, Faculty of Science & Technology",
    email: "saifulislam@bup.edu.bd",
    photo: "http://hr.bup.edu.bd/upload/picture/11377.JPG",
    bio: "Assistant Professor in the Department of Information and Communication Technology. Works on material growth and characterization, nanodevice fabrication, photovoltaics, photonics, and semiconductor nanocrystals.",
    education: ["H.S.C, Notre Dame College","H.S.C, Begumganj Govt. Pilot High School","Honors, University of Dhaka","Masters, University of Dhaka"],
    researchAreas: ["Material Growth and Characterization","Nanodevice Fabrication","Photovoltaics","Photonics","Semiconductor Nanocrystals"],
    publications: [
      { authors:"Islam, S., Hossain, T., Sarwar, H. and Rashid, M.J., 2020.", title:"A systematic study on chemically deposited cadmium sulfide (CdS) thin film.", venue:"Journal of Theoretical and Applied Physics, 14, pp.265-274.", doi:"10.1007/s40094-020-00377-2" },
      { authors:"Hossain, T., Sobayel, M.K., Munna, F.T., Islam, S., et al., 2022.", title:"Tuning the bandgap of Cd1-xZnxS (x=0–1) buffer layer and CIGS absorber layer for obtaining high efficiency.", venue:"Micro and Nanostructures, 161, 107100.", doi:"10.1016/j.spmi.2021.107100" },
      { authors:"Sameeraa, J.N., Islam, M.A., Islam, S., et al.", title:"Cubic Silicon Carbide (3C–SiC) as a buffer layer for high efficiency and highly stable CdTe solar cell.", venue:"Optical Materials, 123, 111911.", doi:"10.1016/j.optmat.2021.111911" },
      { authors:"Islam, A.M., Islam, S., Sobayel, M.K., et al., 2021.", title:"Performance Analysis of Tungsten Disulfide (WS2) as an Alternative Buffer Layer for CdTe Solar Cell through Numerical Modeling.", venue:"Optical Materials, 120, 111296.", doi:"10.1016/j.optmat.2021.111296" },
      { authors:"Sobayel, M.K., Chowdhury, M.S., Hossain, T., Alkhammash, H.I., Islam, S., et al., 2021.", title:"Efficiency enhancement of CIGS solar cell by cubic silicon carbide as prospective buffer layer.", venue:"Solar Energy, 224, pp.271-278.", doi:"10.1016/j.solener.2021.05.093" },
      { authors:"Sarwar, S., Islam, S., Hosain, T., Sarwar, H. and Rashid, M.J., 2018.", title:"A comparison of the absorbed power for periodic, disordered and deterministic aperiodic arrays of Silver nanoparticles.", venue:"Journal of Physics: Conference Series, Vol. 1086, No. 1, 012008.", doi:"10.1088/1742-6596/1086/1/01200" },
      { authors:"Emon, E.I., Islam, A.M., Sobayel, M.K., Islam, S., et al., 2023.", title:"A Comprehensive Numerical Study based on Tungsten Disulfide (WS2) Buffer Layer for CdTe Solar Cell.", venue:"Heliyon, Volume 9, Issue 3, e14438.", doi:"10.1016/j.heliyon.2023.e14438" },
      { authors:"T. Akhter, M.A. Islam, S. Islam.", title:"Artificial neural network based COVID-19 suspected area identification.", venue:"Journal of Engineering Advancements 1(04), 188-194.", doi:"10.38032/jea.2020.04.010" },
      { authors:"", title:"Flood severity classification in Bangladesh: a comprehensive analysis of historical weather and water level data using machine learning approaches.", venue:"Natural Hazards, 2025.", doi:"10.1007/s11069-025-07202-6" }
    ],
    conferencePapers: [],
    books: [],
    awards: [
      "2018 Best Poster Award, International Conference on Material Science and Semiconductor Devices, University of Dhaka",
      "2016 National Science and Technology (NST) Fellowship, Ministry of Science and Technology, Bangladesh",
      "2015 General Government Scholarship for Graduate Students, Bangladesh"
    ],
    courses: [
      "Electric Circuits (Theory)","Electrical Devices and Circuits (Theory)","Digital Logic Design (Theory)","Electromagnetic Theory and Antenna (Theory)",
      "Electric Circuits (Lab)","Electrical Devices and Circuits (Lab)","Digital Logic Design (Lab)","Digital Signal Processing (Lab)","Analog and Digital Communication (Lab)","Continuous Signals and Linear Systems Laboratory","Numerical Methods (Lab)","Microwave Engineering (Lab)","Optical Fiber Communication (Lab)","Multimedia Communication (Lab)"
    ],
    profileLinks: {},
    lastUpdated: "20/09/2026"
  },
  {
    id: "ict-nazneen-akhter",
    name: "Nazneen Akhter",
    designation: "Assistant Professor",
    department: "ICT",
    departmentFull: "Department of Information and Communication Technology, Faculty of Science & Technology",
    email: "nazneen.akhter@bup.edu.bd",
    photo: "http://hr.bup.edu.bd/upload/picture/24976.jpg",
    bio: "She completed her BSc in Information and Communication Engineering and MSc in Information and Communication Engineering from the Department of Information and Communication Technology of Bangladesh University of Professionals. She began her academic career as a Lecturer in the Department of Information and Communication Technology in 2021 and is currently serving as an Assistant Professor in the same department. Her research interests include Software Engineering, Artificial Intelligence applications, and Natural Language Processing. She also serves as the Advisor of the IEEE BUP Student Branch Women in Engineering (WIE) Affinity Group.",
    education: ["S.S.C, BAF Shaheen College Kurmitola, Dhaka","H.S.C, Shaheed Bir Uttam Lt Anwar Girls' College","Bachelor of Science (BSc), Bangladesh University of Professionals","Master of Science (Tech), Bangladesh University of Professionals"],
    researchAreas: ["Software Engineering","Artificial Intelligence Applications","Natural Language Processing","Software Requirements","Anti-pattern Detection","Fake News Detection","Depression Detection","Network Intrusion Detection"],
    publications: [
      { authors:"", title:"Investigation of Depression Using Context Analysis", venue:"Journal of FST", doi:"" },
      { authors:"", title:"Analysis of Duplicate Bug Report Detection Techniques", venue:"Journal of FST", doi:"" },
      { authors:"", title:"Hybrid SVM-Bidirectional Long Short-Term Memory Model for Fine-Grained Software Requirement Classification", venue:"Journal of Advances in Information Technology, 2024, 15(8)", doi:"" },
      { authors:"", title:"Hierarchical Explainable Network for Investigating Depression from Multilingual Textual Data", venue:"IEEE Access, 2024", doi:"" },
      { authors:"", title:"A systematic analysis on machine learning classifiers with data pre-processing to detect anti-pattern from source code", venue:"International Journal of Artificial Intelligence, 2024", doi:"" },
      { authors:"", title:"Text Feature-Based CNN Approach to Detect Fake News", venue:"Journal of FST, 2024", doi:"" },
      { authors:"", title:"A Systematic Analysis of Machine Learning and Deep Learning Techniques to Detect Fake News", venue:"Journal of FST, Vol. 3, No. 1", doi:"" }
    ],
    conferencePapers: [
      { title:"An Anti-Pattern Detection Technique Using Machine Learning to Improve Code Quality", venue:"ICICT4SD 2021", doi:"" },
      { title:"A Hybrid Approach to Investigate Anti-pattern from Source Code", venue:"ICCIT 2022", doi:"" },
      { title:"Hybrid HAN Model to Investigate Depression from Twitter Posts", venue:"2023", doi:"" },
      { title:"A Multilevel Depression Detection from Twitter using Fine-Tuned RoBERTa", venue:"ICICT4SD 2023", doi:"" },
      { title:"An Attention Based LSTM Model: Automated Requirement Classification from User Story", venue:"ICICT4SD 2023", doi:"" },
      { title:"Prediction of Code Smell from Source Code: A Hybrid Approach", venue:"ICICT4SD 2023", doi:"" },
      { title:"DARN: Dual-Attention RoBERTa Network for Depression Severity Detection from Twitter", venue:"ICCIT 2023", doi:"" },
      { title:"A Fine Tuned Ensemble Approach to Classify Requirement from User Story", venue:"ICCIT 2023", doi:"" },
      { title:"A Hybrid Transfer Learning Approach to Detect Parkinson's Disease", venue:"ICCIT 2023", doi:"" },
      { title:"Explainable attention based BiLSTM-SVM for Software Requirement Classification: Integrating Generative Artificial Intelligence", venue:"ICCIT 2024", doi:"10.1109/ICCIT64611.2024.11022439" },
      { title:"Depression Detection in Bangla: A Hybrid Model with FastText and XLM-RoBERTa", venue:"ICCIT 2024", doi:"10.1109/ICCIT64611.2024.11022553" },
      { title:"HAN-DistilBERT for Depression Detection from Twitter Data", venue:"ICCIT 2024", doi:"10.1109/ICCIT64611.2024.11022022" },
      { title:"Dynamic Feature Selection with Attention Mechanism: BiLSTM-CNN Hybrid Approach for Network Intrusion Detection", venue:"Springer, 2026", doi:"10.1007/978-981-95-1069-6_36" }
    ],
    books: [], awards: [], courses: [],
    profileLinks: {
      "Google Scholar": "https://scholar.google.com/citations?user=HhStxDYAAAAJ&hl=en",
      "ResearchGate": "https://www.researchgate.net/profile/Nazneen-Akhter-3"
    },
    lastUpdated: "20/09/2026"
  },
  {
    id: "cse-sayma-alam-suha",
    name: "Sayma Alam Suha",
    designation: "Lecturer",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, Faculty of Science & Technology",
    email: "suha.mist@gmail.com",
    photo: "http://hr.bup.edu.bd/upload/picture/43404.JPG",
    bio: "Lecturer in the Department of Computer Science and Engineering. Research focuses on artificial intelligence, machine learning and deep learning in healthcare, advanced healthcare analytics, data science, computer vision, health data privacy and security, and big data analytics.",
    education: ["SSC, Mohammadpur Preparatory School, Dhaka","HSC, Holy Cross College, Dhaka","Bachelor of Science (BSc), Military Institute of Science and Technology (MIST)","Master of Science (Tech), Bangladesh University of Engineering and Technology (BUET)","Master of Science (Tech), Military Institute of Science and Technology (MIST)"],
    researchAreas: ["Artificial Intelligence","Machine Learning and Deep Learning in Healthcare Domain","Advanced Healthcare Analytics","Data Science","Computer Vision in Healthcare","Health Data Privacy and Security","Big Data Analytics"],
    publications: [
      { authors:"", title:"A deep convolutional neural network-based approach for detecting burn severity from skin burn images.", venue:"Machine Learning with Applications, 9, 100371, 2022.", doi:"" },
      { authors:"", title:"Hospital patients' length of stay prediction: A federated learning approach.", venue:"Journal of King Saud University-Computer and Information Sciences, 34(10), 7874-7884, 2022.", doi:"" },
      { authors:"", title:"A fuzzy model for predicting burn patients' intravenous fluid resuscitation rate.", venue:"Healthcare Analytics, 2, 100070, 2022.", doi:"" },
      { authors:"", title:"An extended machine learning technique for polycystic ovary syndrome detection using ovary ultrasound image.", venue:"Scientific Reports, 12(1), 17123, 2022.", doi:"" },
      { authors:"", title:"Exploring dominant factors for ensuring the sustainability of utilizing artificial intelligence in healthcare decision making.", venue:"International Journal of Information Management Data Insights, 3(1), 100170, 2023.", doi:"" },
      { authors:"", title:"Exploring the dominant features and data-driven detection of polycystic ovary syndrome through modified stacking ensemble machine learning technique.", venue:"Heliyon, 9(3), 2023.", doi:"" },
      { authors:"", title:"A systematic review and future research agenda on detection of polycystic ovary syndrome (PCOS) with computer-aided techniques.", venue:"Heliyon, 2023.", doi:"" },
      { authors:"", title:"Evaluating the performance of bitcoin price forecasting using machine learning techniques on historical data.", venue:"Informatyka, Automatyka, Pomiary W Gospodarce I Ochronie Środowiska, 14(2), 101–108, 2024.", doi:"10.35784/iapgos.5657" },
      { authors:"", title:"Towards early intervention for panic disorder detection and dominant feature selection through machine learning techniques.", venue:"Journal of FST, BUP, 3(1), 185–205, 2025.", doi:"10.64494/JFST/v3i1/ss/2025/09/185-205" },
      { authors:"", title:"Data center standards: A review of metrics and standardization gaps.", venue:"Journal of FST, BUP, 3(1), 25–52, 2025.", doi:"10.64494/JFST/v3i1/si/2025/02/25-52" },
      { authors:"", title:"Predicting Intravenous Fluid Resuscitation Rate for Burn Patients Through Type-1 Mamdani Fuzzy Inference System Modeling.", venue:"Cureus, 2025.", doi:"" },
      { authors:"", title:"Deep Learning for Fetal Brain Imaging: A Systematic Review and Framework Towards Privacy-Preserving Neurodevelopmental Informatics.", venue:"Neuroscience Informatics, 2025, 100241.", doi:"" },
      { authors:"", title:"FetCAT: Cross-attention fusion of transformer-CNN architecture for fetal brain plane classification with explainability using motion-degraded MRI.", venue:"PLOS ONE, 2026, 21(1), e0340286.", doi:"10.1371/journal.pone.0340286" },
      { authors:"", title:"A systematic literature review of deep learning techniques for identification of ocular abnormalities.", venue:"Computer Methods and Programs in Biomedicine Update, 2026, 100238.", doi:"10.1016/j.cmpbup.2026.100238" },
      { authors:"", title:"Transparent and tuned: XAI for postpartum depression screening with comprehensive feature engineering and real-time web-integration.", venue:"Network Modeling Analysis in Health Informatics and Bioinformatics, 2026, 15, 111.", doi:"10.1007/s13721-026-00783-7" }
    ],
    conferencePapers: [
      { title:"ICU mortality prediction", venue:"(Conference)", doi:"" },
      { title:"Sign language learning", venue:"(Conference)", doi:"" },
      { title:"Brain stroke prediction", venue:"(Conference)", doi:"" },
      { title:"Cardiac disease prediction", venue:"(Conference)", doi:"" },
      { title:"e-tourism usability", venue:"(Conference)", doi:"" },
      { title:"PCOS prediction", venue:"(Conference)", doi:"" },
      { title:"Heart disease prediction", venue:"(Conference)", doi:"" },
      { title:"Patient hospital stay prediction", venue:"(Conference)", doi:"" },
      { title:"Industry 4.0", venue:"(Conference)", doi:"" },
      { title:"Burn injury prediction", venue:"(Conference)", doi:"" },
      { title:"Augmented reality in education", venue:"(Conference)", doi:"" },
      { title:"GiveMed", venue:"(Conference)", doi:"" },
      { title:"Diabetic readmission", venue:"(Conference)", doi:"" },
      { title:"Bitcoin prediction", venue:"(Conference)", doi:"" },
      { title:"Industry 4.0 policy", venue:"(Conference)", doi:"" },
      { title:"Antimicrobial peptides", venue:"(Conference)", doi:"" },
      { title:"Cervical dysplasia", venue:"(Conference)", doi:"" },
      { title:"Heart disease lifestyle factors", venue:"(Conference)", doi:"" },
      { title:"Fetal MRI", venue:"(Conference)", doi:"" },
      { title:"IoT architecture", venue:"(Conference)", doi:"" },
      { title:"Plant health monitoring", venue:"(Conference)", doi:"" },
      { title:"Municipal solid waste segregation", venue:"(Conference)", doi:"" },
      { title:"Postpartum hemorrhage prediction", venue:"(Conference)", doi:"" }
    ],
    books: [
      { title:"Integrated framework for intelligent healthcare decision support system with sustainability assessment.", venue:"Doctoral dissertation, Institute of Appropriate Technology, BUET, 2022." },
      { title:"Predicting Polycystic Ovary Syndrome Through Machine Learning Technique Using Patients' Symptom Data and Ovary Ultrasound Images.", venue:"Doctoral dissertation, Department of Computer Science and Engineering, MIST, 2022." }
    ],
    awards: [
      "ICT Fellowship (2021–2022) for predictive analytics of Polycystic Ovary Syndrome using machine learning",
      "BUET Post Graduate Fellowship for research work on artificial intelligence in smart healthcare",
      "Research Excellence Award-2022 by FORUM-86, BUET",
      "MIST Medal-2017 for securing 1st position in CSE",
      "MIST Commandant List Award-2014, 2015, 2016, 2017"
    ],
    courses: [
      "CSE-2101: Data Structures & Algorithms I","CSE-2205: Data Structures & Algorithms II","MCSE 1102: Advanced Algorithm Design and Optimization","Compiler Lab","Object Oriented Programming Language (Java) Lab","Data Communication Lab","MCSE Deep Learning"
    ],
    profileLinks: {},
    lastUpdated: "20/09/2026"
  },
  {
    id: "cse-rumana-yasmin",
    name: "Rumana Yasmin",
    designation: "Lecturer",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, Faculty of Science & Technology",
    email: "rumana.yasmin@bup.edu.bd",
    photo: "http://hr.bup.edu.bd/upload/picture/43401.jpg",
    bio: "Lecturer in CSE at BUP since 2024; BSc/MSc CSE from Jahangirnagar University; research interests include ML, computer vision, GNN, NLP, healthcare and smart systems.",
    education: ["SSC, Faridpur Govt. Girls' High School","HSC, Govt. Sarda Sundari Mohila College","BSc, Jahangirnagar University","MSc (Tech), Jahangirnagar University"],
    researchAreas: ["Artificial Intelligence","Machine Learning","Computer Vision","Deep Learning","Medical Imaging","Natural Language Processing","Graph Neural Networks","Explainable AI"],
    publications: [
      { authors:"", title:"Carrot disease recognition using deep learning approach for sustainable agriculture.", venue:"International Journal of Advanced Computer Science and Applications, 12(9).", doi:"10.14569/IJACSA.2021.0120981" },
      { authors:"", title:"Butterfly detection and classification techniques: A review.", venue:"Intelligent Systems with Applications.", doi:"10.1016/j.iswa.2023.200214" },
      { authors:"", title:"ONUBAD dataset for Bangla regional dialect translation.", venue:"Data in Brief.", doi:"10.1016/j.dib.2025.111276" },
      { authors:"", title:"Bangla Sign Language Recognition: comprehensive review.", venue:"Journal of FST, 2025.", doi:"10.64494/JFST/jr/2025/03/53-86" }
    ],
    conferencePapers: [
      { title:"Handwritten Chakma Numeral Classification using Deep Learning and Genetic Algorithm.", venue:"COMPAS 2024.", doi:"10.1109/COMPAS60761.2024.10796391", note:"Best Poster Award" },
      { title:"Spectral Feature Based Speech Recognition for Indigenous Chakma Language Using Deep Learning.", venue:"ICCIT 2024.", doi:"10.1109/ICCIT64611.2024.11021811" },
      { title:"Recognition of Butterflies of Bangladesh using Deep Learning.", venue:"ICECE 2024.", doi:"10.1109/ICECE64886.2024.11024854" }
    ],
    books: [],
    awards: [
      "NST Fellowship 2022–23","Academic Supplementary Scholarship 2019","Academic Supplementary Scholarship 2020","Academic Supplementary Scholarship 2021","HSC Talentpool Government Scholarship","SSC Government Scholarship","JSC Government Scholarship"
    ],
    courses: [
      "Jul-Dec 2024: Compiler","Jul-Dec 2024: Compiler Lab","Jul-Dec 2024: DBMS Lab","Jul-Dec 2024: OS Lab",
      "Jan-Jun 2025: DSA I","Jan-Jun 2025: DSA I Lab","Jan-Jun 2025: Software Engineering Lab","Jan-Jun 2025: OOP Lab",
      "Jul-Dec 2025: Compiler","Jul-Dec 2025: Compiler Lab","Jul-Dec 2025: OOP II Lab","Jul-Dec 2025: Digital Logic Design Lab",
      "Jan-Jun 2026: Compiler","Jan-Jun 2026: Compiler Lab","Jan-Jun 2026: Software Engineering Lab","Jan-Jun 2026: Microprocessors & Microcontrollers Lab","Jan-Jun 2026: Machine Learning Lab"
    ],
    profileLinks: {
      "Scopus": "https://www.scopus.com/authid/detail.uri?authorId=57346800600",
      "ORCID": "https://orcid.org/0009-0003-5599-5447",
      "ResearchGate": "https://www.researchgate.net/profile/Rumana-Yasmin-3",
      "Google Scholar": "https://scholar.google.com/citations?user=6DCAdz4AAAAJ&hl=en&authuser=1"
    },
    lastUpdated: "20/09/2026"
  },
  {
    id: "cse-afrina-khatun",
    name: "Afrina Khatun",
    designation: "Assistant Professor",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, Faculty of Science & Technology",
    email: "bit0411@iit.du.ac.bd",
    photo: "http://hr.bup.edu.bd/upload/picture/25041.jpg",
    bio: "Assistant Professor in the Department of Computer Science and Engineering. Research focuses on software engineering, software testing, software bug assignment, and machine learning.",
    education: ["SSC, Udayan Uchcho Madhyamid Bidyalaya","HSC, Holy Cross College","Honors, Institute of Information Technology","Masters, Institute of Information Technology"],
    researchAreas: ["Software Engineering","Software Testing","Software Bug Assignment","Machine Learning"],
    publications: [
      { authors:"", title:"UML Diagrams and Source Based Automatic Test Suite Regeneration for Improving State Model Coverage.", venue:"IJCA 176(7), 2017.", doi:"" },
      { authors:"", title:"Automatic Test Scenario Generation Technique for Medical Cyber Physical Systems.", venue:"IJCA 176(5), 2017.", doi:"" },
      { authors:"", title:"Analysis of Duplicate Bug report Detection Techniques.", venue:"BUP Journal FST, 2022.", doi:"" },
      { authors:"", title:"Investigation of Depression Using Context Analysis.", venue:"BUP Journal FST, 2022.", doi:"" }
    ],
    conferencePapers: [
      { title:"A Bug Assignment Approach Combining Expertise and Recency of Both Bug Fixing and Source Commits.", venue:"ENASE 2018.", doi:"" },
      { title:"Team Allocation Technique Ensuring Bug Assignment to Existing and New Developers Using Their Recency and Expertise.", venue:"SOFTENG 2017.", doi:"" },
      { title:"Bug Assignment Technique Based on Bug Fixing Expertise and Source Commit Recency.", venue:"ICCIT 2016.", doi:"" },
      { title:"Prediction of Code Smell from Source Code: A Hybrid Approach.", venue:"ICICT4SD 2023.", doi:"" },
      { title:"Impact of Centrality on Automated Vulnerability Detection using CNN.", venue:"ICICT4SD 2023.", doi:"" },
      { title:"Automatic Test Suite Regeneration Technique Ensuring State Model Coverage Using UML Diagrams and Source Syntax.", venue:"ICIEV 2016.", doi:"" }
    ],
    books: [],
    awards: [
      "IIT Academic Excellence Gold Medal Award (MSSE), University of Dhaka, 2019","Best Presentation Award at ICIEV, 2016","Conference aide, 9th Global Forum on Migration and Development, 2016","ICT Division Fellowship for Masters Thesis, 2016–2017","Ruqayyah Memorial Foundation Merit Scholarship, 2016"
    ],
    courses: ["OODP I Theory/Lab","OODP II Theory/Lab","Web Technologies Theory/Lab","Structured Programming Lab","Software Requirement Engineering Lab","DBMS Lab"],
    profileLinks: {},
    lastUpdated: "20/09/2026"
  },
  {
    id: "ju-shamim-kaiser",
    name: "M. Shamim Kaiser, PhD",
    designation: "Professor",
    department: "IIT",
    departmentFull: "Institute of Information Technology, Jahangirnagar University",
    email: "shamimkaiser@juniv.edu",
    photo: "https://juniv.edu/images/faculty/kaiser.jpg",
    bio: "Professor at the Institute of Information Technology, Jahangirnagar University. Research interests include machine learning, data analytics, and IoT.",
    education: ["PhD, Jahangirnagar University", "MSc, Jahangirnagar University", "BSc, Jahangirnagar University"],
    researchAreas: ["Machine Learning", "Data Analytics", "IoT", "Wireless Networks"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: { "Google Scholar": "https://scholar.google.com/citations?user=kaiser" },
    lastUpdated: "20/09/2026"
  },
  {
    id: "ju-rashed-mazumder",
    name: "Rashed Mazumder, PhD",
    designation: "Associate Professor",
    department: "IIT",
    departmentFull: "Institute of Information Technology, Jahangirnagar University",
    email: "rashed@juniv.edu",
    photo: "https://juniv.edu/images/faculty/rashed.jpg",
    bio: "Associate Professor at IIT, Jahangirnagar University. Specializes in cybersecurity, cryptography, and privacy-preserving machine learning.",
    education: ["PhD, Jahangirnagar University", "MSc, Jahangirnagar University"],
    researchAreas: ["Cybersecurity", "Cryptography", "Privacy-Preserving ML", "Federated Learning"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "mist-shahriar-sazzad",
    name: "T. M. Shahriar Sazzad, PhD",
    designation: "Associate Professor",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, MIST",
    email: "shahriar@mist.ac.bd",
    photo: "https://mist.ac.bd/images/faculty/sazzad.jpg",
    bio: "Associate Professor at MIST. Research focuses on AI, deep learning, and computer vision applications.",
    education: ["PhD, MIST", "MSc, MIST"],
    researchAreas: ["Artificial Intelligence", "Deep Learning", "Computer Vision"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "bup-saiful-islam-col",
    name: "Colonel S. M. Saiful Islam",
    designation: "Chairman",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, BUP",
    email: "chairman.cse@bup.edu.bd",
    photo: "https://bup.edu.bd/public/upload/faculty/saiful.jpg",
    bio: "Chairman of the Department of Computer Science and Engineering at BUP. Focuses on data center reliability and energy efficiency.",
    education: ["MSc, BUP", "BSc, BUP"],
    researchAreas: ["Data Centers", "Energy Efficiency", "Reliability Engineering"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "du-mosabber-ahmed",
    name: "Mosabber Uddin Ahmed, PhD",
    designation: "Professor",
    department: "EEE",
    departmentFull: "Department of Electrical and Electronic Engineering, University of Dhaka",
    email: "mosabber@du.ac.bd",
    photo: "https://du.ac.bd/images/faculty/mosabber.jpg",
    bio: "Professor at the University of Dhaka. Research interests include biomedical signal processing and machine learning.",
    education: ["PhD, University of Dhaka", "MSc, University of Dhaka"],
    researchAreas: ["Biomedical Engineering", "Signal Processing", "Machine Learning"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "uftb-abu-yousuf",
    name: "Professor Mohammad Abu Yousuf, PhD",
    designation: "Vice Chancellor",
    department: "UFTB",
    departmentFull: "University of Frontier Technology, Bangladesh (UFTB)",
    email: "vc@uftb.edu.bd",
    photo: "https://uftb.edu.bd/images/vc.jpg",
    bio: "Vice Chancellor of UFTB. Research focuses on AI, medical imaging, and multimodal behavioral analysis.",
    education: ["PhD, University of Dhaka"],
    researchAreas: ["Artificial Intelligence", "Medical Imaging", "Behavioral Analysis"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "ju-musfique-anwar",
    name: "Md. Musfique Anwar, PhD",
    designation: "Professor",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, Jahangirnagar University",
    email: "musfique@juniv.edu",
    photo: "https://juniv.edu/images/faculty/musfique.jpg",
    bio: "Professor at Jahangirnagar University. Specializes in NLP, social network analysis, and machine learning.",
    education: ["PhD, Jahangirnagar University"],
    researchAreas: ["Natural Language Processing", "Social Network Analysis", "Machine Learning"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "ju-mostafizur-rahman",
    name: "Abu Sayed Md. Mostafizur Rahaman, PhD",
    designation: "Professor",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, Jahangirnagar University",
    email: "mostafiz@juniv.edu",
    photo: "https://juniv.edu/images/faculty/mostafiz.jpg",
    bio: "Professor at Jahangirnagar University. Research areas include cybersecurity, privacy, and NLP.",
    education: ["PhD, Jahangirnagar University"],
    researchAreas: ["Cybersecurity", "Privacy", "Natural Language Processing"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "duet-fazlul-siddiqui",
    name: "Fazlul Hasan Siddiqui, PhD",
    designation: "Professor",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, DUET",
    email: "fhsiddiqui@duet.ac.bd",
    photo: "https://duet.ac.bd/images/faculty/fhsiddiqui.jpg",
    bio: "Professor at DUET. Research focuses on AI, multimodal learning, and hallucination mitigation.",
    education: ["PhD, DUET"],
    researchAreas: ["Artificial Intelligence", "Multimodal Learning", "Hallucination Mitigation"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "ju-manowarul-islam",
    name: "Dr. Md. Manowarul Islam",
    designation: "Professor",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, Jagannath University",
    email: "manowarul@cse.jnu.ac.bd",
    photo: "https://juniv.edu/images/faculty/manowarul.jpg",
    bio: "Professor at the Department of CSE, Jagannath University. Research focuses on cybersecurity, federated learning, and retrieval-augmented generation.",
    education: ["PhD, Jagannath University", "MSc, Jagannath University"],
    researchAreas: ["Cybersecurity", "Federated Learning", "RAG"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "du-shafuil-alam",
    name: "Dr. Mohammed Shafuil Alam Khan",
    designation: "Professor",
    department: "IIT",
    departmentFull: "Institute of Information Technology, University of Dhaka",
    email: "shafuil@iit.du.ac.bd",
    photo: "https://iit.du.ac.bd/images/faculty/shafuil.jpg",
    bio: "Professor at IIT, University of Dhaka. Specializes in digital forensics, cloud security, and explainable AI.",
    education: ["PhD, University of Dhaka"],
    researchAreas: ["Digital Forensics", "Cloud Security", "Explainable AI"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "bup-mahabubur-rahman",
    name: "Md. Mahabubur Rahman",
    designation: "Lecturer",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, BUP",
    email: "mahabubur@bup.edu.bd",
    photo: "https://bup.edu.bd/public/upload/faculty/mahabubur.jpg",
    bio: "Lecturer in the Department of CSE at BUP. Research interests include LLM security, malware analysis, and secure payment systems.",
    education: ["MSc, BUP", "BSc, BUP"],
    researchAreas: ["LLM Security", "Malware Analysis", "Secure Payment Systems"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "duet-abul-kashem",
    name: "Dr. Mohammad Abul Kashem",
    designation: "Professor",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, DUET",
    email: "kashem@duet.ac.bd",
    photo: "https://duet.ac.bd/images/faculty/kashem.jpg",
    bio: "Professor at DUET. Research focuses on computer vision, visual grounding, and multimodal learning.",
    education: ["PhD, DUET"],
    researchAreas: ["Computer Vision", "Visual Grounding", "Multimodal Learning"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  },
  {
    id: "mist-mahbubur-rahman",
    name: "Dr. Md. Mahbubur Rahman",
    designation: "Professor",
    department: "CSE",
    departmentFull: "Department of Computer Science and Engineering, MIST",
    email: "mahbubur@mist.ac.bd",
    photo: "https://mist.ac.bd/images/faculty/mahbubur.jpg",
    bio: "Professor at MIST. Specializes in malware detection, dataset generalization, and cybersecurity.",
    education: ["PhD, MIST"],
    researchAreas: ["Malware Detection", "Cybersecurity", "Dataset Generalization"],
    publications: [], conferencePapers: [], books: [], awards: [], courses: [],
    profileLinks: {}, lastUpdated: "20/09/2026"
  }
];

/* ---------------- RESEARCH AREAS ---------------- */
DATA.researchAreas = [
  { name:"Artificial Intelligence", department:"Both", count:8 },
  { name:"Machine Learning", department:"Both", count:9 },
  { name:"Deep Learning", department:"Both", count:7 },
  { name:"Computer Vision", department:"CSE", count:5 },
  { name:"Natural Language Processing", department:"Both", count:6 },
  { name:"Software Engineering", department:"Both", count:5 },
  { name:"Cybersecurity", department:"ICT", count:4 },
  { name:"Signal Processing", department:"ICT", count:4 },
  { name:"Antenna & Radar", department:"ICT", count:3 },
  { name:"Healthcare Analytics", department:"CSE", count:6 },
  { name:"Wireless Sensor Networks", department:"ICT", count:3 },
  { name:"Photonics & Photovoltaics", department:"ICT", count:4 },
  { name:"Graph Neural Networks", department:"CSE", count:2 },
  { name:"Explainable AI", department:"CSE", count:2 },
  { name:"Data Centers", department:"CSE", count:1 },
  { name:"Biomedical Engineering", department:"CSE", count:2 },
  { name:"Digital Forensics", department:"CSE", count:1 },
  { name:"LLM Security", department:"CSE", count:1 }
];

/* ---------------- THESES ---------------- */
DATA.theses = [
  { id:"th-001", title:"Depression Detection from Bangla Social Media Text using Transformer Models", department:"ICT", researchArea:"Natural Language Processing", batch:"2021", year:"2025", supervisorId:"ict-nazneen-akhter", students:["Tanvir Ahmed (24549010119)","Nusrat Jahan (24549010077)"], abstract:"This thesis explores transformer-based architectures for detecting depression indicators in Bangla social media posts.", keywords:["Depression Detection","Bangla NLP","Transformer"], methodology:"Dataset collection, annotation, fine-tuning RoBERTa.", status:"Completed" },
  { id:"th-002", title:"Deep CNN Approach for Camera Model Identification", department:"ICT", researchArea:"Deep Learning", batch:"2022", year:"2025", supervisorId:"ict-maynul-islam", students:["Sadman Rahman (249090057)"], abstract:"A deep convolutional neural network approach for identifying the source camera model.", keywords:["Deep CNN","Transfer Learning","Image Forensics"], methodology:"Pretrained CNN feature extraction.", status:"In Progress" },
  { id:"th-003", title:"Predicting Burn Severity from Skin Images using Convolutional Neural Networks", department:"CSE", researchArea:"Healthcare Analytics", batch:"2022", year:"2026", supervisorId:"cse-sayma-alam-suha", students:["Farhan Hossain (24549010221)","Mim Akter (24549010334)"], abstract:"A CNN-based framework for automated burn severity classification.", keywords:["Burn Severity","CNN","Medical Imaging"], methodology:"Image preprocessing, transfer learning.", status:"In Progress" },
  { id:"th-004", title:"Anti-pattern Detection in Source Code using Hybrid Machine Learning", department:"ICT", researchArea:"Software Engineering", batch:"2021", year:"2024", supervisorId:"ict-nazneen-akhter", students:["Rakib Hasan (24549010142)"], abstract:"This work investigates machine learning classifiers for detecting code anti-patterns.", keywords:["Anti-pattern","Code Quality"], methodology:"Source code metrics extraction.", status:"Completed" },
  { id:"th-005", title:"Butterfly Species Recognition of Bangladesh using Deep Learning", department:"CSE", researchArea:"Computer Vision", batch:"2023", year:"2026", supervisorId:"cse-rumana-yasmin", students:["Ayesha Siddika (24549010551)","Tahmid Chowdhury (24549010622)"], abstract:"Recognition of butterfly species native to Bangladesh.", keywords:["Butterfly","Computer Vision"], methodology:"Dataset creation, augmentation, transfer learning.", status:"Proposal" },
  { id:"th-006", title:"Automatic Test Scenario Generation for Medical Cyber-Physical Systems", department:"CSE", researchArea:"Software Engineering", batch:"2020", year:"2024", supervisorId:"cse-afrina-khatun", students:["Sabbir Ahmed (24549010090)"], abstract:"A technique for generating test scenarios from UML and source syntax.", keywords:["Test Generation","MCPS"], methodology:"Model-based test generation.", status:"Completed" },
  { id:"th-007", title:"ANFIS-based Trust Management for Underwater Wireless Sensor Networks", department:"ICT", researchArea:"Wireless Sensor Networks", batch:"2020", year:"2024", supervisorId:"ict-maynul-islam", students:["Imran Kabir (24549010170)"], abstract:"An adaptive neuro-fuzzy inference system for trust management.", keywords:["UWSN","Trust Management"], methodology:"Simulation-based evaluation.", status:"Completed" },
  { id:"th-008", title:"Numerical Study of WS2 Buffer Layer for CdTe Solar Cells", department:"ICT", researchArea:"Photonics & Photovoltaics", batch:"2022", year:"2025", supervisorId:"ict-saiful-islam", students:["Nafis Iqbal (24549010048)","Sumaiya Noor (24549010291)"], abstract:"A comprehensive numerical study evaluating tungsten disulfide.", keywords:["Solar Cell","WS2"], methodology:"SCAPS-1D simulation.", status:"In Progress" },
  { id:"th-009", title:"Handwritten Chakma Numeral Classification using Genetic Algorithm and CNN", department:"CSE", researchArea:"Computer Vision", batch:"2023", year:"2025", supervisorId:"cse-rumana-yasmin", students:["Rima Chakma (24549010319)"], abstract:"Classification of handwritten Chakma numerals.", keywords:["Chakma","OCR"], methodology:"Dataset collection, feature selection.", status:"In Progress" },
  { id:"th-010", title:"Bug Assignment using Developer Expertise and Source Commit Recency", department:"CSE", researchArea:"Software Engineering", batch:"2021", year:"2024", supervisorId:"cse-afrina-khatun", students:["Mahmudul Hasan (24549010367)"], abstract:"A bug assignment approach combining expertise and recency.", keywords:["Bug Assignment","Mining Software Repositories"], methodology:"Repository mining.", status:"Completed" },
  { id:"th-bice-01", title:"Speech Emotion Recognition in English and Bengali Using Lightweight ML Models for Edge Deployment", department:"CSE", researchArea:"Machine Learning", batch:"BICE-2022", year:"2026", supervisorId:"ju-shamim-kaiser", students:["Subhana Shakil Binita (2254901019)","Gazi Mohammad Abrar Zawad (2254901049)","Mst. Asmin Ara Mim (2254901042)"], abstract:"Speech emotion recognition using lightweight models for edge deployment.", keywords:["Speech Emotion","Edge Deployment"], methodology:"Lightweight ML models.", status:"In Progress" },
  { id:"th-bice-02", title:"Deep Learning-Based Opportunistic Screening of X-ray Images for Osteoporosis Detection", department:"CSE", researchArea:"Healthcare Analytics", batch:"BICE-2022", year:"2026", supervisorId:"ju-shamim-kaiser", students:["Tamim Muntakim (2254901002)","Shahin-Al-Hasan Jubair (2254901080)","Saymon Ahmed (2254901072)"], abstract:"Opportunistic screening for osteoporosis using X-ray images.", keywords:["Osteoporosis","X-ray"], methodology:"Deep learning.", status:"In Progress" },
  { id:"th-bice-03", title:"Low cost Vein detection using IR", department:"CSE", researchArea:"Computer Vision", batch:"BICE-2022", year:"2026", supervisorId:"ju-shamim-kaiser", students:["Fairuz Anika Authoi (2254901069)","Azmain Faik (2254901081)","Anika Afrida (2254901063)"], abstract:"Low cost vein detection using infrared imaging.", keywords:["Vein Detection","IR"], methodology:"IR imaging.", status:"In Progress" },
  { id:"th-bice-04", title:"Federated Semi-Supervised IoT Intrusion Detection Under Privacy and Label Scarcity", department:"CSE", researchArea:"Cybersecurity", batch:"BICE-2022", year:"2026", supervisorId:"ju-rashed-mazumder", students:["Sadia Alam (2254901048)","Fahmida Afrin (2254901118)","Masrur Jaim (2154901004)"], abstract:"Federated semi-supervised learning for IoT intrusion detection.", keywords:["Federated Learning","IoT Intrusion"], methodology:"SHAP-guided feature reduction.", status:"In Progress" },
  { id:"th-bice-05", title:"Enhancing Robustness and Privacy in Malware Detection", department:"CSE", researchArea:"Cybersecurity", batch:"BICE-2022", year:"2026", supervisorId:"ju-rashed-mazumder", students:["MST. Labonno Rahman Oishy (2254901107)","Rabeya Islam Rima (2254901055)","Md. Nazmus Sazzad Naiem (2254901041)"], abstract:"Federated learning for malware detection.", keywords:["Malware Detection","Federated Learning"], methodology:"Ablation studies.", status:"In Progress" },
  { id:"th-bice-06", title:"Automated Detection of Diseases, Drugs and Relation Extraction using Transformer-Based NER", department:"CSE", researchArea:"Natural Language Processing", batch:"BICE-2022", year:"2026", supervisorId:"ju-rashed-mazumder", students:["Shadman Shakib Shaan (2254901132)","Sadia Afrin Nirjhar (2254901065)","Md. Usama Ifaj Nafiue (2254901056)"], abstract:"Transformer-based NER for disease and drug detection.", keywords:["NER","Transformer"], methodology:"Named Entity Recognition.", status:"In Progress" },
  { id:"th-bice-07", title:"Context-Aware Multi-Language Defect Detection", department:"CSE", researchArea:"Software Engineering", batch:"BICE-2022", year:"2026", supervisorId:"ict-nazneen-akhter", students:["Ruponti Muin Nova (2254901038)","Md. Hasibul Islam Mitul (2254901031)","Md Zamiul Hasan (2254901124)"], abstract:"Defect detection using CodeT5 and agentic reasoning.", keywords:["Defect Detection","CodeT5"], methodology:"Interpretable program analysis.", status:"In Progress" },
  { id:"th-bice-08", title:"Real-Time AI-Based Automated Classroom Attendance System", department:"CSE", researchArea:"Computer Vision", batch:"BICE-2022", year:"2026", supervisorId:"ict-nazneen-akhter", students:["Osman Goni (2154901008)","Eshita Islam Keya (2154901114)","Moynuddin Al Masum (2154901129)"], abstract:"Automated classroom attendance using IP-camera video streams.", keywords:["Attendance System","Facial Recognition"], methodology:"Video stream processing.", status:"In Progress" },
  { id:"th-bice-09", title:"A Contrastive Learning Based Approach to Epileptic Seizure Prediction", department:"CSE", researchArea:"Healthcare Analytics", batch:"BICE-2022", year:"2026", supervisorId:"ict-nazneen-akhter", students:["Swarup Mazumder (2254901040)","Md. Abdullah Al Rohan (2254901134)","Ameer Sohail Aurnab (2254901011)"], abstract:"Contrastive learning for epileptic seizure prediction.", keywords:["Epileptic Seizure","Contrastive Learning"], methodology:"Contrastive learning.", status:"In Progress" },
  { id:"th-bice-10", title:"Deploying Distilled AI Models for Email Phishing Detection", department:"CSE", researchArea:"Cybersecurity", batch:"BICE-2022", year:"2026", supervisorId:"mist-shahriar-sazzad", students:["Nasrat Jahan (2254901061)","Md Rasheduzzaman Imran (2254901113)","Md. Murad Jahan (2254901067)"], abstract:"Distilled AI models for email phishing detection.", keywords:["Phishing Detection","Distillation"], methodology:"Model distillation.", status:"In Progress" },
  { id:"th-bice-11", title:"A Comparative Study of Accessibility in Standard and Adaptive User Interfaces", department:"CSE", researchArea:"Human-Computer Interaction", batch:"BICE-2022", year:"2026", supervisorId:"mist-shahriar-sazzad", students:["Mohammad Asif Mahmud (2254901005)","Md Tahsinul Islam (2254901057)","Md. Fardin Islam (2254901087)"], abstract:"Accessibility study for color vision deficiency.", keywords:["Accessibility","UI/UX"], methodology:"Comparative study.", status:"In Progress" },
  { id:"th-bice-12", title:"DFD-Net: A Denoising-Enhanced Deep Learning Framework for Lung Cancer Detection", department:"CSE", researchArea:"Healthcare Analytics", batch:"BICE-2022", year:"2026", supervisorId:"mist-shahriar-sazzad", students:["Lobib Wasef Ullah (2254901036)","Sourav Das Gupta (2254901098)","Md. Azmine Sadik Rakin (2254901052)"], abstract:"Denoising-enhanced deep learning for lung cancer detection.", keywords:["Lung Cancer","CT Images"], methodology:"DFD-Net.", status:"In Progress" },
  { id:"th-bice-13", title:"Bridging the Reliability Gap Between Tier III and Tier IV Data Centers", department:"CSE", researchArea:"Data Centers", batch:"BICE-2022", year:"2026", supervisorId:"bup-saiful-islam-col", students:["Shameha Fatema Shemonty (2254901092)","Abd Al Mohsin Siraj (2254901009)","Md. Mahadi Hasan Shakib (2254901020)"], abstract:"Optimizing secondary reliability factors for data centers.", keywords:["Data Centers","Reliability"], methodology:"Optimization.", status:"In Progress" },
  { id:"th-bice-14", title:"Multi-Model CNN Ensemble with Explainable AI for Automated Tuberculosis Detection", department:"CSE", researchArea:"Healthcare Analytics", batch:"BICE-2022", year:"2026", supervisorId:"du-mosabber-ahmed", students:["Ibnul Labib (2254901062)","Anika Tasnim Mrittika (2254901115)","Nafisa Islam Noor (2054901101)"], abstract:"CNN ensemble with XAI for TB detection.", keywords:["Tuberculosis","Explainable AI"], methodology:"CNN Ensemble.", status:"In Progress" },
  { id:"th-bice-15", title:"Comparative Study of ML and DL Models for Iron Deficiency Anemia Detection", department:"CSE", researchArea:"Healthcare Analytics", batch:"BICE-2022", year:"2026", supervisorId:"du-mosabber-ahmed", students:["Umme Nafisa Anzum Kotha (2154901047)","Muttakin Mahmud (2254901120)","Md. S. A. Noman Siddiki (2254901070)"], abstract:"ML and DL models for anemia detection from palm images.", keywords:["Anemia","Palm Images"], methodology:"Comparative study.", status:"In Progress" },
  { id:"th-bice-16", title:"Multimodal Behavioral Biomarker Analysis for Parkinson's Disease Screening", department:"CSE", researchArea:"Healthcare Analytics", batch:"BICE-2022", year:"2026", supervisorId:"uftb-abu-yousuf", students:["Mridula Mozid (2254901037)","Sunehra Tabassum (2254901047)","Akib Mahmud (2254901021)"], abstract:"Multimodal behavioral biomarkers for Parkinson's screening.", keywords:["Parkinson's","Biomarkers"], methodology:"Multimodal analysis.", status:"In Progress" },
  { id:"th-bice-17", title:"Scalogram-Based Hierarchical Arrhythmia Detection and Risk Stratification", department:"CSE", researchArea:"Healthcare Analytics", batch:"BICE-2022", year:"2026", supervisorId:"uftb-abu-yousuf", students:["Fabiha Tasnim (2254901051)","Umme Farhana Sumaiya (2254901127)","Saif Yeasir Enan (2154901006)"], abstract:"Arrhythmia detection using scalograms and CNN-ViT.", keywords:["Arrhythmia","ECG"], methodology:"CNN-ViT.", status:"In Progress" },
  { id:"th-bice-18", title:"Explainable Deep Learning for Cross-Patient Epilepsy Detection from EEG Signals", department:"CSE", researchArea:"Healthcare Analytics", batch:"BICE-2022", year:"2026", supervisorId:"uftb-abu-yousuf", students:["Shawlin Tabassum (2254901032)","Md. Iftekharul Haque Rimon (2254901084)","Md. Abu Sayed (2154901094)"], abstract:"Explainable DL for cross-patient epilepsy detection.", keywords:["Epilepsy","EEG"], methodology:"Explainable DL.", status:"In Progress" },
  { id:"th-bice-19", title:"Investigating Regional Dialect Bias in Bangla Language Models", department:"CSE", researchArea:"Natural Language Processing", batch:"BICE-2022", year:"2026", supervisorId:"ju-musfique-anwar", students:["Samiul Hossen Sarkar Santo (2254901079)","Afsana Tanjum Anonna (2254901083)","Nishat Tasneem (2254901085)"], abstract:"Investigating dialect bias in Bangla LMs.", keywords:["Dialect Bias","Bangla NLP"], methodology:"Bias evaluation.", status:"In Progress" },
  { id:"th-bice-20", title:"BanglaCounter: A Benchmark Dataset and Transformer-Based Evaluation Framework", department:"CSE", researchArea:"Natural Language Processing", batch:"BICE-2022", year:"2026", supervisorId:"ju-musfique-anwar", students:["Md. Sakib Hasan (2254901060)","Shihaful Islam Ornob (2254901012)","Md. Abdullah Al Noman Khan (2154901024)"], abstract:"Benchmark dataset for Bangla counterspeech.", keywords:["Counterspeech","Bangla NLP"], methodology:"Transformer evaluation.", status:"In Progress" },
  { id:"th-bice-21", title:"Bangla Fake News Detection and Benchmarking", department:"CSE", researchArea:"Natural Language Processing", batch:"BICE-2022", year:"2026", supervisorId:"ju-musfique-anwar", students:["Samia Maliha (2254901043)","Md. Shahrukh Hossain (2254901054)","Md. Shairzil Mia (2254901059)"], abstract:"Explainable fake news detection for Bangla.", keywords:["Fake News","Explainable AI"], methodology:"LLM-adversarially robust approach.", status:"In Progress" },
  { id:"th-bice-22", title:"Defending Bengali Hate Speech Detection Against Adversarial Text Distortion", department:"CSE", researchArea:"Natural Language Processing", batch:"BICE-2022", year:"2026", supervisorId:"ju-mostafizur-rahman", students:["Prithviraj Chowdhury (2254901101)","Jablay Noor Rahman (2254901093)","Aryan Ahmmad Siddique (2254901094)"], abstract:"Defending hate speech detection against adversarial attacks.", keywords:["Hate Speech","Adversarial NLP"], methodology:"Character-Level CTC.", status:"In Progress" },
  { id:"th-bice-23", title:"Patient-Driven Medical Data Sharing: A Zero-Knowledge Consent Framework", department:"CSE", researchArea:"Cybersecurity", batch:"BICE-2022", year:"2026", supervisorId:"ju-mostafizur-rahman", students:["Shafee Ahmed (2254901004)","Ishrat Jahan Binti (2254901071)","Afroza Islam (2254901088)"], abstract:"Zero-knowledge consent framework for medical data.", keywords:["Medical Data","Zero-Knowledge"], methodology:"FHIR interoperability.", status:"In Progress" },
  { id:"th-bice-24", title:"Multi-Layer Forensic Verification of Bangladeshi News Photocards", department:"CSE", researchArea:"Computer Vision", batch:"BICE-2022", year:"2026", supervisorId:"ju-mostafizur-rahman", students:["Sadat Islam Rahin (2254901010)","Md. Shehab Uddin (2254901121)","Md. Mubtasim Abedin Jaowad (2254901123)"], abstract:"Forensic verification of news photocards.", keywords:["Forensics","OCR"], methodology:"Deep learning and OCR.", status:"In Progress" },
  { id:"th-bice-25", title:"Mitigating Hallucination in Multimodal Large Language Models", department:"CSE", researchArea:"Artificial Intelligence", batch:"BICE-2022", year:"2026", supervisorId:"duet-fazlul-siddiqui", students:["Md. Nafees Imtiaz (2254901007)","Md. Taufik Hasan (2254901001)","Md. Raian Alif (2254901035)"], abstract:"Mitigating hallucination in multimodal LLMs.", keywords:["Hallucination","Multimodal LLM"], methodology:"Multimodal learning.", status:"In Progress" },
  { id:"th-cse23a-01", title:"Fused Information Retrieval Technique for Software Bug Localization: A Knowledge Graph-Based Approach to Multi-Signal Context Integration", department:"CSE", researchArea:"Software Engineering", batch:"CSE 2023 A", year:"2026", supervisorId:"ict-nazneen-akhter", students:["Afsana Hena (2252421109)","Mhir Bormon (22524202121)","Lutful Ahmed Nadim (2252421061)"], abstract:"A fused information retrieval technique for software bug localization using knowledge graphs.", keywords:["Bug Localization","Knowledge Graph"], methodology:"Knowledge graph-based approach.", status:"In Progress" },
  { id:"th-cse23a-02", title:"Cross-Dataset Generalization of Diabetic Retinopathy Lesion Segmentation Using Deep Learning Architectures", department:"CSE", researchArea:"Healthcare Analytics", batch:"CSE 2023 A", year:"2026", supervisorId:"cse-rumana-yasmin", students:["Shreya Sarker (2252420109)","Md Tahmidur Rahman Khan (22524202041)","Faiza Mustari (22524202043)"], abstract:"Cross-dataset generalization for diabetic retinopathy lesion segmentation.", keywords:["Diabetic Retinopathy","Deep Learning"], methodology:"Deep learning architectures.", status:"In Progress" },
  { id:"th-cse23a-03", title:"Byzantine-Resilient Federated RAG with Contrastive Verification for Cybersecurity", department:"CSE", researchArea:"Cybersecurity", batch:"CSE 2023 A", year:"2026", supervisorId:"ju-manowarul-islam", students:["Marjia Khatun (22524202071)","Md. Mainul Islam (22524202047)","Md. Alvee Ahnaf Khan (22524202141)"], abstract:"Byzantine-resilient federated RAG for cybersecurity.", keywords:["Federated Learning","RAG","Cybersecurity"], methodology:"Contrastive verification.", status:"In Progress" },
  { id:"th-cse23a-04", title:"Explainable Deep Learning for ECG-Based Cardiac Abnormality Detection Using Time-Series Clinical Data", department:"CSE", researchArea:"Healthcare Analytics", batch:"CSE 2023 A", year:"2026", supervisorId:"cse-rumana-yasmin", students:["Misha Maliha (22524202029)","Jannatul Shanjimom Aurpy (22524202123)","Golam Ali Kibria (22524202045)"], abstract:"Explainable deep learning for ECG-based cardiac abnormality detection.", keywords:["ECG","Explainable AI"], methodology:"Time-series clinical data.", status:"In Progress" },
  { id:"th-cse23a-05", title:"Explainable LLM based digital forensics framework for mobile and cloud evidence analysis with chain of custody preservation", department:"CSE", researchArea:"Digital Forensics", batch:"CSE 2023 A", year:"2026", supervisorId:"ju-mostafizur-rahman", students:["Md. Junayet Hossain Mohit (22524202065)","Iftekhar Ahmed Sourav (22524202107)","Mehar Nigar Anonna (22524202147)"], abstract:"Explainable LLM framework for digital forensics.", keywords:["Digital Forensics","LLM"], methodology:"Chain of custody preservation.", status:"In Progress" },
  { id:"th-cse23a-06", title:"Thesis Topic to be Announced", department:"CSE", researchArea:"Artificial Intelligence", batch:"CSE 2023 A", year:"2026", supervisorId:"du-shafuil-alam", students:["Abdullah Al - Yamin (22524202075)","Shahed Shahrier (22524202143)","Md. Tahmid Alam (22524202151)"], abstract:"Thesis topic yet to be finalized.", keywords:["Pending"], methodology:"Pending.", status:"Proposal" },
  { id:"th-cse23a-07", title:"Thesis Topic to be Announced", department:"CSE", researchArea:"Artificial Intelligence", batch:"CSE 2023 A", year:"2026", supervisorId:"cse-sayma-alam-suha", students:["Towfiq Omar Rakin (22524202131)","Mushfiqur Rahman Sama (22524202117)","Zarin Tasnim Rahman Tuly (22524202139)"], abstract:"Thesis topic yet to be finalized.", keywords:["Pending"], methodology:"Pending.", status:"Proposal" },
  { id:"th-cse23a-08", title:"Dermaxplain: An Explainable Deep Learning Framework for Multi-Class Skin Disease Classification", department:"CSE", researchArea:"Healthcare Analytics", batch:"CSE 2023 A", year:"2026", supervisorId:"cse-rumana-yasmin", students:["Rehnuma Salsabil Binte Obayed (22524202021)","Tahia Zaima (22524202133)","Md. Jonaied Kabir Shanto (22524202049)"], abstract:"Explainable deep learning for skin disease classification.", keywords:["Skin Disease","Explainable AI"], methodology:"Multi-class classification.", status:"In Progress" },
  { id:"th-cse23a-09", title:"An Explainable Hybrid LLM-Based Framework for Automatic Cyberattack Interpretation from System Logs", department:"CSE", researchArea:"Cybersecurity", batch:"CSE 2023 A", year:"2026", supervisorId:"bup-mahabubur-rahman", students:["Farhan Israq Jami (22524202103)","Abid Hasan Ziden (22524202135)","Tashfin Ruaid (22524202059)"], abstract:"Hybrid LLM framework for cyberattack interpretation.", keywords:["Cyberattack","LLM"], methodology:"System log analysis.", status:"In Progress" },
  { id:"th-cse23a-10", title:"A Machine Learning-Based Framework for Pre-Navigation Detection of Malicious QR Codes in Bangla QR Payment Systems", department:"CSE", researchArea:"Cybersecurity", batch:"CSE 2023 A", year:"2026", supervisorId:"bup-mahabubur-rahman", students:["Abdullah Mahmud Yamin (22524202085)","Md. Raisul Islam (22524202091)","Md Mehedi Hasan Foysal (22524202119)","Al Sadique Nuhin (22524202061)"], abstract:"Machine learning for malicious QR code detection.", keywords:["QR Codes","Malicious Detection"], methodology:"Pre-navigation detection.", status:"In Progress" },
  { id:"th-cse23a-11", title:"Dishari: Context-Aware Visual Grounding of Bangla Referring Expressions in Vision Language Models", department:"CSE", researchArea:"Computer Vision", batch:"CSE 2023 A", year:"2026", supervisorId:"duet-abul-kashem", students:["Sumaiya Hossain Anika (22524202089)","Sarowar Hossain Rony (22524202051)","Mashrafi Elahi (22524202137)"], abstract:"Context-aware visual grounding for Bangla referring expressions.", keywords:["Visual Grounding","Vision Language Models"], methodology:"Bangla NLP.", status:"In Progress" },
  { id:"th-cse23a-12", title:"Cross Dataset Generalization in Windows Malware Detection Through Selective Source Invariance", department:"CSE", researchArea:"Cybersecurity", batch:"CSE 2023 A", year:"2026", supervisorId:"mist-mahbubur-rahman", students:["M Tasdik Muttaqi (22524202001)","Abdul Hakim Shifat (22524202129)","Shahrier Emon (22524202095)"], abstract:"Cross dataset generalization for Windows malware detection.", keywords:["Malware Detection","Dataset Generalization"], methodology:"Selective source invariance.", status:"In Progress" }
];

/* ---------------- USERS ---------------- */
DATA.users = {
  student: {
    name: "Md. Sadman Rahman",
    studentId: "249090057",
    email: "sadman.ict22@bup.edu.bd",
    department: "ICT",
    batch: "2022",
    thesisId: "th-002",
    supervisorId: "ict-maynul-islam"
  },
  supervisor: { facultyId: "ict-maynul-islam" },
  admin: { name: "System Administrator", role: "Administrator" }
};

/* ---------------- STUDENTS ---------------- */
DATA.students = [
  { name:"INTASAR MOSTAFIZ", id:"24524203112", dept:"CSE" },
  { name:"Monsur Hasan Hadi", id:"24524203149", dept:"CSE" },
  { name:"Shamsul Islam Fahim", id:"24524203180", dept:"CSE" },
  { name:"Syeda Mohsina Tahsin", id:"24524203107", dept:"CSE" },
  { name:"Mahfuz Hossain Antor", id:"24524203158", dept:"CSE" },
  { name:"Mushfiq Iqbal", id:"24524203126", dept:"CSE" },
  { name:"Sadman Ahmed Sebaz", id:"24524203154", dept:"CSE" },
  { name:"Samia Sultana", id:"24524203156", dept:"CSE" },
  { name:"MD.Nafiul Islam", id:"24524203167", dept:"CSE" },
  { name:"Mehedi Hassan Rafi", id:"24524203182", dept:"CSE" },
  { name:"Md Amdadul Haque", id:"24549010119", dept:"ICT" },
  { name:"Khalid Hasan", id:"24549010067", dept:"ICT" },
  { name:"MD NAZMUS SHAKIB", id:"24549010125", dept:"ICT" },
  { name:"Shahriar Onik", id:"24549010015", dept:"ICT" },
  { name:"Kazi Shadman Sakib", id:"24549010065", dept:"ICT" },
  { name:"Labib Afnan", id:"24549010077", dept:"ICT" },
  { name:"Partho Sarothi Ghosh", id:"24549010107", dept:"ICT" },
  { name:"Suria Sultana", id:"24549010108", dept:"ICT" }
];

/* ---------------- TEAMS ---------------- */
DATA.teams = [
  { id:"team-001", thesisId:"th-002", members:[
    { name:"Md. Sadman Rahman", sid:"249090057", role:"Team Lead" },
    { name:"Arafat Hossain", sid:"24549010271", role:"Documentation" },
    { name:"Sadia Islam", sid:"24549010353", role:"Data & Experiments" }
  ]}
];

/* ---------------- TASKS ---------------- */
DATA.tasks = [
  { id:"t1", title:"Finalize topic and submit proposal", teamId:"team-001", assignee:"Team", due:"15/02/2026", status:"Completed", milestone:"Proposal Submission" },
  { id:"t2", title:"Literature review draft (15 papers)", teamId:"team-001", assignee:"Sadia Islam", due:"28/02/2026", status:"Completed", milestone:"Literature Review" },
  { id:"t3", title:"Dataset collection and cleaning", teamId:"team-001", assignee:"Arafat Hossain", due:"20/03/2026", status:"In Progress", milestone:"Research / Implementation" },
  { id:"t4", title:"Implement baseline CNN model", teamId:"team-001", assignee:"Md. Sadman Rahman", due:"05/04/2026", status:"In Progress", milestone:"Research / Implementation" },
  { id:"t5", title:"Progress report submission", teamId:"team-001", assignee:"Team", due:"18/04/2026", status:"To Do", milestone:"Progress Submission" },
  { id:"t6", title:"Ablation study and result tables", teamId:"team-001", assignee:"Sadia Islam", due:"02/05/2026", status:"To Do", milestone:"Research / Implementation" },
  { id:"t7", title:"Draft paper for supervisor review", teamId:"team-001", assignee:"Team", due:"20/05/2026", status:"To Do", milestone:"Revision" }
];

/* ---------------- MILESTONES ---------------- */
DATA.milestones = [
  { label:"Topic Proposal", date:"10/01/2026", status:"done" },
  { label:"Supervisor Assignment", date:"22/01/2026", status:"done" },
  { label:"Proposal Submission", date:"15/02/2026", status:"done" },
  { label:"Literature Review", date:"28/02/2026", status:"done" },
  { label:"Research / Implementation", date:"01/03/2026 – 15/05/2026", status:"current" },
  { label:"Progress Submission", date:"18/04/2026", status:"upcoming" },
  { label:"Revision", date:"20/05/2026", status:"upcoming" },
  { label:"Final Submission", date:"15/06/2026", status:"upcoming" },
  { label:"Viva / Defense", date:"28/06/2026", status:"upcoming" },
  { label:"Completed", date:"12/12/2026", status:"upcoming" }
];

/* ---------------- MEETINGS ---------------- */
DATA.meetings = [
  { id:"m1", title:"Weekly Progress Meeting", teamId:"team-001", date:"05/03/2026", time:"10:30 AM", location:"ICT Lab 402", agenda:"Dataset progress, model selection" },
  { id:"m2", title:"Literature Review Review Session", teamId:"team-001", date:"12/03/2026", time:"11:00 AM", location:"Faculty Room 2", agenda:"Feedback on lit review draft" },
  { id:"m3", title:"Milestone Review", teamId:"team-001", date:"16/04/2026", time:"02:00 PM", location:"Online (Meet)", agenda:"Progress report review" },
  { id:"m4", title:"Final Defense Preparation", teamId:"team-001", date:"07/03/2027", time:"09:00 AM", location:"Seminar Hall", agenda:"Defense rehearsal and final review" }
];

/* ---------------- DOCUMENTS ---------------- */
DATA.documents = [
  { id:"d1", name:"Thesis_Proposal_v2.pdf", teamId:"team-001", size:"1.2 MB", uploaded:"14/02/2026", uploadedBy:"Team" },
  { id:"d2", name:"Literature_Review_Draft.pdf", teamId:"team-001", size:"820 KB", uploaded:"27/02/2026", uploadedBy:"Sadia Islam" },
  { id:"d3", name:"Dataset_Description.pdf", teamId:"team-001", size:"410 KB", uploaded:"10/03/2026", uploadedBy:"Arafat Hossain" },
  { id:"d4", name:"Progress_Report_Outline.docx", teamId:"team-001", size:"120 KB", uploaded:"18/03/2026", uploadedBy:"Md. Sadman Rahman" }
];

/* ---------------- ANNOUNCEMENTS ---------------- */
DATA.announcements = [
  { id:"a1", title:"Thesis Proposal Defense Schedule Announced", date:"20/02/2026", body:"Proposal defense for ICT and CSE 2025-2026 batches will take place on 05/03/2026 in Room 402. Students must submit a soft copy of the proposal 48 hours prior.", audience:"All" },
  { id:"a2", title:"Revised Progress Report Template", date:"01/03/2026", body:"The department has published a revised progress report template. Please use the updated format from the Documents section.", audience:"Students" },
  { id:"a3", title:"Supervisor Meeting Reminder", date:"04/03/2026", body:"All teams are requested to complete their weekly supervisor meeting before Friday.", audience:"Students" },
  { id:"a4", title:"Final Defense Schedule for 2026-2027", date:"15/09/2026", body:"The final viva/defense for ongoing theses is scheduled for 07/03/2027. Teams must submit the final report by 15/02/2027.", audience:"All" }
];

/* ---------------- NOTIFICATIONS ---------------- */
DATA.notifications = [
  { id:"n1", type:"Task Deadline", text:"Progress report submission due 18/04/2026.", time:"2 days ago" },
  { id:"n2", type:"Supervisor Feedback", text:"Md. Maynul Islam added comments on Progress Report Outline.", time:"4 days ago" },
  { id:"n3", type:"Revision Requested", text:"Literature Review Draft requires revision.", time:"6 days ago" },
  { id:"n4", type:"Meeting Scheduled", text:"Weekly Progress Meeting on 05/03/2026, 10:30 AM.", time:"1 week ago" },
  { id:"n5", type:"Announcement", text:"Revised Progress Report Template published.", time:"1 week ago" },
  { id:"n6", type:"Thesis Update", text:"Final Defense scheduled for 07/03/2027.", time:"2 weeks ago" }
];

/* ---------------- FEEDBACK ---------------- */
DATA.feedback = [
  { id:"f1", teamId:"team-001", from:"ict-maynul-islam", date:"15/03/2026", on:"Progress Report Outline", comment:"Good structure. Please expand the methodology section and add a table of evaluated models.", status:"Revision Required" },
  { id:"f2", teamId:"team-001", from:"ict-maynul-islam", date:"02/03/2026", comment:"Adequate coverage. Add 3–4 recent papers from 2024–2025 and improve synthesis instead of listing.", on:"Literature Review Draft", status:"Revision Required" },
  { id:"f3", teamId:"team-001", from:"ict-maynul-islam", date:"16/02/2026", on:"Thesis Proposal v2", comment:"Approved. Proceed to literature review.", status:"Approved" }
];

/* ---------------- SUPERVISOR RATINGS ---------------- */
DATA.ratings = [
  { id:"r1", supervisorId:"ju-shamim-kaiser", studentName:"Subhana Shakil Binita", date:"10/05/2026", overall:5, availability:5, communication:5, guidance:5, review:"Prof. Kaiser is extremely knowledgeable and provides clear direction. His guidance helped us structure our research effectively and secure the best paper award." },
  { id:"r2", supervisorId:"ju-shamim-kaiser", studentName:"Tamim Muntakim", date:"12/05/2026", overall:4, availability:4, communication:4, guidance:5, review:"Very supportive of our ideas and always encourages independent thinking. Meeting schedules can sometimes be tight, but the feedback quality is exceptional." },
  { id:"r3", supervisorId:"ict-nazneen-akhter", studentName:"Ruponti Muin Nova", date:"08/05/2026", overall:5, availability:5, communication:5, guidance:5, review:"Ma'am is incredibly patient and helpful. She guided us through every step of the NLP pipeline and was always available for doubts." },
  { id:"r4", supervisorId:"ict-nazneen-akhter", studentName:"Osman Goni", date:"15/05/2026", overall:4, availability:3, communication:5, guidance:4, review:"The feedback is always detailed and constructive. Sometimes it takes a while to get a meeting slot, but the quality of guidance is worth the wait." },
  { id:"r5", supervisorId:"cse-sayma-alam-suha", studentName:"Farhan Hossain", date:"02/05/2026", overall:5, availability:5, communication:5, guidance:5, review:"Excellent mentorship. She helped us a lot with the experimental design and was very encouraging throughout the thesis." },
  { id:"r6", supervisorId:"cse-sayma-alam-suha", studentName:"Mim Akter", date:"14/05/2026", overall:4, availability:4, communication:4, guidance:5, review:"Very knowledgeable and helpful. Strict about deadlines, which is actually helpful for staying on track, though the workload expectation can be demanding." },
  { id:"r7", supervisorId:"ju-rashed-mazumder", studentName:"Sadia Alam", date:"18/05/2026", overall:5, availability:5, communication:5, guidance:5, review:"Sir's expertise in cybersecurity and federated learning was invaluable. He provided great insights for our ablation studies." },
  { id:"r8", supervisorId:"bup-saiful-islam-col", studentName:"Shameha Fatema Shemonty", date:"20/05/2026", overall:4, availability:3, communication:4, guidance:5, review:"His industry experience is a huge plus. The feedback is always practical and focused on real-world applicability." }
];