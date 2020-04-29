import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ name: "UiModule" })
export default class UiModule extends VuexModule {
  theme = "light";
  themes = ["light", "dark", "starlight", "magnolia", "mint", "plum"];
  storedTheme = localStorage.getItem("UiModule.theme");

  @Mutation
  setTheme(theme: string) {
    this.theme = theme;

    localStorage.setItem("UiModule.theme", theme);
  }

  @Action({ commit: "setTheme" })
  nextTheme() {
    const { theme, themes } = this;
    const themeIndex = themes.indexOf(theme);
    const nextTheme = themes[themeIndex + 1];

    if (nextTheme) {
      return nextTheme;
    }

    return themes[0];
  }

  @Action({ commit: "setTheme" })
  prevTheme() {
    const { theme, themes } = this;
    const themeIndex = themes.indexOf(theme);
    const previousIndex = themeIndex - 1;

    if (previousIndex >= 0) {
      return themes[previousIndex];
    }

    return themes[themes.length - 1];
  }
}
