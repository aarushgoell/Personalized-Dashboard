import appStore from "./appStore";

export type RootState = ReturnType<typeof appStore.getState>;
