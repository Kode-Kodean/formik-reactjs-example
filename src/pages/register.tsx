import React from "react";
import { Heading, Box, Text, Link } from "@chakra-ui/core";
import { Formik, Form, Field } from "formik";
import MyButton from "../components/my-button";
import MyFormControl from "../components/my-form-control";
import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string().required("tidak boleh kosong"),
  email: Yup.string().email("Email tidak valid").required("tidak boleh kosong"),
  password: Yup.string()
    .min(6, "Minimal 6 karakter")
    .required("tidak boleh kosong"),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), ""], "password tidak sama")
    .required("tidak boleh kosong"),
});

const Register = () => {
  return (
    <Box width={"50%"} mx={"auto"} padding={"2rem"} shadow={"md"} my={"5rem"}>
      <Heading>Register</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eos?
      </Text>

      <Formik
        initialValues={{ name: "", email: "", password: "", password2: "" }}
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
            <Field name="name">
              {({ field, form }: any) => {
                return (
                  <MyFormControl
                    error={form.errors.name}
                    touched={form.touched.name}
                    field={field}
                    label={"Name"}
                    name={"name"}
                  />
                );
              }}
            </Field>
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
            <Field name="password2">
              {({ field, form }: any) => {
                return (
                  <MyFormControl
                    error={form.errors.password2}
                    touched={form.touched.password2}
                    field={field}
                    label="Confirm Password"
                    name={"password2"}
                    type="password"
                  />
                );
              }}
            </Field>
            <MyButton type={"submit"} full loading={props.isSubmitting}>
              Register
            </MyButton>
          </Form>
        )}
      </Formik>

      <Link href={"/"}>have a account?</Link>
    </Box>
  );
};

export default Register;
