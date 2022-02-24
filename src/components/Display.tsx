import React, { FunctionComponent } from 'react';

interface DisplayProps {
    value: string
}

const Display: FunctionComponent<DisplayProps> = ({ value }) => {
  return(
    <div className="display">
        {value}
    </div>
  )
}
export default Display;