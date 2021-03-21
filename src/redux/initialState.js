import GingerbreadMan from "../images/gingerbreadMan.png";
import Grandma from "../images/grandma.png";
import CookieMonster from "../images/cookieMonster.png";
import doubleBot from "../images/robot.png";
import intervalBot from "../images/robot1.png";

const initialState = {
  clicks: {
    clicksPerLevel: [10, 20, 40, 80, 160],
    clicksNumber: 0,
    level: 0,
    nextLevelClicksNumber: 10,
    loading: {
      active: false,
      error: false
    },
    doubleClick: false,
    intervalClick: false
  },
  achievements: [
    {
      id: 1,
      title: "Gingerbread Man",
      image: GingerbreadMan,
      description:
        "(also known as Gingy) is a gingerbread cookie that was baked by the Muffin Man. He is a supporting character in the Shrek series.",
      clicksToGet: 100
    },
    {
      id: 2,
      title: "Cookie Monster",
      image: CookieMonster,
      description:
        "best known for his voracious appetite and his famous eating catchphrases, such as 'Me want cookie!'",
      clicksToGet: 200
    },
    {
      id: 3,
      title: "Cookie Grandma",
      image: Grandma,
      description:
        "Grandma can bake 1000 cookies for Chrismas. Can you click 500 times a button?",
      clicksToGet: 500
    }
  ],
  doubleBot: {
    title: "Double Bot",
    image: doubleBot,
    description: "Every click is wortch 2 points",
    clicksToGet: 100
  },
  intervalBot: {
    title: "Interval Bot",
    image: intervalBot,
    description:
      "Get extra point every 3 sec or extra 2 points when you have Double Bot",
    clicksToGet: 2
  }
};

export default initialState;
