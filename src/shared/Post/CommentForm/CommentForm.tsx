import React, { ChangeEvent, ReactNode, useRef } from 'react';
import styles from './commentform.css';
import { Formik, Form, Field } from 'formik';

interface ICommentFormProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}


export function CommentForm({ value, onChange }: ICommentFormProps) {
  const [valueError, setValueError] = React.useState('');
  const [formTouched, setFormTouched] = React.useState(false);

  function validateVal() {
    if (value !== undefined && value.length <= 3) return 'Comment should be more than 3 letters';
    return '';
  }

  const onSubmit = () => {
    setFormTouched(true);
    setValueError(validateVal());

    const isFormValid = validateVal();
    if (isFormValid) return;
    console.log('form sended');
  };

  return (
    <Formik
      initialValues={{comment: ''}}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <Field
          className={styles.input}
          as="textarea"
          id="comment"
          name="comment"
          placeholder="Comment"
          value={value}
          onChange={onChange}
          aria-invalid={valueError ? 'true' : undefined}
        />
        {formTouched && valueError && <div className={styles.error}>{valueError}</div>}
        <button className={styles.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

// no FORMIC form
// function handleSubmit(event: FormEvent) {
//   event.preventDefault();
//   setFormTouched(true);
//   setValueError(validateVal());
// const isFormValid = !validateVal();
//   if (!isFormValid) return;
//   console.log('form sended');
// }

// export function CommentForm({ value, onChange }: ICommentFormProps) {
//   const [valueError, setValueError] = React.useState('');
//   const [formTouched, setFormTouched] = React.useState(false);

//   function validateVal() {
//     if (value !== undefined && value.length <= 3) return 'Comment should be more than 3 letters';
//     return '';
//   }

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     setFormTouched(true);
//     setValueError(validateVal())

//     const isFormValid = !validateVal();
//     if (!isFormValid) return;
//     console.log('form sended');
//   }

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <textarea
//         className={styles.input}
//         value={value}
//         onChange={onChange}
//         aria-invalid={valueError ? 'true' : undefined}
//       />
//       {formTouched && valueError && <div>{valueError}</div>}
//       <button className={styles.button} type="submit">
//         Comment
//       </button>
//     </form>
//   );
// }
