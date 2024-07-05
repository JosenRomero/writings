import { Formik, Form } from "formik"
import InputForm from "../components/InputForm"
import useUser from "../hooks/useUser"

const LoginPage = () => {
  const { loginUser } = useUser();

  return (
    <div className='max-w-lg mx-auto bg-white p-14 rounded-lg border-2 border-gray-200'>
      <h2 className='text-center font-bold text-gray-900 text-3xl mb-10'>
        Login
      </h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) errors.password = 'Password is required';

          return errors;
        }}
        onSubmit={(values) => {
          loginUser(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <InputForm
              label={"Email"}
              type={"email"}
              name={"email"}
              handleChange={handleChange}
              value={values.email}
              placeholder={"example@example.com"}
              isError={errors.email && touched.email}
            />
            <InputForm
              label={"Password"}
              type={"password"}
              name={"password"}
              handleChange={handleChange}
              value={values.password}
              placeholder={"*****"}
              isError={errors.password && touched.password}
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginPage
