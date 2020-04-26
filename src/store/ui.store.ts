import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ name: "UiModule" })
export default class UiModule extends VuexModule {
  theme = "light";
  themes: Array<string> = [
    "light",
    "dark",
    "starlight",
    "magnolia",
    "mint",
    "plum",
  ];

  @Mutation
  commitTheme(theme: string) {
    this.theme = theme;
  }

  @Action({ commit: "commitTheme" })
  setTheme(theme: string) {
    return theme;
  }

  @Action({ commit: "commitTheme" })
  nextTheme() {
    const { theme, themes } = this;
    const themeIndex = themes.indexOf(theme);
    const nextTheme = themes[themeIndex + 1];

    if (nextTheme) {
      return nextTheme;
    }

    return themes[0];
  }

  @Action({ commit: "commitTheme" })
  prevTheme() {
    const { theme, themes } = this;
    const themeIndex = themes.indexOf(theme);
    const previousIndex = themeIndex - 1;

    if (previousIndex >= 0) {
      return themes[previousIndex];
    } else {
      return themes[themes.length - 1];
    }
  }
}
