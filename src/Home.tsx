import React from 'react';
import './App.css';
import schoolLogo from './assets/schoolLogo/SchoolLogo.jpeg';
import schoolPicture from './assets/schoolLogo/SchoolPicture.jpeg';
import facility from './assets/facility/Facility.jpeg';
import teachersActivity from './assets/teachers/TeachersAndStidentActivity.jpeg';
import studentsActivity from './assets/studentsActivity/StudentsActivity.jpeg';

interface HomeProps {
  language: 'en' | 'mr';
}

const content = {
  en: {
    schoolName: 'Ramabai Ambedkar Vidyalaya and Jr. College of Arts, Saoli',
    tagline: ['Path to Success', 'Way to Success'],
    motto: 'The student in this area should be Milind and the teacher should be Nagasen.',
    about: `Established on July 1st, 1986, by the Dr. Babasaheb Ambedkar Smarak Samiti Shikshan Prasarak Sanstha, Saoli, our institution has been a beacon of educational excellence for over 37 years. What started as a small school has grown into a comprehensive educational institution serving students from Class 5 to Class 12.\n\nLocated in Saoli, District Chandrapur, the institution is known for its academic excellence, discipline, and all-round student development. We provide a safe, inclusive, and inspiring environment that fosters critical thinking, creativity, and responsible citizenship. Our dedicated and experienced teachers offer personalized guidance and support.\n\nIn addition to academic excellence, we focus on co-curricular activities, value-based education, digital learning, and social engagement. With a strong legacy and a future-ready vision, we continue to inspire generations of learners.`,
    principalMsg: `Dear Students and Parents,\n\nWelcome to Ramabai Ambedkar Vidyalaya and Jr. College of Arts, Saoli, Dist. Chandrapur!\n\nOur mission is to provide quality education in a safe, supportive, and inspiring atmosphere. We strive to nurture each student to grow academically, socially, and emotionally, while instilling values and a lifelong desire to learn.\n\nLet's work together to make this academic year successful and meaningful.\n\nYours sincerely,\nN. L. Shinde / Shende\nPrincipal`,
    contact: {
      phone: '07174-299080',
      email: 'ramabaividyalyasaoli@gmail.com',
      address: 'At-Post Saoli, Tah-Saoli, Dist-Chandrapur',
    },
    features: [
      {
        title: 'Academic & Teaching',
        icon: '📚',
        items: [
          'Experienced teaching staff',
          'Quality education',
          'Integrated teaching with technology',
          'Well-equipped science laboratories',
          'Well-equipped ICT room',
          'Regular assessments and evaluations',
          'Special classes for Navodaya Vidyalaya, NMMS, and Scholarship exams',
          'Competitive examination preparation and career guidance',
        ],
      },
      {
        title: 'Infrastructure & Safety',
        icon: '💼',
        items: [
          'Digital classrooms',
          'CCTV surveillance',
          'Separate sanitation facilities for boys and girls',
          'Dedicated security guards on campus',
          'Focus on health and hygiene',
          'Special emphasis on girl students\' safety',
        ],
      },
      {
        title: 'Co-Curricular & Environment',
        icon: '🏀',
        items: [
          'Active sports and physical education',
          'Clean, safe, and green campus environment',
        ],
      },
    ],
  },
  mr: {
    schoolName: 'रामाबाई आंबेडकर विद्यालय व कनिष्ठ कला महाविद्यालय, साओली',
    tagline: ['यशाचा मार्ग', 'सफलतेचा मार्ग'],
    motto: 'या परिसरातील विद्यार्थी मिलिंद आणि शिक्षक नागसेन असावा.',
    about: `डॉ. बाबासाहेब आंबेडकर स्मारक समिती शिक्षण प्रसारक संस्था, साओली यांनी १ जुलै १९८६ रोजी स्थापन केलेले रामाबाई आंबेडकर विद्यालय व कनिष्ठ कला महाविद्यालय, गेल्या तीन दशकांपासून इयत्ता ५ वी ते १२ वी पर्यंतच्या विद्यार्थ्यांसाठी अभिमानास्पद शिक्षण व सर्वांगीण विकासाचे केंद्र राहिले आहे.\n\nसाओली, जिल्हा चंद्रपूर येथे स्थित, या संस्थेची ओळख शैक्षणिक गुणवत्ता, शिस्त आणि सर्वांगीण विद्यार्थी विकासासाठी आहे. आम्ही सुरक्षित, समावेशक आणि प्रेरणादायी वातावरण पुरवतो जेथे विद्यार्थ्यांमध्ये चिकित्सक विचार, सर्जनशीलता आणि जबाबदार नागरिकत्व विकसित होते. आमचे समर्पित व अनुभवी शिक्षक वैयक्तिक मार्गदर्शन व मदत करतात.\n\nशैक्षणिक गुणवत्तेसोबतच आम्ही सहशालेय उपक्रम, मूल्याधिष्ठित शिक्षण, डिजिटल शिक्षण आणि सामाजिक सहभागावर भर देतो. मजबूत परंपरा आणि भविष्याभिमुख दृष्टीकोनासह आम्ही पिढ्यान् पिढ्या विद्यार्थ्यांना प्रेरणा देत आहोत.`,
    principalMsg: `प्रिय विद्यार्थी आणि पालक,\n\nरामाबाई आंबेडकर विद्यालय व कनिष्ठ कला महाविद्यालय, साओली, जि. चंद्रपूर येथे आपले स्वागत आहे!\n\nआमचे ध्येय सुरक्षित, सहायक आणि प्रेरणादायी वातावरणात गुणवत्तापूर्ण शिक्षण देणे आहे. प्रत्येक विद्यार्थ्याचा शैक्षणिक, सामाजिक आणि भावनिक विकास साधण्यासोबतच मूल्यांची आणि आजीवन शिक्षणाची प्रेरणा देणे हे आमचे उद्दिष्ट आहे.\n\nया शैक्षणिक वर्षाला यशस्वी आणि अर्थपूर्ण बनवण्यासाठी आपण सर्वांनी एकत्र येऊया.\n\nआपला विश्वासू,\nएन. एल. शिंदे / शेंडे\nमुख्याध्यापक`,
    contact: {
      phone: '०७१७४-२९९०८०',
      email: 'ramabaividyalyasaoli@gmail.com',
      address: 'अ.पो. साओली, ता. साओली, जि. चंद्रपूर',
    },
    features: [
      {
        title: 'शैक्षणिक व अध्यापन',
        icon: '📚',
        items: [
          'अनुभवी अध्यापन कर्मचारी',
          'गुणवत्तापूर्ण शिक्षण',
          'तंत्रज्ञानासह एकत्रित अध्यापन',
          'सुसज्ज विज्ञान प्रयोगशाळा',
          'सुसज्ज आयसीटी कक्ष',
          'नियमित मूल्यमापन व परीक्षा',
          'नवोदय विद्यालय, एनएमएमएस व शिष्यवृत्ती परीक्षांसाठी विशेष वर्ग',
          'स्पर्धा परीक्षा तयारी व करिअर मार्गदर्शन',
        ],
      },
      {
        title: 'आधारभूत सुविधा व सुरक्षा',
        icon: '💼',
        items: [
          'डिजिटल वर्गखोल्या',
          'सीसीटीव्ही देखरेख',
          'मुले व मुलींसाठी स्वतंत्र स्वच्छतागृहे',
          'कॅम्पसमध्ये समर्पित सुरक्षा रक्षक',
          'आरोग्य व स्वच्छतेवर भर',
          'मुलींच्या सुरक्षेसाठी विशेष भर',
        ],
      },
      {
        title: 'सहशालेय व पर्यावरण',
        icon: '🏀',
        items: [
          'सक्रिय क्रीडा व शारीरिक शिक्षण',
          'स्वच्छ, सुरक्षित व हिरवेगार कॅम्पस',
        ],
      },
    ],
  },
};

const Home: React.FC<HomeProps> = ({ language }) => {
  const c = content[language];
  return (
    <>
      <section className="school-hero">
        <img src={schoolLogo} alt="School Logo" className="school-hero-img" />
      </section>
      
      {/* Hero Message Section Below Banner */}
      <section className="hero-message-section">
        <div className="hero-message-content">
          <h2>{c.schoolName}</h2>
          <div className="subtitle">
            {language === 'en' 
              ? 'Empowering students with quality education and holistic development for over 37 years. We provide a safe, inclusive, and inspiring environment that fosters critical thinking, creativity, and responsible citizenship.'
              : '३७ वर्षांपासून गुणवत्तापूर्ण शिक्षण आणि सर्वांगीण विकासाद्वारे विद्यार्थ्यांना सक्षम करत आहोत. आम्ही सुरक्षित, समावेशक आणि प्रेरणादायी वातावरण पुरवतो जेथे चिकित्सक विचार, सर्जनशीलता आणि जबाबदार नागरिकत्व विकसित होते.'
            }
          </div>
          <div className="hero-tagline">
            {c.tagline.map((t: string, i: number) => (
              <span key={i} className="hero-tag">{t}</span>
            ))}
          </div>
          <div className="hero-motto">{c.motto}</div>
        </div>
      </section>

      <main className="school-content">
        <section className="section-card about-section">
          <h2>{language === 'en' ? 'About the School' : 'शाळेबद्दल'}</h2>
          <div className="section-divider" />
          <div className="about-content">
            <img src={schoolPicture} alt="School Building" className="about-image" />
            <p>{c.about.split('\n').map((p: string, i: number) => <span key={i}>{p}<br/><br/></span>)}</p>
          </div>
        </section>
        <section className="section-card principal-section">
          <div className="principal-card">
            <img src={teachersActivity} alt="Principal and Teachers" className="principal-img" />
            <div>
              <h2>{language === 'en' ? 'Principal\'s Message' : 'मुख्याध्यापकांचे संदेश'}</h2>
              <div className="section-divider" />
              <p>{c.principalMsg.split('\n').map((p: string, i: number) => <span key={i}>{p}<br/></span>)}</p>
            </div>
          </div>
        </section>
        <section className="section-card contact-section">
          <h2>{language === 'en' ? 'Contact Information' : 'संपर्क माहिती'}</h2>
          <div className="section-divider" />
          <ul>
            <li><b>📞 {language === 'en' ? 'Phone' : 'फोन'}:</b> {c.contact.phone}</li>
            <li><b>✉️ Email:</b> <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a></li>
            <li><b>📍 {language === 'en' ? 'Address' : 'पत्ता'}:</b> {c.contact.address}</li>
          </ul>
        </section>
        <section className="section-card features-section">
          <h2>{language === 'en' ? 'Key Features and Facilities' : 'महत्वाच्या सुविधा व वैशिष्ट्ये'}</h2>
          <div className="section-divider" />
          <div className="facility-showcase">
            <img src={facility} alt="School Facilities" className="facility-image" />
          </div>
          <div className="features-list">
            {c.features.map((f: any, i: number) => (
              <div className="feature-card" key={i}>
                <div className="feature-title">{f.icon} {f.title}</div>
                <ul>
                  {f.items.map((item: string, j: number) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="section-card activities-section">
          <h2>{language === 'en' ? 'Student Activities' : 'विद्यार्थी उपक्रम'}</h2>
          <div className="section-divider" />
          <div className="activities-showcase">
            <img src={studentsActivity} alt="Student Activities" className="activities-image" />
            <p className="activities-description">
              {language === 'en' 
                ? 'Our students actively participate in various cultural, sports, and academic activities, fostering holistic development and creating memorable experiences.'
                : 'आमचे विद्यार्थी विविध सांस्कृतिक, क्रीडा आणि शैक्षणिक उपक्रमांमध्ये सक्रियपणे सहभागी होतात, सर्वांगीण विकास वाढवतात आणि स्मरणीय अनुभव निर्माण करतात.'
              }
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home; 