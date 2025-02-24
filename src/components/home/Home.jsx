import styled from "styled-components";
import Card from "../UI/Card";
import { useContext } from "react";
import { LangContext } from "../../context/langContext";

const Home = () => {
  const langContext = useContext(LangContext)
  return (
<>
<HomeWrapper>
      <h1>{langContext.lang === "EN" ? "Welcome back!" : "Добро пожаловать!"}</h1>
    </HomeWrapper>
    <p>{langContext.lang === "En" ? "The window showed blurred fir trees, the white noise of a November blizzard; telegraph poles flickered like creeping frames in a black and white movie" : langContext.lang === "RU" ? "Окно показывало смазанные ели, белый шум ноябрьской пурги; телеграфные столбы мельтешили, как поползшие рамки кадра в черно-белом кино" : "Терезеде бүдөмүк карагайлар, ноябрь айындагы бороондун ак ызы-чуусу көрүндү; телеграф мамылары ак-кара кинотасмадагы сойлоп бараткан кадрлардай бүлбүлдөгөн"}</p>
    <p>{langContext.lang === "EN" ? "So what are you going to do?" : langContext.lang === "RU" ? "И что будешь делать?" : "Анда эмне кыласың?"}</p>
    <p>{langContext.lang === "EN" ? "So what are you going to do?" : langContext.lang === "RU" ? "И что будешь делать?" : "Анда эмне кыласың?"}</p>
</>
  );
};

export default Home;

const HomeWrapper = styled(Card)`
  width: 90%;
  max-width: 40rem;
  padding: 3rem;
  margin: 2rem auto;
  text-align: center;
`;
