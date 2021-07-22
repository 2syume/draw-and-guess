import type { app } from "@/main";
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElDescriptions,
  ElDescriptionsItem,
  ElCollapse,
  ElCollapseItem,
  ElLoading,
  ElLink,
  ElButton,
  ElRow,
  ElCol,
} from "element-plus";

export default function installElementPlus(gapp: typeof app): void {
  gapp.use(ElContainer);
  gapp.use(ElHeader);
  gapp.use(ElMain);
  gapp.use(ElDescriptions);
  gapp.use(ElDescriptionsItem);
  gapp.use(ElCollapse);
  gapp.use(ElCollapseItem);
  gapp.use(ElLoading);
  gapp.use(ElLink);
  gapp.use(ElButton);
  gapp.use(ElRow);
  gapp.use(ElCol);
}
