import { Formik, Form } from "formik"
import { Link } from "react-router-dom"
import InputForm from "../components/InputForm"
import useUser from "../hooks/useUser"

const RegisterPage = () => {
  const { registerUser } = useUser();
  
  return (
    <div className='max-w-lg mx-auto bg-white p-14 rounded-lg border-2 border-gray-200'>
      <h2 className='text-center font-bold text-gray-900 text-3xl mb-10'>
        Registration Form
      </h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={values => {
          const errors = {};

          if (!values.username) errors.username = 'Username is required';

          if (!values.email) {
            errors.email = 'Email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.password)  {
            errors.password = 'Password is required';
          } else if (values.password.length < 5) {
            errors.password = 'Password must be longer than or equal to 5 characters';
          } else if (values.password.length > 12) {
            errors.password = 'password must be shorter than or equal to 12 characters';
          }

          return errors;
        }}
        onSubmit={(values) => {
          registerUser(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <InputForm
              label={"Username"}
              type={"text"}
              name={"username"}
              handleChange={handleChange}
              value={values.username}
              isError={errors.username && touched.username}
            />
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
              Register
            </button>
          </Form>
        )}
      </Formik>
      <p className="mt-7 flex gap-x-2 justify-between text-gray-900">
        Already have an account? <Link className="text-sky-500" to={"/login"}>Login</Link>
      </p>
    </div>
  )
}

export default RegisterPage
