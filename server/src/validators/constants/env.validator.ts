import * as z from "zod";

const globalValidatorSchema = z.strictObject(
  {
    PORT: z.coerce
      .number("Port Must Be A Valid Number")
      .min(3000, "Port Must Be Between 3000 And 9999")
      .max(9999, "Port Must Be Between 3000 And 9999")
      .default(8080),
  },
  "Global Environment Variables Are Missing",
);

const mongodbValidatorSchema = z.strictObject(
  {
    MONGODB_URI: z.string("MongoDB URI Must Be A Valid URI"),
  },
  "MongoDB Environment Variables Are Missing",
);

const envValidatorSchema = z.strictObject(
  {
    GLOBAL: globalValidatorSchema,
    MONGODB: mongodbValidatorSchema,
  },
  "Environment Variables Are Required",
);

const envValidator = (variables: Record<string, unknown>) => {
  return envValidatorSchema.parse(variables);
};

export type EnvValidatorSchema = z.infer<typeof envValidatorSchema>;

export default envValidator;
