import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const user = atom({
  key: "userName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
