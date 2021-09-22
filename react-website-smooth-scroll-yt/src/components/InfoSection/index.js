import React from 'react'
import { Button } from '../ButtonElements'
import { 
  BtnWrap, 
  Column1, 
  Column2, 
  Heading, 
  Img, 
  ImgWrap, 
  InfoContainer, 
  InfoRow, 
  InfoWrapper, 
  Subtitle, 
  TextWrapper, 
  TopLine 
} from './InfoElements'

const InfoSection = ({ 
  lightBg,
  id, 
  imgStart, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  description, 
  buttonLabel, 
  img, 
  alt, 
  primary,
  dark, 
  dark2, 
  lightTextDesc
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={lightTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                    to='home' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact="true" 
                    offset={-80} 
                    primary={primary ? 1 : 0} 
                    dark={dark ? 1: 0} 
                    dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} /> {/* 그냥 img만 하면 안됨. default 해줘야함. */}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
