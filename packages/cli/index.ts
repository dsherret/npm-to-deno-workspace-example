import { add } from "@dsherret/add";
import { subtract } from "@dsherret/subtract";
import chalk from "chalk";

console.log("1 + 2 =", chalk.green(add(1, 2)));
console.log("4 - 2 =", chalk.green(subtract(4, 2)));
