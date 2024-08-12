import { RootState } from "../../../app/store";

export const selectHeadings = (state: RootState) => state.headings;
export const selectIsLoading = (state: RootState) => state.headings.isLoading;
