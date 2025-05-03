import MentalPhoto from '../assets/mentalPhoto.png';
import { LucideExternalLink } from 'lucide-react';

const MentalHealthArticle = () => {
    return (
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Mental Health Resources</h2>
        <div style={styles.MentalHealthArticleContainer}>
        <img
          src={MentalPhoto} 
          alt="Mental Health"
          style={styles.image}
        />
        <h1 style={styles.title}>Understanding Mental Health: Why It Matters</h1>
  
        <h2 style={styles.heading}>Introduction</h2>
        <p style={styles.text}>
          Mental health is just as important as physical health. It affects how we think, feel, and behave in our daily lives. 
          Good mental health helps us cope with stress, work productively, and build meaningful relationships. Unfortunately, 
          mental health issues are often misunderstood or stigmatized, preventing people from seeking the help they need.
        </p>
  
        <h2 style={styles.heading}>What Is Mental Health?</h2>
        <p style={styles.text}>
          Mental health refers to a person’s emotional, psychological, and social well-being. It influences how we handle stress, 
          relate to others, and make decisions. Mental health is not just the absence of mental illness—it’s about maintaining a 
          positive state of mind.
        </p>
  
        <h3 style={styles.subHeading}>Common Mental Health Challenges Students Face</h3>
        <ul style={styles.list}>
          <li><strong>Stress and Anxiety:</strong> Balancing academic responsibilities, social life, and personal issues can cause overwhelming stress.</li>
          <li><strong>Depression:</strong> Feeling persistently sad, hopeless, or unmotivated is a common issue among students.</li>
          <li><strong>Burnout:</strong> Continuous studying and a lack of rest can lead to physical, emotional, and mental exhaustion.</li>
        </ul>
  
        <h2 style={styles.heading}>Tips to Maintain Good Mental Health</h2>
        <ol style={styles.list}>
          <li><strong>Talk About Your Feelings:</strong> Sharing with someone you trust can help you process emotions.</li>
          <li><strong>Stay Active:</strong> Exercise releases endorphins, reducing stress and improving mood.</li>
          <li><strong>Take Breaks:</strong> It's essential to take time for yourself to relax and recharge.</li>
          <li><strong>Stay Connected:</strong> Build a support network of friends, family, or counselors.</li>
          <li><strong>Seek Help When Needed:</strong> Don't hesitate to reach out to a counselor or mental health professional.</li>
        </ol>
  
        <h2 style={styles.heading}>How Counseling Can Help</h2>
        <p style={styles.text}>
          Counseling provides a safe space to talk about your challenges with a trained professional who can offer guidance. 
          Through counseling, you can learn coping strategies, gain new perspectives, and develop healthier ways to manage stress.
        </p>
  

                <div style={styles.card}>
            <div style={styles.profileInfo}>
                <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Ajay Kumar"
                style={styles.profileImage}
                />
                <div>
                <p style={{...styles.profileName, marginBottom: "-10px"}}>Ajay Kumar</p>
                <p style={{...styles.profileDesc, marginBottom: "-15px"}}>
                    Graduate Student in Chemistry
                </p>
                <p style={styles.profileDesc}>and Chemical Biology</p>
                </div>
            </div>
            <LucideExternalLink style={styles.icon} />
            </div>
        </div>
<br />
<br />
<br />
<br />

        <div style={styles.MentalHealthArticleContainer}>
        <img
          src={MentalPhoto} 
          alt="Mental Health"
          style={styles.image}
        />
        <h1 style={styles.title}>Understanding Mental Health: Why It Matters</h1>
  
        <h2 style={styles.heading}>Introduction</h2>
        <p style={styles.text}>
          Mental health is just as important as physical health. It affects how we think, feel, and behave in our daily lives. 
          Good mental health helps us cope with stress, work productively, and build meaningful relationships. Unfortunately, 
          mental health issues are often misunderstood or stigmatized, preventing people from seeking the help they need.
        </p>
  
        <h2 style={styles.heading}>What Is Mental Health?</h2>
        <p style={styles.text}>
          Mental health refers to a person’s emotional, psychological, and social well-being. It influences how we handle stress, 
          relate to others, and make decisions. Mental health is not just the absence of mental illness—it’s about maintaining a 
          positive state of mind.
        </p>
  
        <h3 style={styles.subHeading}>Common Mental Health Challenges Students Face</h3>
        <ul style={styles.list}>
          <li><strong>Stress and Anxiety:</strong> Balancing academic responsibilities, social life, and personal issues can cause overwhelming stress.</li>
          <li><strong>Depression:</strong> Feeling persistently sad, hopeless, or unmotivated is a common issue among students.</li>
          <li><strong>Burnout:</strong> Continuous studying and a lack of rest can lead to physical, emotional, and mental exhaustion.</li>
        </ul>
  
        <h2 style={styles.heading}>Tips to Maintain Good Mental Health</h2>
        <ol style={styles.list}>
          <li><strong>Talk About Your Feelings:</strong> Sharing with someone you trust can help you process emotions.</li>
          <li><strong>Stay Active:</strong> Exercise releases endorphins, reducing stress and improving mood.</li>
          <li><strong>Take Breaks:</strong> It's essential to take time for yourself to relax and recharge.</li>
          <li><strong>Stay Connected:</strong> Build a support network of friends, family, or counselors.</li>
          <li><strong>Seek Help When Needed:</strong> Don't hesitate to reach out to a counselor or mental health professional.</li>
        </ol>
  
        <h2 style={styles.heading}>How Counseling Can Help</h2>
        <p style={styles.text}>
          Counseling provides a safe space to talk about your challenges with a trained professional who can offer guidance. 
          Through counseling, you can learn coping strategies, gain new perspectives, and develop healthier ways to manage stress.
        </p>
  

                <div style={styles.card}>
            <div style={styles.profileInfo}>
                <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Ajay Kumar"
                style={styles.profileImage}
                />
                <div>
                <p style={{...styles.profileName, marginBottom: "-10px"}}>Ajay Kumar</p>
                <p style={{...styles.profileDesc, marginBottom: "-15px"}}>
                    Graduate Student in Chemistry
                </p>
                <p style={styles.profileDesc}>and Chemical Biology</p>
                </div>
            </div>
            <LucideExternalLink style={styles.icon} />
            </div>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
     MentalHealthArticleContainer: {
      margin: "auto",
      maxWidth: "1012px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    },
    sectionTitle: {
        marginLeft: "40px",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "120%",
        letterSpacing: "-2%",
        fontFamily: "Manrope, sans-serif",
        color:"black",
      },
    image: {
      width: "100%",
      borderRadius: "8px"
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: "20px 0"
    },
    heading: {
      fontSize: "20px",
      fontWeight: "600",
      margin: "15px 0"
    },
    subHeading: {
      fontSize: "18px",
      fontWeight: "600",
      margin: "12px 0"
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#555"
    },
    list: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#555",
      paddingLeft: "20px"
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        margin: "auto",
      },
      profileInfo: {
        display: "flex",
        alignItems: "center",
      },
      profileImage: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "10px",
        objectFit: "cover",
      },
      profileName: {
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "3px",
        color: "#333",
      },
      profileDesc: {
        fontSize: "14px",
        color: "#999",
      },
      icon: {
        fontSize: "14px",
        color: "#007bff",
        cursor: "pointer",
      },
  };
  
  export default MentalHealthArticle;
  

