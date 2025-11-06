import type {PluginDefinition} from "@yaakapp/api";

// Themes
import dark from "./assets/anagram-dark.json";
import light from "./assets/anagram-dark.json";


export const plugin: PluginDefinition = {
	themes:[
		{id: "anagram-dark", label: "Anagram Dark", dark: true, ...dark},
		{id: "anagram-light", label: "Anagram Light", dark: false, ...light},
	]
};
