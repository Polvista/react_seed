/// <reference path="axios/axios.d.ts" />
/// <reference path="reselect/reselect.d.ts" />

//declare const Proxy;
//declare const module;
declare const process: NodeJSProcess;

interface DevToolsExtension {
    devToolsExtension?: (opts?: DevToolsExtensionOpts) => void;
}

interface DevToolsExtensionOpts {
    deserializeState: (state: any) => any
}

interface NodeJSProcess {
    env: NodeJSEnvironment;
}

interface NodeJSEnvironment {
    ENV: 'development' | 'production';
}
