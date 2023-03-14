import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const user = atom({
  key: "userName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const classInfo = atom({
  key: "class",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
