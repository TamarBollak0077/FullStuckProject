import React from 'react';
import { Box, Typography, Grid } from '@mui/material';


const About = () => (
  <Box
    sx={{
      maxWidth: 900,
      mx: 'auto',
      my: 6,
      p: 4,
      borderRadius: 3,
      boxShadow: 3,
      background: '#fff',
      direction: 'ltr',
      textAlign: 'left',
    }}
  >
    <Typography variant="h3" sx={{ color: '#223a5e', fontWeight: 700, mb: 3, textAlign: 'center' }}>
      About Retorno Rehabilitation Center
    </Typography>
    <Typography variant="body1" sx={{ color: '#333', mb: 2, lineHeight: 2, fontSize: '1.15rem' }}>
      <b>Retorno Rehabilitation Center</b> is a leading institution in Israel specializing in the treatment and rehabilitation of individuals suffering from various addictions. Established over two decades ago, Retorno has become a beacon of hope for thousands of individuals and families, providing a holistic, professional, and compassionate approach to recovery.
      <br /><br />
      Our center is located in the serene hills of Givat Shemesh, near Jerusalem, offering a peaceful and supportive environment that is essential for the healing process. The natural surroundings, combined with our expert staff, create an atmosphere conducive to personal growth, reflection, and change.
      <br /><br />
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
      <br /><br />
      <b>Types of Gambling Addiction</b>
    </Typography>

    <Grid container spacing={4} sx={{ mb: 4 }}>
      <Grid item xs={12} md={6}>

        {/* <img src={casinoImg} alt="Casino Gambling" style={{ width: '100%', borderRadius: 12, marginBottom: 12 }} /> */}
        <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 600, mb: 1 }}>
          Casino Gambling
        </Typography>
        <Typography variant="body2" sx={{ color: '#333', lineHeight: 1.8 }}>
          Casino gambling includes games such as slot machines, roulette, blackjack, and poker. The excitement and fast pace of casinos can lead to compulsive behavior, financial loss, and emotional distress. Many individuals are drawn to the thrill of winning, but the odds are always against the player, making it easy to fall into a cycle of chasing losses.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <img src={sportsImg} alt="Sports Betting" style={{ width: '100%', borderRadius: 12, marginBottom: 12 }} /> */}
        <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 600, mb: 1 }}>
          Sports Betting
        </Typography>
        <Typography variant="body2" sx={{ color: '#333', lineHeight: 1.8 }}>
          Sports betting involves wagering money on the outcome of sporting events. With the rise of online platforms, sports betting has become more accessible than ever. This form of gambling can quickly become addictive, as individuals believe their knowledge or luck can influence the outcome, often leading to significant financial and personal consequences.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <img src={lotteryImg} alt="Lottery and Scratch Cards" style={{ width: '100%', borderRadius: 12, marginBottom: 12 }} /> */}
        <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 600, mb: 1 }}>
          Lottery & Scratch Cards
        </Typography>
        <Typography variant="body2" sx={{ color: '#333', lineHeight: 1.8 }}>
          Lottery tickets and scratch cards are widely available and often marketed as harmless fun. However, the hope of a big win can lead to repeated purchases and disappointment. For some, this seemingly innocent activity can develop into a serious addiction, impacting finances and emotional well-being.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <img src={onlineImg} alt="Online Gambling" style={{ width: '100%', borderRadius: 12, marginBottom: 12 }} /> */}
        <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 600, mb: 1 }}>
          Online Gambling
        </Typography>
        <Typography variant="body2" sx={{ color: '#333', lineHeight: 1.8 }}>
          Online gambling includes virtual casinos, poker rooms, and betting sites. The anonymity and convenience of gambling from home can make it especially dangerous, as it is easy to hide the problem from friends and family. Online gambling addiction can lead to isolation, debt, and severe emotional distress.
        </Typography>
      </Grid>
    </Grid>

    <Typography variant="body1" sx={{ color: '#333', mb: 2, lineHeight: 2, fontSize: '1.15rem' }}>
      <b>Who We Help:</b><br />
      Retorno provides treatment for a wide range of addictions, including substance abuse (drugs and alcohol), gambling, technology, eating disorders, and more. We welcome men, women, and adolescents from all backgrounds, offering both inpatient and outpatient programs tailored to each individual's needs.
      <br /><br />
      <b>Family Involvement:</b><br />
      We recognize the crucial role that families play in the recovery process. Our center offers guidance, support, and therapy for family members, helping them understand addiction and learn how to support their loved ones on the path to recovery.
      <br /><br />
      <b>Our Values:</b><br />
      - Compassion and respect for every individual<br />
      - Professionalism and integrity in all our services<br />
      - Commitment to ongoing learning and improvement<br />
      - Belief that no one is ever lost and everyone can change<br />
      <br />
      <b>Success Stories:</b><br />
      Many of our staff members are themselves graduates of Retorno, bringing a unique perspective and deep empathy to their work. Our alumni community is active and supportive, providing ongoing encouragement and inspiration to current participants.
      <br /><br />
      <b>Contact Us:</b><br />
      If you or someone you care about is struggling with addiction, we invite you to reach out. Our team is here to answer your questions, provide information, and help you take the first step toward a healthier, more fulfilling life.
      <br /><br />
      <b>Retorno Rehabilitation Center – Where hope and healing begin.</b>
    </Typography>
  </Box>
);

export default About;