import Banner from "./Banner/index.vue";
import Button from "./Button/index.vue";

const names = [Banner.name, Button.name];

const appMapList = new Map();

appMapList.set(Banner.name, Banner);
appMapList.set(Button.name, Button);

export { names, appMapList };
