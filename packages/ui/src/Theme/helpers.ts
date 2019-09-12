export interface Helpers {
  flex: {
    start: string
    center: string
    between: string
    around: string
    [key: string]: string
  }
  [key: string]: any
}

export const helpers: Helpers = {
  flex: {
    start: `
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
		`,
    center: `
			display: flex;
			align-items: center;
			justify-content: center;
		`,
    between: `
			display: flex;
			align-items: center;
			justify-content: space-between;
		`,
    around: `
			display: flex;
			align-items: center;
			justify-content: space-around;
		`,
  },
}
