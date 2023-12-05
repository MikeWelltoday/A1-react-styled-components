import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { ThemeStyles } from './components/styles/ThemeStyles'

// components
import Wrapper from './components/Wrapper'
import Card from './components/Card'

// images
import desertImage from './images/desert.webp'
import winterImage from './images/winter.webp'
import summerImage from './images/summer.webp'
import { MyButton } from './components/ChangeModeButton'

// function
function App() {
	const [mode, setMode] = useState('dark')
	const changeMode = () => {
		if (mode === 'dark') {
			setMode('light')
		} else {
			setMode('dark')
		}
	}

	return (
		<div className='App'>
			<MyButtonBox mode={mode}>
				<MyButton onClick={changeMode}>{mode}</MyButton>
			</MyButtonBox>

			{/* dark | light */}
			<Wrapper mode={mode}>
				<Card mode={mode} imagePath={desertImage} />
				<Card mode={mode} imagePath={winterImage} />
				<Card mode={mode} imagePath={summerImage} />
				<Card mode={mode} imagePath={desertImage} />
				<Card mode={mode} imagePath={summerImage} />
				<Card mode={mode} imagePath={winterImage} />
				<Card mode={mode} imagePath={desertImage} />
				<Card mode={mode} imagePath={winterImage} />
			</Wrapper>
		</div>
	)
}

export default App

interface IMyButtonBox {
	mode?: string
}

const MyButtonBox = styled.div<IMyButtonBox>`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  // default
  background: ${ThemeStyles.bodyBackgroundColor.dark};

  // dark
  ${(props) =>
          props.mode === 'dark' &&
          css<IMyButtonBox>`
            background: ${ThemeStyles.bodyBackgroundColor.dark};
          `} // light
  ${(props) =>
          props.mode === 'light' &&
          css<IMyButtonBox>`
            background: ${ThemeStyles.bodyBackgroundColor.light};
          `}
`