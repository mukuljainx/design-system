import * as React from 'react';
import { Dropzone, Link } from '@/index';
import { select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const all = () => {
  const type = select('type',
    ['standard', 'compressed', 'tight'],
    'standard'
  );

  const formatLabel = text('formatLabel', 'Accepted formats: PDF, jpg');
  const sizeLabel = text('sizeLabel', 'Maximum size: 25 MB');
  const multiple = boolean('multiple', true);

  const onDrop = (acceptedFiles: File[]) => {
    return action(`Accepted Files: ${acceptedFiles}`)();
  };

  return (
    <Dropzone
      formatLabel={formatLabel}
      sizeLabel={sizeLabel}
      multiple={multiple}
      type={type}
      onDrop={onDrop}
      sampleFileLink={(
        <Link
          href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
          download="Test.pdf"
          target="_blank"
        >
          Download sample file
        </Link>
      )}
    />
  );
};

const customCode = `() => {
  return (
    <Dropzone
      formatLabel='Accepted formats: PDF, jpg'
      sizeLabel='Maximum size: 25 MB'
      disabled={false}
      onDrop={(acceptedFiles, rejectedFiles) => { console.log(acceptedFiles, rejectedFiles) }}
      sampleFileLink={(
        <Link
          href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
          download="Test.pdf"
          target="_blank"
        >
          Download sample file
        </Link>
      )}
    />
  );
}`;

export default {
  title: 'Molecules|Dropzone',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};