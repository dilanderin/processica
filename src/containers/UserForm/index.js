import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import UserService from '../../services/user';
import DefaultLayout from '../../layouts/DefaultLayout';
import Input from '../../components/Form/Input';
import Button from '../../components/Button';
import { ButtonContainer, FormElement, InputError, SelectContainer } from './styles';

const UserForm = () => {
  const { id } = useParams();
  const [values, setValues] = useState({});

  useEffect(async () => {
    if (id) {
      const data = await UserService.fetchUser(id);
      setValues(data.data);
    }
  }, []);

  const onSubmit = async (values) => {
    if (!id) {
      await UserService.createUser({ ...values });
      console.log('Successfully created');
    } else {
      await UserService.updateUser(id, { ...values });
      console.log('Successfully updated');
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values?.gender) {
      errors.gender = 'Required';
    }
    if (!values.status) {
      errors.status = 'Required';
    }
    if (values.email) {
      if (
        /* eslint-disable */
        !values.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
      ) {
        errors.email = 'Email must be valid';
      }
    } else if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

  const cancel = (values, form) => {
    Object.keys(values).forEach((key) => {
      form.change(key, undefined);
      form.resetFieldState(key);
    });
  };

  return (
    <DefaultLayout>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{ ...values }}
        render={({ handleSubmit, form, values, submitting, pristine }) => (
          <FormElement onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <div>
                  <label>Name</label>
                  <Input {...input} type="text" placeholder="name" />
                  {meta.error && meta.touched && <InputError>{meta.error}</InputError>}
                </div>
              )}
            </Field>

            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <label>Email</label>
                  <Input {...input} type="text" placeholder="email" />
                  {meta.error && meta.touched && <InputError>{meta.error}</InputError>}
                </div>
              )}
            </Field>

            <SelectContainer>
              <label>Gender</label>
              <Field name="gender" component="select" required={true}>
                <option />
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
            </SelectContainer>

            <SelectContainer>
              <label>Status</label>
              <Field name="status" component="select" required={true}>
                <option />
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Field>
            </SelectContainer>

            <ButtonContainer>
              {!id && (
                <Button
                  ghost
                  type="button"
                  onClick={() => cancel(values, form)}
                  mr="15px"
                  disabled={submitting || pristine}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" disabled={submitting || pristine}>{id ? 'Update' : 'Submit'}</Button>
            </ButtonContainer>
          </FormElement>
        )}
      />
    </DefaultLayout>
  );
};

export default UserForm;
