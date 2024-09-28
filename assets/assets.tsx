import { DesignConsult, AIChat } from "./icons";
import { Service } from "./type";

export const ASSETS = {
  main: "#5acf57",
  sub: "#DDF8D7",
  input: "#acacac",
  pale: "#EDEDED",
};

export const UPLOAD_IMAGE_AR = 4 / 3;

export const SERVICE_LIST = [
  {
    name: "공간 디자인 컨설팅",
    screen: "upload",
    icon: DesignConsult,
  },
  { name: "AI 챗봇", screen: "upload", icon: AIChat },
] satisfies Service[];
