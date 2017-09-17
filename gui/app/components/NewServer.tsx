// import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { Field, FormErrors, FormProps, reduxForm } from 'redux-form';


export interface Props extends FormProps {
  createServer(image: string, name: string, dataFrom: string): void,
}

export class NewServer extends React.Component<Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Create a new server</h1>
        <form onSubmit={handleSubmit} >
          <label>Name</label>
          <Field name="name" component="input" type="text" />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newServer',
})(NewServer);
