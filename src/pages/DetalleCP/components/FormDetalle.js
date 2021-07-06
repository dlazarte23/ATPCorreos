import React from 'react';

import { Steps } from 'antd';

const FormDetalle = () => {

    const { Step } = Steps;
    
    return(
        <Steps current={1} percent={60}>
            <Step title="Precondición" />
            <Step title="Acci´ón" />
            <Step title="Resultado Esperado" />
            <Step title="Evidencias" />
        </Steps>
    );
}

export default FormDetalle;