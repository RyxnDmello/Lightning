import { ZodError } from "zod";

import envValidator, {
  EnvValidatorSchema,
} from "@validators/constants/env.validator";

const _ = process.env;

let env: EnvValidatorSchema;

try {
  env = envValidator({
    GLOBAL: {
      PORT: _.PORT,
    },
    MONGODB: {
      MONGODB_URI: _.MONGODB_URI,
    },
  });
} catch (error) {
  if (error instanceof ZodError) {
    console.error("\n", error.issues[0]?.message, "\n");
  }

  process.exit(0);
}

export default env;
