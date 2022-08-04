export type DesktopBrowserCapabilities = {
  id: number;
  platforms: Array<any>;
}

export type DesktopPlatform = {
  browsers: Array<DesktopBrowser>;
  id: number;
  name: string;
  resolutions: Array<string>;
  value: string;
  version: string;
}

export type DesktopBrowser = {
  displayName: string;
  id: number;
  name: string;
  value: string;
  version: Array<string>;
}
