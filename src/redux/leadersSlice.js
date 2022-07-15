import { createSlice } from "@reduxjs/toolkit"

import { LEADERS } from "../shared/leaders"

export const leadersSlice = createSlice({
	name: "leaders",
	initialState: {
		leaders: LEADERS,
	},
	reducers: {},
})

export default leadersSlice.reducer