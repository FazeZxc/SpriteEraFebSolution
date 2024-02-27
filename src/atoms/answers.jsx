import { atom } from "recoil";

export const answerAtom = atom({
  key: "answerAtom",
  default: [],
});

export const timeTakenAtom = atom({
    key: "timeTakenAtom",
    default: 0
})
