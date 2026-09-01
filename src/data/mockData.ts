import { Department, Doctor, Facility, FacilityGalleryItem, BlogArticle, Testimonial, FAQItem } from '../types';

export const HOSPITAL_INFO = {
  name: 'Dar Al Dawa Medical Center',
  tagline: 'Redefining Healthcare, One Patient at a Time.',
  secondaryTagline: 'Your Health. Our Priority.',
  emergencyTagline: "We're Here When It Matters Most.",
  address: '34 Hadayat Ullah, Block Mustafa Town, Lahore, Pakistan',
  city: 'Lahore, Pakistan',
  phones: ['+92 42 35413999', '0311 9944897'],
  primaryPhone: '+92 42 35413999',
  mobilePhone: '0311 9944897',
  emergencyPhone: '+92 42 35413999',
  emails: ['info@dar-al-dawa.com', 'daraldawaofficial@gmail.com'],
  careersEmail: 'careers@dar-al-dawa.com',
  website: 'dar-al-dawa.com',
  hours: 'Monday – Sunday: 08:00 AM – 12:00 AM (Midnight)',
  emergencyHours: '24/7 Emergency Services',
  stats: {
    patientsServed: '10,000+',
    specialties: '10+',
    expertDoctors: '20+',
    emergencyCare: '24/7',
    satisfactionRate: '98%',
    yearsOfService: '15+'
  },
  socials: {
    instagram: 'https://instagram.com/dar_al_dawa',
    instagramHandle: '@dar_al_dawa',
    youtube: 'https://youtube.com/@dar-al-dawa',
    youtubeHandle: '@dar-al-dawa',
    linkedin: 'https://linkedin.com/company/dar-al-dawa',
    linkedinHandle: '/dar-al-dawa',
    facebook: 'https://facebook.com/daraldawa.medicalcenter',
    facebookHandle: '/daraldawa.medicalcenter',
    whatsapp: 'https://wa.me/924235413999?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment%20at%20Dar%20Al%20Dawa%20Medical%20Center%20Lahore.'
  }
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'medical-specialties',
    name: 'Medical Specialties',
    category: 'medical',
    icon: 'Stethoscope',
    description: 'Our Medical Specialties department provides expert care across a broad spectrum of internal medicine conditions. From cardiology and neurology to general surgery and oncology, our consultants use the latest clinical protocols to deliver accurate diagnosis and effective treatment.',
    conditions: ['Cardiology', 'Neurology', 'General Surgery', 'Oncology', 'Anesthesiology', 'Dermatology', 'Internal Medicine'],
    leadDoctor: 'Prof. Khalid Masud Gondal',
    leadDoctorRole: 'Head of General Surgery',
    hours: 'Mon–Sat: 9:00 AM – 8:00 PM',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dental-specialties',
    name: 'Dental Specialties',
    category: 'dental',
    icon: 'Smile',
    description: 'Our Dental department offers the full spectrum of oral healthcare — from routine check-ups and professional cleaning to advanced restorative and cosmetic procedures. Our dental team ensures a comfortable, anxiety-free experience for patients of all ages.',
    conditions: ['Teeth Cleaning', 'Dental Fillings', 'Root Canal Therapy', 'Braces & Aligners', 'Dental Implants', 'Veneers', 'Teeth Whitening', 'Extractions'],
    leadDoctor: 'Dr. Bilal Tariq',
    leadDoctorRole: 'Dental Surgeon & Orthodontics',
    hours: 'Mon–Sat: 10:00 AM – 9:00 PM',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'facial-aesthetics',
    name: 'Facial Aesthetics',
    category: 'aesthetic',
    icon: 'Sparkles',
    description: 'Our Facial Aesthetics department offers science-backed cosmetic and restorative treatments to help you look and feel your best. Administered by certified specialists, our procedures are safe, precise, and designed for natural-looking results.',
    conditions: ['Botox & Dysport', 'Dermal Fillers', 'Chemical Peels', 'Laser Skin Resurfacing', 'Skin Brightening', 'Acne Scar Treatment', 'PRP Therapy'],
    leadDoctor: 'Dr. Sana Mir',
    leadDoctorRole: 'Consultant Aesthetic Physician',
    hours: 'Mon–Sat: 11:00 AM – 7:00 PM',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gyn-obs',
    name: 'GYN & OBS',
    category: 'gyn_obs',
    icon: 'HeartHandshake',
    description: "Dar Al Dawa's GYN & OBS department provides comprehensive care for women at every stage of life. From prenatal care and safe delivery to gynecological screenings and reproductive health, our female-friendly environment ensures dignity and expert medical attention.",
    conditions: ['Prenatal & Postnatal Care', 'Normal & C-Section Delivery', 'PCOD & PCOS', 'Uterine Fibroids', 'Menstrual Disorders', 'Pap Smear Screenings', 'Infertility Consultation'],
    leadDoctor: 'Dr. Fatima Zahra',
    leadDoctorRole: 'Consultant Gynecologist & Obstetrician',
    hours: 'Mon–Sun: 9:00 AM – 9:00 PM (Emergency 24/7)',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'diabetology',
    name: 'Diabetology',
    category: 'diabetology',
    icon: 'Activity',
    description: 'Our Diabetology unit specializes in the comprehensive management of diabetes mellitus (Type 1 & 2) and related hormonal disorders. We provide personalized treatment plans, nutritional guidance, and continuous monitoring to help patients achieve stable blood sugar and a healthier lifestyle.',
    conditions: ['Type 1 & 2 Diabetes', 'HbA1c Monitoring & Control', 'Thyroid Disorders', 'Insulin Management', 'Metabolic Syndrome', 'Diabetic Neuropathy & Foot Care', 'Obesity Management'],
    leadDoctor: 'Dr. Amar Sethi',
    leadDoctorRole: 'Senior Consultant Diabetologist',
    hours: 'Mon–Sat: 10:00 AM – 6:00 PM',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pulmonology',
    name: 'Pulmonology',
    category: 'pulmonology',
    icon: 'Wind',
    description: 'Our Pulmonology department diagnoses and treats the full range of respiratory conditions. Whether you suffer from asthma, COPD, sleep apnea, or a chronic lung infection, our pulmonologist will develop an individualized treatment plan to improve your breathing and quality of life.',
    conditions: ['Asthma & Allergies', 'COPD (Chronic Bronchitis)', 'Pneumonia', 'Tuberculosis Management', 'Sleep Apnea & CPAP', 'Chronic Cough', 'Pulmonary Fibrosis'],
    leadDoctor: 'Dr. Iqra Anwar',
    leadDoctorRole: 'Consultant Pulmonologist',
    hours: 'Mon–Sat: 11:00 AM – 7:00 PM',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    category: 'pediatrics',
    icon: 'Baby',
    description: 'Our Pediatrics department is dedicated to the health and well-being of infants, children, and adolescents. Our child-friendly environment and compassionate staff ensure that your child receives the gentlest, most effective care possible.',
    conditions: ['Well-Child Check-ups', 'EPI & Extended Vaccinations', 'Pediatric Fever Management', 'Nutritional & Growth Guidance', 'Childhood Infections', 'Neonatal Care'],
    leadDoctor: 'Dr. Muhammad Bilal Raza',
    leadDoctorRole: 'Consultant Pediatrician',
    hours: 'Mon–Sun: 9:00 AM – 9:00 PM',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'radiology',
    name: 'Radiology',
    category: 'radiology',
    icon: 'Radio',
    description: 'Our Radiology department offers a full suite of diagnostic imaging services, enabling accurate diagnosis and treatment planning. Using advanced technology operated by expert radiologists, we deliver fast, reliable imaging results.',
    conditions: ['Digital X-Ray', 'Color Doppler Ultrasound', 'CT Scan & 3D Imaging', 'Diagnostic MRI Support', '12-Lead ECG', 'Echocardiography', 'Anomaly Scans'],
    leadDoctor: 'Dr. Syed Zain Hassan Zaidi',
    leadDoctorRole: 'Chief Consultant Radiologist',
    hours: 'Mon–Sun: 8:00 AM – 10:00 PM (Emergency X-ray 24/7)',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'urology',
    name: 'Urology',
    category: 'urology',
    icon: 'Microscope',
    description: 'Our Urology team provides expert diagnosis and treatment for conditions affecting the urinary tract and male reproductive system. From kidney stones and UTIs to prostate health, our urologist delivers minimally invasive, effective solutions.',
    conditions: ['Kidney Stones & Lithotripsy', 'Recurrent UTIs', 'Prostate Enlargement (BPH)', 'Bladder Disorders', 'Urinary Incontinence', 'Male Reproductive Health', 'Urological Endoscopy'],
    leadDoctor: 'Dr. Amaghan Amin',
    leadDoctorRole: 'Consultant Urologist & Andrologist',
    hours: 'Mon–Sat: 2:00 PM – 8:00 PM',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    category: 'ent',
    icon: 'Headphones',
    description: 'Our ENT specialists diagnose and treat a comprehensive range of ear, nose, and throat conditions. Using advanced endoscopic equipment, we provide precise assessments and minimally invasive treatments for optimal recovery.',
    conditions: ['Chronic Sinusitis', 'Hearing Loss & Tinnitus', 'Tonsillitis & Adenoids', 'Nasal Polyps & Deviated Septum', 'Voice & Throat Disorders', 'Ear Infections & Discharge', 'Endoscopic Sinus Surgery'],
    leadDoctor: 'Prof. Dr. Mansoor Basir Pal',
    leadDoctorRole: 'Professor & Head of ENT',
    hours: 'Mon–Sat: 3:00 PM – 8:00 PM',
    image: 'https://images.unsplash.com/photo-1582719202047-76d3432ee323?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'oncology',
    name: 'Oncology',
    category: 'oncology',
    icon: 'Dna',
    description: 'Our Oncology department is committed to delivering compassionate, evidence-based cancer screening, diagnosis, and systemic therapy guidance. Working alongside surgical and radiology colleagues, we ensure a holistic oncology pathway.',
    conditions: ['Cancer Screenings & Early Detection', 'Chemotherapy Guidance', 'Breast Health Evaluations', 'Palliative & Supportive Care', 'Tumor Board Review', 'Post-Treatment Surveillance'],
    leadDoctor: 'Dr. Asma Rashid',
    leadDoctorRole: 'Consultant Medical Oncologist',
    hours: 'Mon–Sat: 10:00 AM – 4:00 PM',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'anesthesiology',
    name: 'Anesthesiology & Critical Care',
    category: 'anesthesiology',
    icon: 'ShieldCheck',
    description: 'Providing safe sedation, monitored anesthesia, and postoperative pain management across all surgical procedures. Our anesthesiologists ensure patient safety in operating theaters and recovery units around the clock.',
    conditions: ['Pre-operative Evaluation', 'General & Regional Anesthesia', 'Epidural Analgesia for Labor', 'Post-operative Pain Management', 'Critical Care Monitoring', 'Day Surgery Sedation'],
    leadDoctor: 'Dr. Tariq Mahmood',
    leadDoctorRole: 'Chief of Anesthesiology',
    hours: '24/7 On-Call & Scheduled Theaters',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'prof-khalid-masud-gondal',
    name: 'Prof. Khalid Masud Gondal',
    specialty: 'General Surgery',
    departmentId: 'medical-specialties',
    departmentName: 'Medical Specialties / General Surgery',
    qualification: 'MBBS, FCPS (Surgery), FRCS, FICS',
    experience: '28+ Years Experience',
    timings: 'Mon–Sat: 4:00 PM – 8:00 PM',
    phone: '+92 42 35413999',
    email: 'khalid.gondal@dar-al-dawa.com',
    bio: 'Prof. Khalid Masud Gondal is a distinguished surgical consultant and academic leader in Pakistan with over 28 years of clinical excellence. Renowned for his expertise in advanced laparoscopic, gastrointestinal, and general surgical procedures, he brings world-class precision and compassionate surgical care to Dar Al Dawa Medical Center.',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    specializations: ['Advanced Laparoscopic Surgery', 'Gastrointestinal Surgery', 'Hernia Repairs & Complex Abdominal Wall', 'Thyroid & Gallbladder Procedures'],
    degrees: [
      { degree: 'MBBS', institution: 'King Edward Medical College, Lahore', year: '1986' },
      { degree: 'FCPS (General Surgery)', institution: 'College of Physicians and Surgeons Pakistan', year: '1992' },
      { degree: 'FRCS', institution: 'Royal College of Surgeons', year: '1998' }
    ],
    schedule: [
      { day: 'Monday', morning: 'Surgery / Theaters', evening: '4:00 PM – 8:00 PM' },
      { day: 'Tuesday', morning: 'Surgery / Theaters', evening: '4:00 PM – 8:00 PM' },
      { day: 'Wednesday', morning: 'Surgery / Theaters', evening: '4:00 PM – 8:00 PM' },
      { day: 'Thursday', morning: 'Surgery / Theaters', evening: '4:00 PM – 8:00 PM' },
      { day: 'Friday', morning: 'Surgery / Theaters', evening: '4:00 PM – 8:00 PM' },
      { day: 'Saturday', morning: 'Special Consultations', evening: '4:00 PM – 7:00 PM' }
    ]
  },
  {
    id: 'dr-muhammad-nausherwan-adil',
    name: 'Dr. Muhammad Nausherwan Adil',
    specialty: 'Eye Specialist / Ophthalmology',
    departmentId: 'medical-specialties',
    departmentName: 'Ophthalmology / Eye Clinic',
    qualification: 'MBBS, FCPS (Ophthalmology)',
    experience: '16+ Years Experience',
    timings: 'Mon–Sat: 5:00 PM – 9:00 PM',
    phone: '+92 42 35413999',
    email: 'nausherwan.adil@dar-al-dawa.com',
    bio: 'Dr. Muhammad Nausherwan Adil is a highly skilled ophthalmologist specializing in comprehensive eye diagnostics, refractive evaluations, glaucoma management, cataract surgical solutions, and diabetic retinopathy screening.',
    image: 'https://images.pexels.com/photos/6234616/pexels-photo-6234616.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    specializations: ['Cataract Surgery & Phaco', 'Glaucoma Screening & Management', 'Diabetic Eye Care', 'Refractive Vision Correction'],
    degrees: [
      { degree: 'MBBS', institution: 'Allama Iqbal Medical College, Lahore', year: '2004' },
      { degree: 'FCPS (Ophthalmology)', institution: 'College of Physicians and Surgeons Pakistan', year: '2010' }
    ],
    schedule: [
      { day: 'Monday to Friday', morning: 'Procedures', evening: '5:00 PM – 9:00 PM' },
      { day: 'Saturday', morning: 'Consultation', evening: '5:00 PM – 8:00 PM' }
    ]
  },
  {
    id: 'dr-amaghan-amin',
    name: 'Dr. Amaghan Amin',
    specialty: 'Urology & Andrology',
    departmentId: 'urology',
    departmentName: 'Urology',
    qualification: 'MBBS, FCPS (Urology), MRCS',
    experience: '14+ Years Experience',
    timings: 'Mon–Sat: 2:00 PM – 8:00 PM',
    phone: '+92 42 35413999',
    email: 'amaghan.amin@dar-al-dawa.com',
    bio: 'Dr. Amaghan Amin is an esteemed consultant urologist known for his patient-first approach to kidney stone interventions, prostate treatment, urinary tract anomalies, and minimally invasive endourology.',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    specializations: ['Endoscopic Kidney Stone Removal', 'TURP (Prostate Resection)', 'Urinary Incontinence & Stricture Treatment', 'Male Infertility & Sexual Health'],
    degrees: [
      { degree: 'MBBS', institution: 'Services Institute of Medical Sciences', year: '2008' },
      { degree: 'FCPS (Urology)', institution: 'CPSP Pakistan', year: '2015' }
    ],
    schedule: [
      { day: 'Monday to Saturday', morning: 'Uro-Procedures', evening: '2:00 PM – 8:00 PM' }
    ]
  },
  {
    id: 'dr-iqra-anwar',
    name: 'Dr. Iqra Anwar',
    specialty: 'Pulmonology',
    departmentId: 'pulmonology',
    departmentName: 'Pulmonology & Respiratory Care',
    qualification: 'MBBS, FCPS (Pulmonology)',
    experience: '12+ Years Experience',
    timings: 'Mon–Sat: 11:00 AM – 7:00 PM',
    phone: '+92 42 35413999',
    email: 'iqra.anwar@dar-al-dawa.com',
    bio: 'Dr. Iqra Anwar is a caring pulmonologist dedicated to diagnosing and managing chronic chest infections, asthma, COPD, sleep-disordered breathing, post-viral respiratory complications, and allergies.',
    image: 'https://images.pexels.com/photos/5214968/pexels-photo-5214968.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    specializations: ['Asthma Management & Spirometry', 'COPD & Pulmonary Rehabilitation', 'Tuberculosis Care', 'Sleep Apnea & CPAP Support'],
    degrees: [
      { degree: 'MBBS', institution: 'Fatima Jinnah Medical University, Lahore', year: '2010' },
      { degree: 'FCPS (Pulmonology)', institution: 'CPSP Pakistan', year: '2016' }
    ],
    schedule: [
      { day: 'Monday to Saturday', morning: '11:00 AM – 2:00 PM', evening: '4:00 PM – 7:00 PM' }
    ]
  },
  {
    id: 'prof-dr-mansoor-basir-pal',
    name: 'Prof. Dr. Mansoor Basir Pal',
    specialty: 'ENT Specialist',
    departmentId: 'ent',
    departmentName: 'ENT (Ear, Nose & Throat)',
    qualification: 'MBBS, DLO, FCPS (Oto-Rhino-Laryngology)',
    experience: '25+ Years Experience',
    timings: 'Mon–Sat: 3:00 PM – 8:00 PM',
    phone: '+92 42 35413999',
    email: 'mansoor.pal@dar-al-dawa.com',
    bio: 'Prof. Dr. Mansoor Basir Pal is a senior professor of ENT with extensive experience in microscopic ear surgeries, endoscopic sinus surgery, voice disorder therapies, and pediatric airway care.',
    image: 'https://images.pexels.com/photos/4270371/pexels-photo-4270371.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    specializations: ['Endoscopic Sinus Surgery (FESS)', 'Microscopic Tympanoplasty & Mastoidectomy', 'Tonsillectomy & Adenoidectomy', 'Allergic Rhinitis & Vertigo'],
    degrees: [
      { degree: 'MBBS', institution: 'King Edward Medical College, Lahore', year: '1989' },
      { degree: 'FCPS (ENT)', institution: 'College of Physicians and Surgeons Pakistan', year: '1995' }
    ],
    schedule: [
      { day: 'Monday to Saturday', morning: 'ENT Surgeries', evening: '3:00 PM – 8:00 PM' }
    ]
  },
  {
    id: 'dr-syed-zain-hassan-zaidi',
    name: 'Dr. Syed Zain Hassan Zaidi',
    specialty: 'Radiologist',
    departmentId: 'radiology',
    departmentName: 'Radiology & Imaging',
    qualification: 'MBBS, FCPS (Diagnostic Radiology)',
    experience: '15+ Years Experience',
    timings: 'Mon–Sun: 8:00 AM – 4:00 PM',
    phone: '+92 42 35413999',
    email: 'zain.zaidi@dar-al-dawa.com',
    bio: 'Dr. Syed Zain Hassan Zaidi heads the diagnostic imaging services at Dar Al Dawa, delivering highly reliable ultrasound, Doppler, CT, and digital radiography evaluations with rapid turnaround.',
    image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    specializations: ['Doppler & 4D Ultrasound', 'Abdominal & Pelvic CT Analysis', 'Musculoskeletal Radiology', 'Image-Guided Fine Needle Aspirations'],
    degrees: [
      { degree: 'MBBS', institution: 'Nishtar Medical University', year: '2007' },
      { degree: 'FCPS (Radiology)', institution: 'CPSP Pakistan', year: '2014' }
    ],
    schedule: [
      { day: 'Monday to Sunday', morning: '8:00 AM – 2:00 PM', evening: 'Emergency Reporting On-Call' }
    ]
  },
  {
    id: 'dr-amar-sethi',
    name: 'Dr. Amar Sethi',
    specialty: 'Diabetology & Endocrinology',
    departmentId: 'diabetology',
    departmentName: 'Diabetology',
    qualification: 'MBBS, MCPS, MSc Diabetes (UK)',
    experience: '18+ Years Experience',
    timings: 'Mon–Sat: 10:00 AM – 6:00 PM',
    phone: '+92 42 35413999',
    email: 'amar.sethi@dar-al-dawa.com',
    bio: 'Dr. Amar Sethi is an authority on diabetes management, metabolic balance, thyroid dysfunction, and diabetic complications prevention, emphasizing individualized diet plans and lifestyle coaching.',
    image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    specializations: ['Type 1 & Type 2 Diabetes', 'Gestational Diabetes in Pregnancy', 'Thyroid & Hormonal Imbalances', 'Preventive Diabetic Foot Care'],
    degrees: [
      { degree: 'MBBS', institution: 'Punjab Medical College', year: '2003' },
      { degree: 'MSc Diabetes & Endocrinology', institution: 'University of South Wales, UK', year: '2012' }
    ],
    schedule: [
      { day: 'Monday to Saturday', morning: '10:00 AM – 2:00 PM', evening: '3:00 PM – 6:00 PM' }
    ]
  },
  {
    id: 'dr-asma-rashid',
    name: 'Dr. Asma Rashid',
    specialty: 'Oncologist',
    departmentId: 'oncology',
    departmentName: 'Oncology',
    qualification: 'MBBS, FCPS (Medical Oncology)',
    experience: '13+ Years Experience',
    timings: 'Mon–Sat: 10:00 AM – 4:00 PM',
    phone: '+92 42 35413999',
    email: 'asma.rashid@dar-al-dawa.com',
    bio: 'Dr. Asma Rashid is a compassionate oncologist focused on personalized systemic cancer care, early tumor detection, holistic palliative therapy, and patient family counseling.',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    specializations: ['Breast & Gynecological Oncology', 'Chemotherapy Protocol Optimization', 'Cancer Screening & Prevention', 'Palliative Symptom Management'],
    degrees: [
      { degree: 'MBBS', institution: 'King Edward Medical University', year: '2009' },
      { degree: 'FCPS (Medical Oncology)', institution: 'CPSP Pakistan', year: '2016' }
    ],
    schedule: [
      { day: 'Monday to Saturday', morning: '10:00 AM – 1:00 PM', evening: '2:00 PM – 4:00 PM' }
    ]
  },
  {
    id: 'dr-hafiz-ali-wasay',
    name: 'Dr. Hafiz Ali Wasay',
    specialty: 'General Medicine & Panel Doctor',
    departmentId: 'medical-specialties',
    departmentName: 'General Medicine',
    qualification: 'MBBS, MCPS (Family Medicine)',
    experience: '11+ Years Experience',
    timings: 'Mon–Sun: 8:00 AM – 4:00 PM',
    phone: '+92 42 35413999',
    email: 'ali.wasay@dar-al-dawa.com',
    bio: 'Dr. Hafiz Ali Wasay serves as Senior Panel Consultant for health insurance, corporate wellness, acute infections, preventive health screenings, and primary medical care.',
    image: 'https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    specializations: ['Acute Medical Illnesses & Fevers', 'Hypertension & Lipid Control', 'Corporate & Executive Health Screening', 'Preventive Adult Vaccinations'],
    degrees: [
      { degree: 'MBBS', institution: 'Lahore Medical & Dental College', year: '2012' },
      { degree: 'MCPS (Family Medicine)', institution: 'CPSP', year: '2018' }
    ],
    schedule: [
      { day: 'Monday to Sunday', morning: '8:00 AM – 4:00 PM', evening: 'Emergency Roster' }
    ]
  },
  {
    id: 'dr-fatima-zahra',
    name: 'Dr. Fatima Zahra',
    specialty: 'GYN & OBS Consultant',
    departmentId: 'gyn-obs',
    departmentName: 'GYN & OBS',
    qualification: 'MBBS, FCPS (Obstetrics & Gynecology), MRCOG (UK)',
    experience: '17+ Years Experience',
    timings: 'Mon–Sun: 9:00 AM – 5:00 PM',
    phone: '+92 42 35413999',
    email: 'fatima.zahra@dar-al-dawa.com',
    bio: 'Dr. Fatima Zahra is an empathetic, senior obstetrician and gynecologist with unmatched expertise in high-risk pregnancies, maternal-fetal wellbeing, infertility management, and advanced gynecological surgeries.',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    specializations: ['High-Risk Pregnancy & Safe Delivery', 'Laparoscopic Gynaecology', 'Infertility Workup', 'PCOS & Hormonal Irregularities'],
    degrees: [
      { degree: 'MBBS', institution: 'Fatima Jinnah Medical College', year: '2005' },
      { degree: 'FCPS (OB-GYN)', institution: 'CPSP Pakistan', year: '2011' }
    ],
    schedule: [
      { day: 'Monday to Sunday', morning: '9:00 AM – 2:00 PM', evening: '3:00 PM – 5:00 PM' }
    ]
  },
  {
    id: 'dr-bilal-tariq',
    name: 'Dr. Bilal Tariq',
    specialty: 'Dental Surgeon & Orthodontics',
    departmentId: 'dental-specialties',
    departmentName: 'Dental Specialties',
    qualification: 'BDS, RDS, C-Implants, FCPS-I',
    experience: '10+ Years Experience',
    timings: 'Mon–Sat: 10:00 AM – 9:00 PM',
    phone: '+92 42 35413999',
    email: 'bilal.tariq@dar-al-dawa.com',
    bio: 'Dr. Bilal Tariq specializes in painless dentistry, aesthetic smile design, surgical extractions, composite veneers, and dental implants in a completely sterile clinical environment.',
    image: 'https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    specializations: ['Dental Implants & Crowns', 'Root Canal & Restorations', 'Clear Aligners & Orthodontics', 'Painless Pediatric Dentistry'],
    degrees: [
      { degree: 'BDS', institution: 'de’Montmorency College of Dentistry, Lahore', year: '2013' },
      { degree: 'Certified Implantologist', institution: 'International Dental Implant Association', year: '2017' }
    ],
    schedule: [
      { day: 'Monday to Saturday', morning: '10:00 AM – 2:00 PM', evening: '5:00 PM – 9:00 PM' }
    ]
  },
  {
    id: 'dr-sana-mir',
    name: 'Dr. Sana Mir',
    specialty: 'Facial Aesthetics & Dermatology',
    departmentId: 'facial-aesthetics',
    departmentName: 'Facial Aesthetics',
    qualification: 'MBBS, Dip. Aesthetic Medicine (USA), Fellow Dermatology',
    experience: '9+ Years Experience',
    timings: 'Mon–Sat: 11:00 AM – 7:00 PM',
    phone: '+92 42 35413999',
    email: 'sana.mir@dar-al-dawa.com',
    bio: 'Dr. Sana Mir blends clinical dermatology with advanced aesthetic medicine to provide natural rejuvenation, anti-aging therapies, PRP hair restoration, and customized laser treatments.',
    image: 'https://images.pexels.com/photos/8376306/pexels-photo-8376306.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    specializations: ['Botox & Anti-Wrinkle Injections', 'Hyaluronic Acid Dermal Fillers', 'PRP Vampire Facial & Hair Regrowth', 'Melasma & Pigmentation Removal'],
    degrees: [
      { degree: 'MBBS', institution: 'Services Institute of Medical Sciences', year: '2014' },
      { degree: 'Diploma in Aesthetic Medicine', institution: 'American Academy of Aesthetic Medicine', year: '2018' }
    ],
    schedule: [
      { day: 'Monday to Saturday', morning: '11:00 AM – 2:00 PM', evening: '4:00 PM – 7:00 PM' }
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'operating-theaters',
    title: 'Major Operating Theaters',
    icon: 'Hospital',
    description: 'Our sterile, fully-equipped operation theaters support a wide range of general, laparoscopic, and specialized surgical procedures. All theaters follow strict WHO infection control and laminar air flow protocols.',
    features: ['General Surgery', 'Laparoscopic Minimally Invasive', 'ENT & Head-Neck Surgery', 'Gynecological Procedures', 'Orthopedic Trauma'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'diagnostic-imaging',
    title: 'Advanced Diagnostic Imaging',
    icon: 'Radio',
    description: 'We offer comprehensive radiology services including digital X-ray, high-resolution ultrasound, CT scan, MRI, 12-lead ECG, and echocardiography — operated by certified radiologists with rapid reporting.',
    features: ['Digital Low-Dose X-Ray', '3D/4D Color Ultrasound', 'CT Scan & Body Imaging', 'ECG & Echocardiography', 'Fast-Track Online Reports'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'clinical-laboratory',
    title: 'In-House Clinical Laboratory',
    icon: 'FlaskConical',
    description: 'Our in-house lab handles a full range of diagnostic tests with rapid turnaround. Samples are processed by qualified pathologists using automated, ISO-compliant diagnostic equipment.',
    features: ['Complete Blood Count (CBC)', 'Liver & Renal Function Tests', 'HbA1c & Diabetes Profiles', 'Hormonal & Thyroid Assays', 'Microbiology & Cultures'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maternity-labor',
    title: 'Maternity & Labor Rooms',
    icon: 'HeartHandshake',
    description: 'Our purpose-built maternity wing provides a calm, comfortable birthing environment. Skilled obstetricians and midwives guide mothers through every stage of labor and delivery safely.',
    features: ['Prenatal Fetal Monitoring', 'Normal & Assisted Delivery', 'Emergency C-Section Ready', 'Specialized Newborn Care', 'Private AC Recovery Suites'],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'emergency-department',
    title: '24/7 Emergency Department',
    icon: 'Siren',
    description: 'Our Emergency Unit is equipped for immediate response to critical situations. With dedicated triage bays, crash carts, defibrillators, and direct specialist access, we are ready 24 hours a day.',
    features: ['Immediate Triage on Arrival', 'Cardiac & Trauma Stabilization', 'Direct ICU / Theater Transfer', '24/7 On-Call Medical Specialists', 'Ambulance Coordination'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'in-house-pharmacy',
    title: 'On-Site In-House Pharmacy',
    icon: 'Pill',
    description: 'Conveniently located within the center, our pharmacy stocks an extensive range of genuine prescription medications, surgical consumables, and OTC supplies, open 7 days a week from 8 AM to midnight.',
    features: ['100% Genuine Stored Medicines', 'Temperature-Controlled Storage', 'Prescription Verification', 'Emergency Medications Always Stocked', 'Open 7 Days a Week'],
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80'
  }
];

export const FACILITY_GALLERY: FacilityGalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Reception & Patient Waiting Lounge',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    category: 'Reception',
    description: 'Air-conditioned, comfortable waiting area with token calling system and friendly reception staff.'
  },
  {
    id: 'gal-2',
    title: 'Surgical Operating Theater Suite',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    category: 'Surgical OT',
    description: 'HEPA-filtered laminar airflow operating theater equipped with modern laparoscopic towers.'
  },
  {
    id: 'gal-3',
    title: 'Automated Diagnostic Laboratory',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    category: 'Laboratory',
    description: 'High-throughput automated biochemistry and hematology analyzers ensuring rapid results.'
  },
  {
    id: 'gal-4',
    title: 'Maternity Ward & Private Delivery Suite',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    category: 'Maternity',
    description: 'Serene, private maternity rooms with baby warmers and dedicated midwife monitoring.'
  },
  {
    id: 'gal-5',
    title: '24/7 Emergency Triage & Trauma Bays',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    category: 'Emergency',
    description: 'Equipped with cardiac monitors, oxygen lines, defibrillators, and direct theater pathway.'
  },
  {
    id: 'gal-6',
    title: 'In-Patient Recovery Wards',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80',
    category: 'Wards',
    description: 'Clean, hygienic semi-private and private patient rooms with 24/7 nurse call systems.'
  },
  {
    id: 'gal-7',
    title: 'On-Site Dispensing Pharmacy Counter',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    category: 'Pharmacy',
    description: 'Temperature-controlled pharmaceutical stock dispensing genuine certified medications.'
  },
  {
    id: 'gal-8',
    title: 'Consultation & Examination Suites',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    category: 'Consultation',
    description: 'Private, quiet consultation rooms ensuring complete doctor-patient confidentiality.'
  }
];

export const AMENITIES = [
  { icon: 'Car', label: 'Free Parking', note: 'Ample on-premise parking for patients & visitors' },
  { icon: 'Coffee', label: 'Cafeteria & Refreshments', note: 'Nutritious snacks, hot tea, and beverages' },
  { icon: 'Accessibility', label: 'Wheelchair Accessibility', note: 'Ramps, wide corridors, and elevator access' },
  { icon: 'Bed', label: 'Comfortable In-Patient Wards', note: 'Air-conditioned rooms with sanitized bedding' },
  { icon: 'Wifi', label: 'Complimentary High-Speed Wi-Fi', note: 'Available in all waiting lounges and rooms' },
  { icon: 'Shield', label: '24-Hour Security & CCTV', note: 'Full premise surveillance and trained security staff' },
  { icon: 'Sparkles', label: 'Strict Hygiene & Infection Protocols', note: 'Continuous sanitization matching WHO standards' },
  { icon: 'Trees', label: 'Serene Healing Environment', note: 'Well-maintained building and peaceful atmosphere' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Had an exceptionally smooth experience at Dar Al Dawa Medical Center. They have very experienced staff and doctors. The consultation was thorough and the surgical team made me feel completely safe. Very cooperative and professional.",
    name: 'Muhammad Usman Khan',
    location: 'Mustafa Town, Lahore',
    department: 'General Surgery',
    rating: 5
  },
  {
    id: 'test-2',
    quote: "Very good medical center with strict hygiene protocols and well-qualified staff. The dental treatment I received was completely painless and the follow-up was wonderful. Very much satisfied with the services. 10/10.",
    name: 'Dr. Ayesha Tariq',
    location: 'Wahdat Road, Lahore',
    department: 'Dental Specialties',
    rating: 5
  },
  {
    id: 'test-3',
    quote: "The best medical experience in Lahore. Highly recommended! Very cooperative reception staff, fast lab reports, and the ENT specialist solved my chronic sinusitis problem permanently. Alhamdulillah.",
    name: 'Rana Kamran Akhtar',
    location: 'Allama Iqbal Town, Lahore',
    department: 'ENT Department',
    rating: 5
  },
  {
    id: 'test-4',
    quote: "During a late-night emergency with my father's breathing distress, Dar Al Dawa's 24/7 team acted within seconds. The oxygen setup and doctor on duty stabilized him right away. Truly Lahore's trusted healthcare hero.",
    name: 'Zubair Chaudhry',
    location: 'Canal Road, Lahore',
    department: 'Emergency & Pulmonology',
    rating: 5
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '10-warning-signs-of-heart-disease',
    title: "10 Warning Signs of Heart Disease You Shouldn't Ignore",
    excerpt: "Cardiovascular disease remains one of the leading causes of preventable death in Pakistan. Our specialist explains the early warning signs every adult should know — and when to seek immediate medical attention.",
    content: [
      "Cardiovascular disease continues to be a major health concern across Pakistan. Early recognition of subtle warning signs can make the difference between successful preventive treatment and an emergency crisis.",
      "Key signs to never dismiss include unexplained chest pressure or squeezing sensations, shortness of breath upon mild exertion, pain radiating to the jaw, neck, or left arm, and sudden dizziness or cold sweats.",
      "Lifestyle risk factors such as untreated hypertension, high cholesterol, sedentary habits, and chronic stress should be evaluated regularly through comprehensive lipid panels and ECG screenings at Dar Al Dawa.",
      "If you experience sudden, crushing chest pain accompanied by profuse sweating or nausea, call our 24/7 Emergency Line (+92 42 35413999) immediately."
    ],
    coverImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    category: 'Cardiology',
    tags: ['Cardiology', 'Heart Health', 'Emergency Care', 'Wellness'],
    author: {
      name: 'Prof. Khalid Masud Gondal',
      specialty: 'Senior Surgical Consultant',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Leading surgeon with over 28 years of clinical expertise across major hospitals in Pakistan.'
    },
    date: 'August 24, 2025',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 'understanding-diabetes-types-symptoms-management',
    title: 'Understanding Diabetes: Types, Symptoms, and Modern Management',
    excerpt: 'Dr. Amar Sethi breaks down the crucial differences between Type 1 and Type 2 diabetes, practical dietary adjustments for Pakistani diets, and modern monitoring tools to keep HbA1c under control.',
    content: [
      "Diabetes mellitus affects millions of families across Pakistan. While heredity plays a role, dietary habits, physical inactivity, and delayed testing often lead to unmanaged complications.",
      "Effective management relies on a balanced triad: precise medication or insulin therapy, regular glycemic tracking (fasting and postprandial), and intelligent nutritional choices that substitute refined carbs with high-fiber whole foods.",
      "At Dar Al Dawa's Diabetology clinic, we customize care plans including HbA1c tests, continuous glucose monitoring consultations, and proactive diabetic foot screenings."
    ],
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    category: 'Diabetology',
    tags: ['Diabetes', 'Diabetology', 'Nutrition', 'HbA1c'],
    author: {
      name: 'Dr. Amar Sethi',
      specialty: 'Senior Consultant Diabetologist',
      image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Specialist in metabolic medicine with MSc Diabetes from UK and 18+ years experience.'
    },
    date: 'August 18, 2025',
    readTime: '6 min read'
  },
  {
    id: 'when-to-see-a-pulmonologist-lung-health',
    title: 'When Should You See a Pulmonologist? Signs Your Lungs Need Help',
    excerpt: 'Lahore smog and seasonal weather shifts place immense strain on respiratory systems. Learn the key symptoms that warrant an evaluation from our pulmonology department.',
    content: [
      "Urban air quality challenges in Lahore often exacerbate bronchial hypersensitivity and chronic coughs. Dismissing a cough that persists for more than three weeks as a common seasonal cold can delay vital treatment.",
      "Indications that warrant specialist consultation include wheezing, morning breathlessness, recurrent chest tightness, chronic sputum production, and sleep disturbances caused by breathing pauses.",
      "Our pulmonary unit uses digital spirometry, fractional exhaled nitric oxide (FeNO), and chest radiography to accurately diagnose asthma and COPD."
    ],
    coverImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    category: 'Pulmonology',
    tags: ['Pulmonology', 'Lung Health', 'Asthma', 'Lahore Smog'],
    author: {
      name: 'Dr. Iqra Anwar',
      specialty: 'Consultant Pulmonologist',
      image: 'https://images.pexels.com/photos/5214968/pexels-photo-5214968.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Pulmonology specialist dedicated to respiratory wellness and asthma rehabilitation.'
    },
    date: 'August 12, 2025',
    readTime: '4 min read'
  },
  {
    id: 'dental-hygiene-101-protecting-your-smile',
    title: 'Dental Hygiene 101: Building a Daily Routine That Protects Your Smile',
    excerpt: 'From brushing techniques to the truth about teeth whitening, our dental surgeon outlines how to prevent costly root canals and gum disease with simple daily habits.',
    content: [
      "A healthy smile is fundamental to overall systemic health. Poor oral hygiene does not simply cause bad breath or cavities; chronic gum inflammation has been clinically linked to cardiovascular disease and diabetes exacerbation.",
      "Brush twice daily using soft bristles at a 45-degree angle to the gumline, floss once daily to clear interdental plaque, and schedule professional scaling every six months.",
      "Dar Al Dawa's Dental department provides gentle, painless dental cleaning and complete smile restorative solutions."
    ],
    coverImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    category: 'Dental',
    tags: ['Dental', 'Oral Health', 'Teeth Whitening', 'Preventive Care'],
    author: {
      name: 'Dr. Bilal Tariq',
      specialty: 'Dental Surgeon & Orthodontist',
      image: 'https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Expert dental surgeon with a focus on painless clinical dentistry and cosmetic aligners.'
    },
    date: 'July 29, 2025',
    readTime: '4 min read'
  },
  {
    id: 'safe-pregnancy-prenatal-care-tips-gyn-obs',
    title: 'Safe Pregnancy: Essential Prenatal Care Tips from Our GYN & OBS Team',
    excerpt: 'Comprehensive guidance on first-trimester nutrition, essential ultrasound schedules, iron/folic supplementation, and preparing for a safe delivery.',
    content: [
      "Pregnancy is a transformative journey that deserves supportive, expert clinical guidance. Regular antenatal visits allow physicians to monitor maternal blood pressure, fetal growth velocity, and gestational sugar levels.",
      "Ensure early folic acid supplementation, maintain balanced hydration, and attend scheduled anomaly scans at 18-22 weeks.",
      "Our maternity wing provides 24/7 obstetrician and neonatal cover, sterile birthing rooms, and round-the-clock emergency surgical readiness."
    ],
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    category: 'Women Health',
    tags: ['GYN & OBS', 'Maternity', 'Prenatal Care', 'Women Health'],
    author: {
      name: 'Dr. Fatima Zahra',
      specialty: 'Consultant Obstetrician & Gynecologist',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Senior consultant specializing in high-risk pregnancies and modern maternal care.'
    },
    date: 'July 21, 2025',
    readTime: '5 min read'
  },
  {
    id: 'kidney-stone-prevention-lifestyle-changes',
    title: 'Kidney Stone Prevention: Diet & Lifestyle Changes That Actually Work',
    excerpt: 'Urologist Dr. Amaghan Amin shares proven strategies to prevent painful kidney stones, including hydration targets, oxalate awareness, and mineral balance.',
    content: [
      "In hot climates like Lahore, inadequate fluid intake is the leading trigger for renal calculi formation. When urine becomes concentrated, calcium, oxalate, and uric acid crystallize into stones.",
      "Aim for at least 2.5 to 3 liters of water daily, reduce excess sodium in meals, and avoid excessive consumption of high-oxalate foods without adequate calcium buffering.",
      "For existing stones, our urology unit provides non-invasive ultrasound tracking, medical expulsive therapy, and minimally invasive laser endoscopic treatments."
    ],
    coverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    category: 'Urology',
    tags: ['Urology', 'Kidney Health', 'Hydration', 'Prevention'],
    author: {
      name: 'Dr. Amaghan Amin',
      specialty: 'Consultant Urologist',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Consultant urologist specializing in endourology and renal stone treatments.'
    },
    date: 'July 14, 2025',
    readTime: '5 min read'
  },
  {
    id: 'childhood-vaccination-schedule-pakistan-guide',
    title: 'Childhood Vaccination Schedule: A Guide for Pakistani Parents',
    excerpt: 'Protecting your child from preventable infectious diseases through timely immunization. Review the recommended EPI and optional vaccines with our pediatric specialists.',
    content: [
      "Immunization represents the single most effective intervention to safeguard child health. Following the World Health Organization and Expanded Programme on Immunization (EPI) guidelines guarantees robust protection against polio, measles, hepatitis, and rotavirus.",
      "Ensure vaccination cards are maintained securely, and consult our pediatric clinic for supplementary vaccinations such as chickenpox, MMR booster, and flu immunizations."
    ],
    coverImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    category: 'Pediatrics',
    tags: ['Pediatrics', 'Vaccination', 'Child Health', 'Immunization'],
    author: {
      name: 'Dr. Muhammad Bilal Raza',
      specialty: 'Consultant Pediatrician',
      image: 'https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Dedicated pediatrician with vast experience in neonatal and child wellness.'
    },
    date: 'June 30, 2025',
    readTime: '4 min read'
  },
  {
    id: 'ent-health-why-chronic-sinusitis-needs-care',
    title: "ENT Health: Why You Shouldn't Ignore Chronic Sinusitis",
    excerpt: 'Prof. Dr. Mansoor Basir Pal explains how untreated sinus infections can lead to chronic headaches, nasal polyps, and sleep apnea, and the modern endoscopic treatments available.',
    content: [
      "Sinus pressure, facial pain, and recurrent postnasal drip are frequently misunderstood as seasonal allergies. When sinus drainage passages become blocked, bacterial buildup creates stubborn inflammatory infections.",
      "Early endoscopic diagnostic visualization allows targeted nasal spray regimens, allergy avoidance plans, or gentle functional endoscopic sinus surgery (FESS) with swift recovery."
    ],
    coverImage: 'https://images.unsplash.com/photo-1582719202047-76d3432ee323?auto=format&fit=crop&w=800&q=80',
    category: 'ENT',
    tags: ['ENT', 'Sinusitis', 'Allergies', 'Hearing & Throat'],
    author: {
      name: 'Prof. Dr. Mansoor Basir Pal',
      specialty: 'Professor & Head of ENT',
      image: 'https://images.pexels.com/photos/4270371/pexels-photo-4270371.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Senior ENT professor with 25+ years experience in advanced ear and sinus surgery.'
    },
    date: 'June 19, 2025',
    readTime: '4 min read'
  },
  {
    id: 'eye-care-essentials-protecting-vision',
    title: 'Eye Care Essentials: Protecting Your Vision in the Digital Age',
    excerpt: 'Prolonged screen exposure, blue light strain, and untreated refractive errors affect millions. Learn the 20-20-20 rule and signs that require a slit-lamp exam.',
    content: [
      "Digital screen fatigue is an escalating issue across all age demographics. Implementing the 20-20-20 rule — looking 20 feet away for 20 seconds every 20 minutes — dramatically reduces ocular muscle strain.",
      "Routine annual eye exams detect asymptomatic early glaucoma and macular conditions before permanent damage occurs. Visit Dr. Nausherwan Adil at our eye clinic for complete visual assessments."
    ],
    coverImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    category: 'Eye Care',
    tags: ['Ophthalmology', 'Eye Care', 'Vision', 'Digital Strain'],
    author: {
      name: 'Dr. Muhammad Nausherwan Adil',
      specialty: 'Eye Specialist',
      image: 'https://images.pexels.com/photos/6234616/pexels-photo-6234616.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Consultant eye surgeon specializing in cataract surgery and diabetic ophthalmology.'
    },
    date: 'June 05, 2025',
    readTime: '4 min read'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book an appointment at Dar Al Dawa Medical Center?',
    answer: 'You can book directly by calling +92 42 35413999 or 0311 9944897, emailing info@dar-al-dawa.com, sending a WhatsApp message, or using our convenient online appointment booking form on this website. Our team confirms your slot within 2 hours.'
  },
  {
    id: 'faq-2',
    question: 'What are your operating and emergency hours?',
    answer: 'Our general outpatient departments, consultation clinics, laboratory, and pharmacy are open 7 days a week from 8:00 AM to 12:00 AM (midnight). Our Emergency Department and critical care teams operate 24 hours a day, 7 days a week.'
  },
  {
    id: 'faq-3',
    question: 'Do I need a referral to consult a specialist doctor?',
    answer: 'No formal doctor referral is required. You can book an appointment directly with any of our 20+ consultant physicians and surgeons. If you are unsure which specialist to see, our reception team will guide you based on your symptoms.'
  },
  {
    id: 'faq-4',
    question: 'Do you accept health insurance and corporate panel cards?',
    answer: 'Yes! We collaborate with leading insurance providers and corporate panels. Please contact our reception desk at +92 42 35413999 or bring your panel card to verify coverage before your consultation.'
  },
  {
    id: 'faq-5',
    question: 'Where is Dar Al Dawa Medical Center located in Lahore?',
    answer: 'We are situated at 34 Hadayat Ullah, Block Mustafa Town, Lahore, Punjab, Pakistan. We are easily accessible via Canal Bank Road, Wahdat Road, and Allama Iqbal Town by car, ride-hailing services, or public transport.'
  },
  {
    id: 'faq-6',
    question: 'Is parking available on site for patients and visitors?',
    answer: 'Yes, we provide dedicated, secure, free on-premise parking with 24-hour security personnel and CCTV surveillance for all our patients and their accompanying family members.'
  }
];

export const LEADERSHIP_MEMBERS = [
  {
    name: 'Prof. Khalid Masud Gondal',
    title: 'Medical Director & Chief of Surgery',
    qualification: 'MBBS, FCPS, FRCS, FICS',
    bio: 'Guiding clinical protocols, patient safety standards, and surgical innovation across the hospital.',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Prof. Dr. Mansoor Basir Pal',
    title: 'Head of Clinical Governance & ENT',
    qualification: 'MBBS, DLO, FCPS',
    bio: 'Overseeing institutional healthcare compliance, medical ethics, and continuing physician training.',
    image: 'https://images.pexels.com/photos/4270371/pexels-photo-4270371.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Dr. Fatima Zahra',
    title: 'Director of Maternal & Child Health',
    qualification: 'MBBS, FCPS, MRCOG',
    bio: 'Spearheading women and newborn care services, labor suite hygiene, and patient advocacy programs.',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
