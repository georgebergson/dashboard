import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
  mdiFinance,
  mdiOrderBoolAscendingVariant,
  mdiFilePlus 

} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Painel",
  },
  {
    label: "Cadastros",
    icon: mdiSquareEditOutline,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    label: "Financeiro",
    icon: mdiFinance,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    label: "Estoque",
    icon: mdiOrderBoolAscendingVariant ,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    label: "Fiscal",
    icon: mdiFilePlus  ,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    to: "/tables",
    label: "Tables",
    icon: mdiTable,
  },
  {
    to: "/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/ui",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/responsive",
    label: "Responsive",
    icon: mdiResponsive,
  },
  {
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    to: "/error",
    label: "Error",
    icon: mdiAlertCircle,
  },
  {
    label: "Dropdown",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    href: "https://github.com/justboil/admin-one-vue-tailwind",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank",
  },
  {
    href: "https://github.com/justboil/admin-one-react-tailwind",
    label: "React version",
    icon: mdiReact,
    target: "_blank",
  },
];
