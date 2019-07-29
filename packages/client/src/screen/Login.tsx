import React, { Fragment } from "react";
import { Button, Input } from "antd";
import { Field, Form, Formik, FormikActions, FieldProps } from "formik";
import { css } from "emotion";
import { flexCenterX, flexCenterY } from "../assests/styles/utils";

import classnames from "classnames";

interface LoginFormValues {
  email: string;
  password: string;
}

const styles = css`
  form {
    width: 40%;
    max-width: 300px;
    min-width: 250px;
    text-align: center;
  }

  .title {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.75em;
    font-weight: bold;
    color: #2cb5e8;
  }
`;

const Login: React.FC<{}> = () => {
  return (
    <div style={{ height: "100vh" }} className={flexCenterY}>
      <div className={classnames(flexCenterX, styles)}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(
            values: LoginFormValues,
            actions: FormikActions<LoginFormValues>
          ) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          render={() => (
            <Form id="loginFm">
              <h1>YoYo</h1>
              <Field
                name="email"
                render={({ field, form }: FieldProps<LoginFormValues>) => (
                  <Fragment>
                    <Input type="text" {...field} placeholder="email" />
                    {form.touched.email &&
                      form.errors.email &&
                      form.errors.email}
                  </Fragment>
                )}
              />
              <Field
                name="password"
                render={({ field, form }: FieldProps<LoginFormValues>) => (
                  <Fragment>
                    <Input type="password" {...field} placeholder="password" />
                    {form.touched.email &&
                      form.errors.email &&
                      form.errors.email}
                  </Fragment>
                )}
              />
              <Button
                type="primary"
                htmlType="submit"
                form="loginFm"
                icon="login"
              >
                Đăng nhập
              </Button>
            </Form>
          )}
        />
      </div>
    </div>
  );
};

export default Login;
