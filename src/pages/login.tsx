import React from "react";
import { Heading, Box, Text, Link } from "@chakra-ui/core";
import { Formik, Form, Field } from "formik";
import MyButton from "../components/my-button";
import MyFormControl from "../components/my-form-control";
import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("tidak boleh kosong"),
  password: Yup.string()
    .min(6, "Minimal 6 karakter")
    .required("tidak boleh kosong"),
});

const Login = () => {
  return (
    <Box width={"50%"} mx={"auto"} padding={"2rem"} shadow={"md"} my={"5rem"}>
      <Heading>Login</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eos?
      </Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validation}
      >
        {(props) => (
          <Form>
            <Field name="email">
              {({ field, form }: any) => {
                return (
                  <MyFormControl
                    error={form.errors.email}
                    touched={form.touched.email}
                    field={field}
                    label={"Email"}
                    name={"email"}
                  />
                );
              }}
            </Field>
            <Field name="password">
              {({ field, form }: any) => {
                return (
                  <MyFormControl
                    error={form.errors.password}
                    touched={form.touched.password}
                    field={field}
                    label="Password"
                    name={"password"}
                    type="password"
                  />
                );
              }}
            </Field>
            <MyButton type={"submit"} full loading={props.isSubmitting}>
              Login
            </MyButton>
          </Form>
        )}
      </Formik>

      <Link href={"/register"}>don't have a account?</Link>
    </Box>
  );
};

export default Login;
