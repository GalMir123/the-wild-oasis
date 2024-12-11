import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyleAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  overflow: scroll;
  padding: 4rem 4.8rem 6rem;
`;

export default function AppLayout() {
  return (
    <StyleAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyleAppLayout>
  );
}