import { fixupRule } from "@eslint/compat";
import deprec from './deprecation';

const deprecation = fixupRule(deprec);

export { deprecation };
