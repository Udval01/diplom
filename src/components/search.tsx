import React from 'react';
import {SearchIcon} from '../assets/icons';
import {Input} from '../components';

export const Autocomplete = ({setValue}) => (
  <Input
    backgroundRole="secondary"
    placeholder={'Бүтээгдэхүүн хайх'}
    placeholderTextColor="gray.40"
    role="info"
    radius="xmedium"
    onChangeText={query => {
      setValue && setValue(query);
    }}
    leftIcon={<SearchIcon />}
  />
);
