import CommonAccordion2 from '../common/CommonAccordion2';

export const Technologies = () => {
  const accordionData = [
    {
      title: "AI & Machine Learning",
      content:
        "We use artificial intelligence and machine learning to unlock smarter app functionalities — from personalized user journeys to predictive analytics. These tools enhance automation, enable intelligent recommendations, and improve decision-making across your mobile platforms.",
    },
    {
      title: "Computer Vision",
      content:
        "Through advanced image and video analysis, we enable apps to interpret and respond to visual data in real time. From object detection and facial recognition to smart scanning features, this innovation opens new use cases across industries like retail, healthcare, and logistics.",
    },
    {
      title: "Cloud Architecture",
      content:
        "Our mobile apps are built on robust, scalable cloud environments that support real-time data sync, multi-device access, and enterprise-grade security. Cloud-native development ensures seamless performance, high availability, and effortless scalability as your user base grows.",
    },
    {
      title: "AR/VR Capabilities",
      content:
        "Augmented and virtual reality allow brands to craft immersive, interactive experiences directly within mobile apps. Whether it's virtual try-ons, 3D product showcases, or gamified brand storytelling, AR/VR adds a new layer of user engagement.",
    },
    {
      title: "IoT Integration",
      content:
        "We build apps that serve as intelligent control centers for connected devices — enabling real-time data collection, remote monitoring, and two-way communication. From smart homes to industrial systems, IoT-connected mobile apps offer enhanced control and insight.",
    },
    {
      title: "Blockchain",
      content:
        "For apps requiring enhanced security and transparency, we implement blockchain technologies to power decentralized data systems and tamper-proof digital transactions. It’s ideal for use cases like fintech, supply chain, and identity verification.",
    },
    {
      title: "Metaverse-Ready Experiences",
      content:
        "We help forward-looking brands tap into next-generation digital spaces with mobile apps that support immersive, interconnected experiences. Whether it’s integrating virtual avatars, digital marketplaces, or social 3D environments — your app is ready for what's next.",
    },
  ];

  return (
    <CommonAccordion2
      title="Technologies We Use for Mobile App Development"
      description="From Startups To Enterprises, Today’s Mobile Apps Need To Be Smart, Adaptive, And Future-Ready. Our Builds Integrate: "
      items={accordionData}
      splitRatio={0.5}
    />
  );
};