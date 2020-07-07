import React, { useState, useEffect } from 'react';
import { Spin, Alert, Button } from '~/components';

export default {
  title: 'Components|Spin',
  component: Spin
};

export const All = () => (
  <>
    <Spin spinning={true} />

    <Spin size={20} spinning={true} />

    <Spin spinning={true}>
      <Alert.Box
        visible
        text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
        title="Teste"
        showTip
      >
        <Button type="primary" styles={{ marginTop: '20px' }}>
          Nova aula
        </Button>
      </Alert.Box>
    </Spin>

    <Spin spinning={true} showTip>
      <Alert.Box
        visible
        text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
        title="Teste"
      >
        <Button type="primary" styles={{ marginTop: '20px' }}>
          Nova aula
        </Button>
      </Alert.Box>
    </Spin>
  </>
);


export const Default = () => <Spin spinning={true} />


export const CustomSize = () => <Spin size={20} spinning={true} />


export const OnContent = () => (
  <Spin spinning={true}>
    <Alert.Box
      visible
      text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
      title="Teste"
      showTip
    >
      <Button type="primary" styles={{ marginTop: '20px' }}>
        Nova aula
      </Button>
    </Alert.Box>
  </Spin>
);


export const WithTip = () => (
  <Spin spinning={true} showTip>
    <Alert.Box
      visible
      text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
      title="Teste"
    >
      <Button type="primary" styles={{ marginTop: '20px' }}>
        Nova aula
      </Button>
    </Alert.Box>
  </Spin>
);

All.story = { name: 'all spins' }
Default.story = { name: 'default' }
CustomSize.story = { name: 'with custom size' }
OnContent.story = { name: 'on content' }
WithTip.story = { name: 'with loading text' }