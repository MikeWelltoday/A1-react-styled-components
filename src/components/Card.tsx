import {ThemeStyles} from './styles/ThemeStyles'
import styled, {css} from 'styled-components'

interface ICard {
    mode?: string;
    imagePath?: string;
}

const Card = ({mode, imagePath}: ICard) => {
    return (
        <CardWrapper>
            <CardBody mode={mode}>
                <CardImage src={imagePath}/>
                <CardTitle mode={mode}>headline</CardTitle>
                <CardText mode={mode}>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
                    ornare in venen.
                </CardText>
                <CardButtonWrapper>
                    <CardButton mode={mode}>See more</CardButton>
                    <CardButton2 mode={mode}>Save</CardButton2>
                </CardButtonWrapper>
            </CardBody>
        </CardWrapper>
    )
}
export default Card

// ==========================================

const CardWrapper = styled.div`
  flex: 0 0 320px;
  height: 350px;
  background: transparent;

  align-self: flex-start;
  padding: 0 10px;
`

const CardBody = styled.div<ICard>`
  width: 300px;
  height: 100%;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  //default
  background: ${ThemeStyles.cardBackgroundColor.dark};
  box-shadow: 0 4px 20px 5px rgba(238, 235, 235, 0.247);

  //dark
  ${(props) =>
          props.mode === 'dark' &&
          css<ICard>`
            background: ${ThemeStyles.cardBackgroundColor.dark};
            box-shadow: 0px 4px 20px 5px rgba(238, 235, 235, 0.247);
          `} //light
  ${(props) =>
          props.mode === 'light' &&
          css<ICard>`
            background: ${ThemeStyles.cardBackgroundColor.light};
            box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.349);
          `}
`

const CardImage = styled.img<ICard>`
  width: 280px;
  height: 170px;
  background: lightgray 50% / cover no-repeat;
  border-radius: 10px;

  margin: 10px auto 0px auto;
`

const CardTitle = styled.p<ICard>`
  margin: 20px 0 0 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  font-family: "Inter", sans-serif;

  // default
  color: ${ThemeStyles.cardFontColor.light};

  //dark
  ${(props) =>
          props.mode === 'dark' &&
          css<ICard>`
            color: ${ThemeStyles.cardFontColor.light};
          `} //light
  ${(props) =>
          props.mode === 'light' &&
          css<ICard>`
            color: ${ThemeStyles.cardFontColor.dark};
          `}
`

const CardText = styled.p<ICard>`
  margin: 20px 0px 0px 20px;
  max-width: 260px;
  letter-spacing: 0.1px;

  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.7;

  // default
  color: ${ThemeStyles.cardFontColor.light};

  //dark
  ${(props) =>
          props.mode === 'dark' &&
          css<ICard>`
            color: ${ThemeStyles.cardFontColor.light};
          `} //light
  ${(props) =>
          props.mode === 'light' &&
          css<ICard>`
            color: ${ThemeStyles.cardFontColor.dark};
          `}
`
const CardButtonWrapper = styled.div`
  height: 30px;
  margin: 20px 0 0 20px;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
`
const CardButton = styled.button<ICard>`
  width: 86px;
  height: 30px;
  border-radius: 5px;

  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 2;
  letter-spacing: 0.4px;

  cursor: pointer;

  //default
  color: ${ThemeStyles.cardFontColor.dark};
  background: ${ThemeStyles.cardButtonColor.dark};

  //dark
  ${(props) =>
          props.mode === 'dark' &&
          css<ICard>`
            color: ${ThemeStyles.cardFontColor.dark};
            background: ${ThemeStyles.cardButtonColor.dark};
          `} //light
  ${(props) =>
          props.mode === 'light' &&
          css<ICard>`
            color: ${ThemeStyles.cardFontColor.light};
            background: ${ThemeStyles.cardButtonColor.light};
          `}
`

const CardButton2 = styled(CardButton)`
  background: transparent;

  // default
  border: 2px solid ${ThemeStyles.cardButtonColor.dark};
  color: ${ThemeStyles.cardButtonColor.dark};

  //dark
  ${(props) =>
          props.mode === 'dark' &&
          css<ICard>`
            border: 2px solid ${ThemeStyles.cardButtonColor.dark};
            color: ${ThemeStyles.cardButtonColor.dark};
          `} //light
  ${(props) =>
          props.mode === 'light' &&
          css<ICard>`
            border: 2px solid ${ThemeStyles.cardButtonColor.light};
            color: ${ThemeStyles.cardButtonColor.light};
          `}
`
