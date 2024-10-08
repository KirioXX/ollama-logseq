import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin";

export const addSettingsToLogseq = async () => {
  const settingsTemplate: SettingSchemaDesc[] = [
    {
      key: "host",
      type: "string",
      title: "Host",
      description: "Overwrite the host of your ollama model",
      default: null,
    },
    {
      key: "model",
      type: "string",
      title: "LLM Model",
      description: "Set your desired model to use ollama",
      default: "mistral-nemo",
    },
    {
      key: "shortcut",
      type: "string",
      title: "Shortcut",
      description: "Shortcut to open plugin command pallete",
      default: "mod+shift+o",
    },
  ];
  logseq.useSettingsSchema(settingsTemplate);
};
