import { atom } from "recoil"

export const exerciseDataState = atom<object>({
  key: "exerciseData",
  default: {},
})

export const exerciseAudioUrlState = atom<string>({
  key: "exerciseAudioUrl",
  default: "",
})

export const exerciseIdState = atom<number>({
  key: "exerciseId",
  default: 0,
})

export const exerciseLetterPoolState = atom<string[]>({
  key: "exerciseLetterPool",
  default: [],
})
