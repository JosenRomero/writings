import { Formik, Form, Field } from "formik"
import InputForm from "./InputForm"

const ArticleForm = ({ handleArticle, description = "", tags = "" }) => {
  return (
    <div className='mt-9'>
      <Formik
        initialValues={{ description, tags }}
        validate={(values) => {
          const errors = {}

          if (!values.tags) errors.tags = "Tag is required"

          if (values.tags.split(/\s*[,]\s*/).length > 5) {
            errors.tags = "Tags must contain no more than 5 elements"
          }

          return errors
        }}
        onSubmit={(values) => {
          values.tags = values.tags.split(/\s*[,]\s*/)
          handleArticle(values)
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <div className='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50'>
            <Form onSubmit={handleSubmit}>
              <div className='p-4 bg-white rounded-t-lg'>
                <Field
                  as='textarea'
                  rows='4'
                  id='description'
                  className='w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 focus:outline-none'
                  onChange={handleChange}
                  value={values.description}
                  placeholder='Write an article...'
                />
                <InputForm
                  label='Tags'
                  type='text'
                  name='tags'
                  handleChange={handleChange}
                  value={values.tags}
                  isError={errors.tags && touched.tags}
                  placeholder='Add tags separated by commas'
                />
              </div>
              <div className='flex items-center justify-between px-3 py-2 border-t'>
                <button
                  type='submit'
                  disabled={values.description === ""}
                  className={`inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 ${
                    values.description === ""
                      ? "cursor-not-allowed !bg-gray-300"
                      : ""
                  }`}
                >
                  Post article
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default ArticleForm
