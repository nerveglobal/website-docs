import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "./styles.module.css";
import styled from "@emotion/styled";

import Discord from "@site/static/img/discord.svg";
import UGP from "@site/static/img/UGP.gif";

import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

import SearchBar from "@theme-original/SearchBar";

import True from '../css/fontTrue.css'

import {
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatIcon,
  CodeIcon,
} from "@heroicons/react/outline";

export const actions = [
  {
    title: "What is Nerve",
    href: "#",
    icon: InformationCircleIcon,
    to: "./protocol/welcometonerve",
    text: `Learn about the core concepts of Nerve. Unlimited adventures and more.`,
  },
  {
    title: "Getting Started",
    href: "#",
    icon: BookOpenIcon,
    to: "./protocol/getting-started/install",
    text: `Learn more about how to get started with Nerve.`,
  },
  {
    title: "Technical",
    href: "#",
    icon: QuestionMarkCircleIcon,
    to: "./sdk/token-economy/abstract",
    text: `Learn about the architecture of Nerve Global´s ecosystem.`,
  },
];

export const github = [
  {
    title: "Contracts",
    href: "https://github.com/nerveglobal/contracts",
    icon: CodeIcon,
  },
  {
    title: "Subgraphs",
    href: "https://github.com/nerveglobal/subgraphs",
    icon: CodeIcon,
  },
  {
    title: "Brand Assets",
    href: "https://github.com/nerveglobal/brand-assets",
    icon: CodeIcon,
  },
  {
    title: "Website",
    href: "https://github.com/nerveglobal/website",
  },
];

export const Guides = [
  {
    title: "Product Overview",
    text: "The first peer-to-peer crowdfunding application",
    to: "./protocol/what-is-nerve",
  },
  {
    title: "Being recognized",
    text: "Register a memorable and unique username",
    to: "./protocol/getting-started/username",
  },
  {
    title: "Creating a Task",
    text: "No limits on who you can challenge",
    to: "./protocol/play/create-task",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 5rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  max-height: 250px;
  min-width: 350px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
`;

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 200px;
  /* background-color: var(--ifm-color-emphasis-0); */
`;

const WideCard = styled(ShadowCard)`
  max-height: auto;

  @media (max-width: 960px) {
    margin: 0 2rem;
    max-height: fit-content;
    width: fit-content;
  }
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const TopSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }
`;

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const StyledImage = styled(ThemedImage)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
`;



const StyledGithubIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`;

const HideMedium = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

export default function Home() {
  return (
    <Layout
      title={`Nerve Docs`}
      description="Technical Documentation For Nerve"
    >
      <Container>
        <DocsHeader>
          <div
            style={{
              padding: "4rem 0",
              height: "300px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontFamily: "True" }}> Welcome to the Nerve Docs</h1>
            <HideMedium>
              <SearchBar />{" "}
            </HideMedium>
          </div>
         
          <Row>
            {actions.map((action) => (
              <Link style={{ textDecoration: "none" }} to={action.to}>
                <ShadowCard key={action.title}>
                  <TopSection>
                    <IconWrapper>
                      <action.icon
                        style={{ width: "24px" }}
                        color={action.color}
                      />
                    </IconWrapper>

                    <svg
                      style={{ width: "24px", opacity: 0.2, }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </TopSection>
                  <h3 style={{ marginBottom: ".75rem", color: action.color }}>
                    {action.title}
                  </h3>
                  <p style={{ marginBottom: ".5rem" }}>{action.text}</p>
                </ShadowCard>
              </Link>
            ))}
          </Row>
        </DocsHeader>

        <TwoRow
          style={{
            gap: "56px",
            marginTop: "5rem",
          }}
        >
          <div>
            <h2 style={{ fontFamily: "True" }}>Getting Started</h2>
            <p>
              Explore these docs to get started using the Nerve smart contracts
              in our dApp, for your project.
            </p>
            <div>
              {Guides.map((action) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={action.title}
                  to={action.to}
                >
                  <Card key={action.title} style={{ marginBottom: "1rem" }}>
                    <LinkRow>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h3 style={{ marginBottom: "0rem" }}>{action.title}</h3>
                      </div>
                      <svg
                        style={{ width: "24px", opacity: 0.2 }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                      </svg>
                    </LinkRow>
                    <p style={{ marginBottom: "0rem" }}>{action.text}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "True" }}>Developer Links</h2>
            <p>
              The Nerve codebase is comprised of an ecosystem of open source
              components.
            </p>
            {github.map((action) => (
              <Link style={{ textDecoration: "none" }} href={action.href}>
                <Card key={action.title} style={{ marginBottom: "1rem" }}>
                  <LinkRow>
                    <StyledGithubIcon
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 120.78 117.79"
                        style={{ width: "24px" }}
                      >
                        <defs></defs>
                        <title>testlogo</title>
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="Layer_1-2" data-name="Layer 1">
                            <path
                              class="cls-1"
                              d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                            />
                            <path
                              class="cls-2"
                              d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                            />
                            <path
                              class="cls-2"
                              d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                            />
                            <path
                              class="cls-2"
                              d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                            />
                            <path
                              class="cls-2"
                              d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                            />
                            <path
                              class="cls-2"
                              d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                            />
                            <path
                              class="cls-2"
                              d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                            />
                            <path
                              class="cls-2"
                              d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h3 style={{ marginBottom: "0rem", marginLeft: "16px" }}>
                        {action.title}
                      </h3>
                    </StyledGithubIcon>
                    <svg
                      style={{ width: "24px", height: "24px", opacity: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </LinkRow>
                </Card>
              </Link>
            ))}
          </div>
        </TwoRow>

{/*
        <hr />

        <Row>
          <Link
            style={{ textDecoration: "none" }}
            href={"https://discord.gg/SGmrgRq9f4"}
          >
            <CenterCard>
              <Discord style={{ width: "48px", height: "48px" }} />
              <div>
                <h3>Discord</h3>
                <p>Hop in to the #dev-chat to get realtime help.</p>
              </div>
            </CenterCard>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href={"https://discord.gg/SGmrgRq9f4"}
          >
            <CenterCard>
              <ChatIcon style={{ width: "48px", height: "48px" }} />
              <div>
                <h3>Forum</h3>
                <p>Dicsuss governance and more.</p>
              </div>
            </CenterCard>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={"https://github.com/nerveglobal"}
          >
            <CenterCard>
              <StyledGithubIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120.78 117.79"
                  style={{ width: "48px" }}
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        class="cls-1"
                        d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                      />
                      <path
                        class="cls-2"
                        d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                      />
                      <path
                        class="cls-2"
                        d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                      />
                      <path
                        class="cls-2"
                        d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                      />
                      <path
                        class="cls-2"
                        d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                      />
                      <path
                        class="cls-2"
                        d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                      />
                      <path
                        class="cls-2"
                        d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                      />
                      <path
                        class="cls-2"
                        d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                      />
                    </g>
                  </g>
                </svg>{" "}
              </StyledGithubIcon>
              <div>
                <h3>Github</h3>
                <p>View all Nerve repositories.</p>
              </div>
            </CenterCard>
          </Link>
        </Row>
            */}
        {/*<Link
          style={{
            textDecoration: "none",
            maxWidth: "960px",
            margin: "0 auto 4rem auto",
            width: "100%",
          }}
        href={"https://unigrants.org/"}
        >
          <WideCard
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <img src={UGP} width={"120px"} />
            <div>
              <h2 style={{ marginBottom: "0.5rem" }}>Nerve Grants Program - Coming soon</h2>
              <p style={{ margin: "0rem" }}>
                Nerve Foundation offers grant funding for people who are
                building communitys, apps, tools, and activities for Nerve users,
                builders, and community members.{" "}
              </p>
            </div>
          </WideCard>
        </Link>
        */}
      </Container>
    </Layout>
  );
}
