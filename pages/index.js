import Image from "next/image";
import styled from "styled-components";


const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.div`
  margin-top: 10rem;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 100%;
`;


export default function HomePage() {
  return (
    <>
      <StyledContainer>
      <StyledImage>
          <Image
            src="/images/meergefühl_kleine-terrasse.webp"
            alt="Bild der kleinen Terrasse im Garten"
            width={980}
            height={608}
            layout="responsive"
          />
      </StyledImage>
      </StyledContainer>
    </>
  );
}
