import Header from "../Header";
// import TrendinBox from "../TrendinBox";

import { MainScreenContainer, Section } from "./style";

export default function MainScreen({ children }) {
  return (
    <MainScreenContainer>
      <Header />
      <main>
        <Section>{children}</Section>
        {/* <TrendingBox /> */}
      </main>
    </MainScreenContainer>
  );
}
