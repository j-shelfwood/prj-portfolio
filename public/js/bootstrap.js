// Here we import alpine and add the cli component with Alpine.data

import Alpine from "alpinejs";
import cli from "./js/cli.js";

window.Alpine = Alpine;

Alpine.data("cli", cli);

Alpine.start();
