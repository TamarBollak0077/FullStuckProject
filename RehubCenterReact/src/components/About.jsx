import React from 'react';
import '../CSS/About.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import Alcohol from '../Pictures/Alcohol.png';
import Drugs from '../Pictures/Drugs.jpg';
import gambling from '../Pictures/gambling.jpg';
import screen from '../Pictures/screen.jpg';

const addictionDetails = [
  {
    title: "Drugs",
    desc: (
      <>
        Drug addiction involves the compulsive use of substances such as cannabis, cocaine, heroin, and prescription medications. It can lead to severe physical and mental health deterioration, social isolation, and even life-threatening situations. <br />
        <b>Risk Level:</b> Extremely high – overdose and long-term organ damage are common.<br />
        <b>Research:</b> Studies show that over 70% of individuals with untreated drug addiction experience significant decline in quality of life and increased mortality rates (National Institute on Drug Abuse, 2022).
      </>
    ),
    img: Drugs,
    alt: "Drugs addiction",
    link: "https://www.drugabuse.gov/publications/drugfacts/understanding-drug-use-addiction"
  },
  {
    title: "Alcohol",
    desc: (
      <>
        Alcohol addiction is characterized by an inability to control drinking habits, leading to dependency. It can cause liver disease, cognitive impairment, and increased risk of accidents and violence.<br />
        <b>Risk Level:</b> High – chronic use can result in fatal liver failure and neurological damage.<br />
        <b>Research:</b> According to the WHO, alcohol misuse is responsible for 5.3% of all deaths worldwide (2021).
      </>
    ),
    img: Alcohol,
    alt: "Alcohol addiction",
    link: "https://www.who.int/news-room/fact-sheets/detail/alcohol"
  },
  {
    title: "Screens",
    desc: (
      <>
        Screen addiction includes excessive use of smartphones, computers, gaming, and social media. It can result in sleep disorders, anxiety, depression, and impaired social skills.<br />
        <b>Risk Level:</b> Moderate to high – especially among youth, leading to academic and social difficulties.<br />
        <b>Research:</b> Recent studies indicate that over 30% of teenagers show signs of problematic screen use, impacting mental health (JAMA Pediatrics, 2023).
      </>
    ),
    img: screen,
    alt: "Screen addiction",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6348394/"
  },
  {
    title: "Gambling",
    desc: (
      <>
        Gambling addiction is the uncontrollable urge to gamble despite negative consequences. It often leads to financial ruin, legal issues, and emotional distress.<br />
        <b>Risk Level:</b> High – can result in bankruptcy, depression, and increased suicide risk.<br />
        <b>Research:</b> Research shows that problem gamblers are up to 15 times more likely to attempt suicide than the general population (The Lancet, 2019).
      </>
    ),
    img: gambling,
    alt: "Gambling addiction",
    link: "https://www.healthline.com/health/addiction/gambling"
  }
];

const About = () => (
  <div className="about-container">
    <div className="about-title">
      About Retorno Rehabilitation Center
    </div>
    <div className="about-section">
      <b>Retorno Rehabilitation Center</b> is a leading institution in Israel specializing in the treatment and rehabilitation of individuals suffering from various addictions. Established over two decades ago, Retorno has become a beacon of hope for thousands of individuals and families, providing a holistic, professional, and compassionate approach to recovery.
      <br /><br />
      Our center is located in the serene hills of Givat Shemesh, near Jerusalem, offering a peaceful and supportive environment that is essential for the healing process. The natural surroundings, combined with our expert staff, create an atmosphere conducive to personal growth, reflection, and change.
    </div>

    {/* Our Method Section */}
    <div id="method" className="about-section">
      <b>Our Approach:</b><br />
      At Retorno, we believe that every person is unique and deserves a personalized treatment plan. Our multidisciplinary team includes experienced therapists, psychologists, social workers, and medical professionals who work together to address the physical, emotional, and psychological aspects of addiction.
      <br /><br />
      <b>The 12-Step Method:</b><br />
      One of the core foundations of our treatment philosophy is the internationally recognized <b>12-Step Program</b>. This method, originally developed by Alcoholics Anonymous, has been adapted worldwide for a variety of addictions and is at the heart of Retorno’s therapeutic process.
      <br /><br />
      The 12-Step approach is based on the understanding that addiction is a chronic, progressive disease that affects the body, mind, and spirit. The program guides participants through a structured process of self-examination, acceptance, and personal growth. It emphasizes honesty, humility, and the importance of community support.
      <br /><br />
      At Retorno, the 12-Step method is integrated into daily life through group meetings, personal mentorship, and ongoing reflection. Participants are encouraged to share their experiences, support one another, and take responsibility for their recovery journey. The steps include admitting powerlessness over addiction, seeking help from a higher power, making amends for past actions, and committing to ongoing self-improvement.
      <br /><br />
      Our experienced staff, many of whom are themselves in long-term recovery, guide participants through each step with empathy and professionalism. The 12-Step program at Retorno is adapted to the cultural and spiritual background of each individual, ensuring relevance and effectiveness for everyone.
      <br /><br />
      <b>Why the 12 Steps?</b><br />
      The 12-Step method has proven to be one of the most effective frameworks for long-term recovery. It provides a clear path, a supportive community, and practical tools for dealing with the challenges of addiction. At Retorno, we see the 12 Steps not just as a treatment protocol, but as a way of life that fosters responsibility, hope, and lasting change.
    </div>

    {/* Types of Addictions Section */}
    <div id="addictions" className="about-section">
      <b>Who We Help:</b><br />
      Retorno provides treatment for the following addictions:
      <div className="addiction-types-list">
        {addictionDetails.map((type) => (
          <div key={type.title} className="addiction-type-card">
            <img src={type.img} alt={type.alt} className="addiction-type-img" />
            <div>
              <div className="addiction-type-title">{type.title}</div>
              <div className="addiction-type-desc">{type.desc}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Horizontal gallery of all images as links */}
      <div className="addiction-gallery">
        {addictionDetails.map(type => (
          <a
            key={type.title}
            href={type.link}
            target="_blank"
            rel="noopener noreferrer"
            className="addiction-gallery-link"
            title="Click for more information"
          >
            <img
              src={type.img}
              alt={type.alt}
              className="addiction-gallery-img"
            />
            <div className="addiction-gallery-title">
              {type.title}
              <InfoOutlinedIcon className="addiction-gallery-info-icon" />
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* Information about Addictions Section */}
    <div id="addiction-info" className="about-section">
      <b>Information about Addictions:</b><br />
      Here you can find detailed information, statistics, and resources about various types of addictions, their risks, and ways to get help.  
      {/* אפשר להרחיב כאן תוכן */}
    </div>

    {/* Contact Section */}
    <div className="about-section">
      <b>Family Involvement:</b><br />
      We recognize the crucial role that families play in the recovery process. Our center offers guidance, support, and therapy for family members, helping them understand addiction and learn how to support their loved ones on the path to recovery.
      <br /><br />
      <b>Our Values:</b><br />
      - Compassion and respect for every individual<br />
      - Professionalism and integrity in all our services<br />
      - Commitment to ongoing learning and improvement<br />
      - Belief that no one is ever lost and everyone can change<br />
      <br />
      {/* Success Stories Section */}
      <b>Success Stories:</b><br />
      <div className="success-stories-list">
        <div className="success-story-card">
          <div className="success-story-quote">
            <FormatQuoteIcon className="quote-icon" />
            “A New Beginning”
          </div>
          <div className="success-story-text">
            "After years of struggling with drug addiction, I came to Retorno broken and hopeless. The staff never gave up on me, even when I wanted to give up on myself. The 12-step program and the supportive community helped me rediscover my strength. Today, I am clean for three years, working, and rebuilding my relationship with my family. Retorno gave me my life back."
          </div>
          <div className="success-story-author">– Anonymous, age 29</div>
        </div>
        <div className="success-story-card">
          <div className="success-story-title">“Hope for My Family”</div>
          <div className="success-story-text">
            "My son was addicted to gambling and we were losing hope. Retorno not only helped him, but also supported us as a family. The therapists were always available, and the family workshops taught us how to truly help. Today, our home is filled with hope again."
          </div>
          <div className="success-story-author">– Anonymous Parent</div>
        </div>
        <div className="success-story-card">
          <div className="success-story-title">“From Darkness to Light”</div>
          <div className="success-story-text">
            "I was addicted to alcohol for over a decade. Retorno was the first place where I felt truly understood. The group sessions, the nature, and the personal attention made all the difference. I am now sober, working as a mentor for others, and grateful every day."
          </div>
          <div  className="success-story-author">– Anonymous, age 41</div>
        </div>
      </div>

      {/* Contact Us Section - רק כאן! */}
      <div id="contact" className="about-section"/>
      <div  className="contact-section">
        <b>Contact Us:</b><br />
        If you or someone you care about is struggling with addiction, we invite you to <a href="#signup-btn" className="contact-link">reach out</a>. Our team is here to answer your questions, provide information, and help you take the first step toward a healthier, more fulfilling life.
        <br /><br />
        <b>Retorno Rehabilitation Center – Where hope and healing begin.</b>
        <br /><br />
        <div className="signup-btn-wrapper">
          <a
            id="signup-btn"
            href="/signup"
            className="signup-btn"
          >
            Join Us Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;