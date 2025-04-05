import religious from "../Assets/religious.avif";
import health from "../Assets/health.avif";
import food from "../Assets/food.webp";
import govt from "../Assets/Govern.avif";
import amazon from "../Assets/amazon.png";
import social from "../Assets/social.avif";

const modes = [
  {
    img: religious,
    title: "Religious Mode",
    desc: "Engage with spiritual content, listen to devotional songs, and explore religious scriptures in a calm and guided environment.",
    button: "/pages/mode/Religious.jsx",
    navigate:"/chat/religious"
  },
  {
    img: health,
    title: "Wellness Mode",
    desc: "Get daily health tips, medication reminders, and talk to your AI health companion for wellness guidance and check-ins.",
    button: "/pages/mode/Health.jsx",
    navigate:"/chat/health"
  },
  {
    img: food,
    title: "Food Order Assist",
    desc: "Easily order food from your favourite restaurants with voice guidance and simplified steps tailored for senior comfort.",
    button: "/pages/mode/Food.jsx",
    navigate:"/chat/order-food"
  },
  {
    img: govt,
    title: "Government Schemes",
    desc: "Get easy-to-understand information about senior citizen government benefits, pensions, and healthcare schemes.",
    button: "/pages/mode/GovtScheme.jsx",
    navigate:"/chat/govt-scheme"
  },
  {
    img: amazon,
    title: "Amazon Order Assist",
    desc: "Shop on Amazon with ease — search, add to cart, and place orders using simplified instructions and AI guidance.",
    button: "/pages/mode/Amazon.jsx",
    navigate:"/chat/order"
  },
  {
    img: social,
    title: "Social Connect",
    desc: "Stay connected with your family and friends via WhatsApp, Facebook, or video calls — all simplified for you.",
    button: "/pages/mode/Social.jsx",
    navigate:"/chat/social"
  },
];

export default modes;
