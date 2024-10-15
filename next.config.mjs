/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
    reactStrictMode: true,
    webpack(config, options) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isServer } = options;
        if (!isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: "rsc",
                    // remotes: {
                    //     // this will contain remote route
                    // },
                    filename: "static/chunks/remoteEntry.js",
                    exposes: {
                        "./template001": "./templates/testpage/tsp.tsx",
                        "./input001": "./components/input/input1.tsx",
                        "./button001": "./components/buttons/btn.tsx",
                        "./meta": "./meta/head1.tsx",
                    },
                    extraOptions: {
                        debug: false, // `false` by default
                        exposePages: false, // `false` by default
                    },
                    shared: {
                        react: {
                            singleton: true, // this will make sure it will be loaded
                            // only once during runtime
                            eager: true,
                            requiredVersion: false,
                        },
                        "react-dom": {
                            singleton: true,
                            eager: true,
                            requiredVersion: false,
                        },
                        // files or dependencies we want to share
                    },
                    initOptions: {
                        shareStrategy: "loaded-first", // Set the share strategy here
                    },
                })
            );
        }
        return config;
    },
};

export default nextConfig;
