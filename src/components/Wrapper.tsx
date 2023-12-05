import styled from 'styled-components'
import { css } from 'styled-components'
import { ThemeStyles } from './styles/ThemeStyles'
import { ReactNode } from 'react'

interface IWrapper {
	mode?: string
	children?: ReactNode
}

const Wrapper = ({ mode, children }: IWrapper) => {
	return (
		<WrapperBody mode={mode}>
			<WrapperMain>{children}</WrapperMain>
		</WrapperBody>
	)
}
export default Wrapper

// ==============================================================================================

const WrapperBody = styled.div<IWrapper>`
	flex-grow: 1;
	width: 100%;

	display: flex;
	flex-direction: column;

	// default
	background: ${ThemeStyles.bodyBackgroundColor.dark};

	// dark
	${props =>
		props.mode === 'dark' &&
		css<IWrapper>`
			background: ${ThemeStyles.bodyBackgroundColor.dark};
		`}

	// light
	${props =>
		props.mode === 'light' &&
		css<IWrapper>`
			background: ${ThemeStyles.bodyBackgroundColor.light};
		`}
`

// ==============================================================================================

const media = {
	// 15px + 1400px + 15px
	widthPlusPaddings: '1430px',
}

const WrapperMain = styled.div`
	flex-grow: 1;
	background: inherit;

	// Adaptive
	width: 100%;
	max-width: ${media.widthPlusPaddings};
	padding: 0px 15px;
	margin: 0px auto;

	@media (max-width: ${media.widthPlusPaddings}) {
		max-width: 970px;
	}

	@media (max-width: 991.98px) {
		max-width: 750px;
	}

	@media (max-width: 767.98px) {
		max-width: none;
	}

	//flex-settings
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	row-gap: 50px;
	justify-content: space-evenly;
	align-content: flex-start;

	padding-top: 60px;
`

// ==============================================================================================
