/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.entry = {
        ...config.entry,
        "widget-bundle": "./src/app/widget-bundle.tsx",
      };
    }
    return config;
  },
};

export default config;
