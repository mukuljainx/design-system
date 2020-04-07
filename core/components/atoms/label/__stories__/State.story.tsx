import * as React from 'react';
import Label from '../index';
import { docPage } from '@/utils/docPage';

// CSF format story
export const state = () => {

  const styles = {
    marginRight: '2%',
  };

  const outerStyles = {
    display: 'flex',
  };

  return (
    <div style={outerStyles}>
      <div style={styles}>
        <Label>
          Enabled Label
        </Label>
      </div>
      <div>
        <Label disabled={true}>
          Disabled Label
        </Label>
      </div>
    </div>
  );
};

const title = 'Atoms|Typography/Label';

export default {
  title,
  component: Label,
  parameters: {
    docs: {
      page: () => docPage({ title })
    }
  }
};