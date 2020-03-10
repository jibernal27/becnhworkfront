import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import Dropzone from 'react-dropzone';
import messages from './messages';

const FieldFileInput = ({
  name,
  input,
  label,
  meta: { touched, error, warning },
  message,
  accept = '',
}) => {
  const removeFile = file => () => {
    const files = input.value;
    files.splice(files.indexOf(file), 1);
    input.onChange(files);
  };
  const mapFiles = files => {
    return files.map(file => (
      <li key={file.path}>
        {file.path} - {file.size}
        {/* <Button type="button" onClick={removeFile(file)}>
          <FormattedMessage {...messages.remove} />
        </Button> */}
      </li>
    ));
  };

  const removeAll = () => {
    input.onChange([]);
  };

  const files = input.value;
  return (
    <Form.Group as={Row}>
      <Form.Label column md="4">
        {label}
      </Form.Label>
      <Col md="8">
        <Dropzone
          name={name}
          onDrop={filesToUpload => input.onChange(filesToUpload)}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <Form.Control {...getInputProps()} accept={accept} />
                <p>
                  <FormattedMessage {...messages.drag} />
                </p>
              </div>
            </section>
          )}
        </Dropzone>
        {touched &&
          ((error && <small className="text-danger">{error}</small>) ||
            (warning && <small className="text-danger">{warning}</small>))}
        {files && Array.isArray(files) && <ul>{mapFiles(files)}</ul>}
        {/* {files && files.length > 0 && (
          <Button type="button" onClick={removeAll}>
            <FormattedMessage {...messages.removeAll} />
          </Button>
        )} */}
      </Col>
    </Form.Group>
  );
};

export default function FileInput(props) {
  return <Field component={FieldFileInput} {...props} />;
}
