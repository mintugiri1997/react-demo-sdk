import {NativeEventEmitter, NativeModules} from "react-native";
const Appcarry = {}; // This is class
const {ReactNativeAppcarry} = NativeModules;
const appcarryEventEmitter  = new NativeEventEmitter(ReactNativeAppcarry);


Appcarry.logMessgae = (message) => {
    return `This is the provided message ${message}`;
}

export default Appcarry;