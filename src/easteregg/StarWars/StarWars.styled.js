import styled from "@emotion/styled";
import starWars from '../data/images/starWars.jpg';

export const StarWarsOverlay = styled.div`
  position: relative;
  width: 100%;
	height: 100%;
  overflow: hidden;
  user-select: none;

  font-family: "Droid Sans", arial, verdana, sans-serif;
	font-weight: 700;
	color: #ff6;

	background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  animation: intro 120000ms ease-out 5000ms;

  @keyframes intro {
    0% { background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.1)
    ),
    url(${starWars}); }
    100% { background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.1)
    ),
    url(${starWars}); }
  }
`

export const Start = styled.p`
  position: relative;
	width: 15em;
  
	font-size: 200%;
	font-weight: 400;
	margin: 20% auto;
	color: #4ee;

	opacity: 0;
	z-index: 1;
	animation: first 5000ms ease-out;

  @keyframes first {
    0% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
  }
`

export const MainTitle = styled.h2`
  position: absolute;
	width: 2.6em;
	left: 50%;
	top: 30%;
  margin-left: -1.3em;

	font-size: 10em;
	text-align: center;
	line-height: 0.8em;
	letter-spacing: -0.05em;
	text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
  color: #000;

	opacity: 0;
	z-index: 1;
	animation: logo 15000ms cubic-bezier(.2,.85,.68,1) 5500ms;

  @keyframes logo {
    0% { transform: scale(20); opacity: 1;}
    95% { transform: scale(0.3); opacity: 1;}
    100% { transform: scale(0.3); opacity: 0;}
  }
`

export const TitlesOverlay = styled.div`
  position: absolute;
	width: 18em;
	height: 50em;
	bottom: 0;
	left: 50%;
	margin-left: -9em;

	font-size: 350%;
	text-align: justify;

	overflow: hidden;
	transform-origin: 50% 100%;
	transform: perspective(300px) rotateX(25deg);

  :after {
    position: absolute;
    content: ' ';
    left: 0;
    right: 0;
    top: 0;
    bottom: 60%;

    background-image: linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);
    pointer-events: none;
  }
`

export const TitlesContent = styled.div`
  position: absolute;
	top: 100%;
	animation: scroll 120000ms linear 16000ms infinite;

  @keyframes scroll {
    0% { top: 100%; }
    100% { top: -170%; }
  }
`

export const Titles = styled.p`
	margin: 0.8em 0;
  text-align: justify;
`

export const TitlesCentered = styled.p`
  font-size: 150%;
  margin: 0.8em 0;
  text-align: center;
`

export const Light = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  opacity: 0;

  animation: view 30000ms linear 0ms;

  @keyframes view {
    0% {  opacity: 0; }
    18% {  opacity: 1; }
    95% {  opacity: 1; }
    100% {  opacity: 0; }
  }
`