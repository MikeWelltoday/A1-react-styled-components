import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

// nullification ========================================================
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

html {
	height: 100%;

	// 1rem = 16px
	font-size: 16px;
}

body {
	height: 100%;
	line-height: 1;
}

#root {
	min-height: 100%;
	overflow: hidden;
}

img {
	vertical-align: top;
}

li {
	list-style-type: none;
}

a,
a:hover,
a:active {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}

// ======================================================================
#root {
	display: flex;
	flex-direction: column;
}

#root .App {
	flex-grow: 1;

	display: flex;
	flex-direction: column;
}













`
